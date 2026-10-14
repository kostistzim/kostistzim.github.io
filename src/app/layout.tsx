import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Konstantinos Tzimoulias",
  description: "Kostis Tzimoulias: MSc Human-Centered AI student at DTU, Copenhagen. Mathematician by training, AI engineer by practice. CV, projects, thesis and contact.",
  metadataBase: new URL("https://kostistzim.github.io"),
  openGraph: { title: "Konstantinos Tzimoulias", description: "AI engineer in training, Copenhagen. CV, projects and thesis.", url: "https://kostistzim.github.io/", type: "profile", images: ["/portrait.jpg"] },
  icons: { icon: "/favicon.svg" },
};

// Applies the stored theme before first paint so there is no flash.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;return}}catch(e){}document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
