"use client";
import { useEffect, useState } from "react";

type Track = { name: string; artist: string; album: string; art: string; url: string; nowPlaying: boolean };

const USER = process.env.NEXT_PUBLIC_LASTFM_USER;
const KEY = process.env.NEXT_PUBLIC_LASTFM_KEY;

export const nowPlayingConfigured = Boolean(USER && KEY);

export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    if (!USER || !KEY) return;
    let alive = true;
    const load = async () => {
      try {
        const r = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${KEY}&format=json&limit=1`);
        if (!r.ok) throw new Error(String(r.status));
        const j = await r.json();
        const t = j?.recenttracks?.track?.[0];
        if (!t) throw new Error("no track");
        const art = (t.image || []).find((i: { size: string }) => i.size === "large")?.["#text"] || "";
        if (alive) {
          setTrack({ name: t.name, artist: t.artist?.["#text"] ?? "", album: t.album?.["#text"] ?? "", art, url: t.url, nowPlaying: t["@attr"]?.nowplaying === "true" });
          setState("ok");
        }
      } catch {
        if (alive) setState("error");
      }
    };
    load();
    const id = setInterval(load, 60_000);
    return () => { alive = false; clearInterval(id); };
  }, []);

  if (!USER || !KEY) return null;
  return (
    <div className="tile tile--music">
      {state === "ok" && track ? (
        <a className="music" href={track.url} rel="noreferrer">
          {track.art ? <img className="music__art" src={track.art} alt="" width={64} height={64} /> : <div className="music__art music__art--empty" aria-hidden="true" />}
          <span className="music__text">
            <span className="tile__label">{track.nowPlaying ? <><i className="live" aria-hidden="true" />Now playing</> : "Last played"}</span>
            <span className="music__title">{track.name}</span>
            <span className="music__artist">{track.artist}</span>
          </span>
        </a>
      ) : (
        <div className="music music--empty">
          <div className="music__art music__art--empty" aria-hidden="true" />
          <span className="music__text">
            <span className="tile__label">Music</span>
            <span className="music__artist">{state === "loading" ? "Checking Last.fm…" : "Last.fm is not answering right now."}</span>
          </span>
        </div>
      )}
    </div>
  );
}
