// kostistzim.github.io — the marker that travels the line, and a live GitHub feed.
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var main = document.getElementById("main");
  var marker = document.getElementById("marker");
  var here = document.getElementById("here");
  var stations = Array.prototype.slice.call(document.querySelectorAll(".station"));
  var links = Array.prototype.slice.call(document.querySelectorAll("#stations a"));

  // The marker sits on the current section's station dot and slides between dots on scroll.
  function dotY(section) {
    var h2 = section.querySelector("h2");
    var cs = getComputedStyle(h2, "::before");
    var top = parseFloat(cs.top) || 0;
    var size = parseFloat(cs.height) || 22;
    return section.offsetTop + h2.offsetTop + top + size / 2 - 6;
  }

  var current = null;
  function setCurrent(section) {
    if (section === current) return;
    current = section;
    stations.forEach(function (s) { s.classList.toggle("is-here", s === section); });
    links.forEach(function (a) {
      var on = a.getAttribute("href") === "#" + section.id;
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
    here.textContent = section.querySelector("h2").textContent;
    marker.style.setProperty("--marker-y", dotY(section) + "px");
  }

  function pick() {
    var probe = window.scrollY + Math.min(window.innerHeight * 0.33, 260);
    var best = stations[0];
    for (var i = 0; i < stations.length; i++) {
      if (stations[i].offsetTop + main.offsetTop <= probe) best = stations[i];
    }
    // At the very end of the page, the last station is where the reader is.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      best = stations[stations.length - 1];
    }
    setCurrent(best);
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { pick(); ticking = false; });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { current = null; pick(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { current = null; pick(); });
  // Re-place the marker whenever the page reflows (font swap, image load, feed update).
  if ("ResizeObserver" in window) new ResizeObserver(function () { current = null; pick(); }).observe(main);
  window.addEventListener("load", function () { current = null; pick(); });
  if (reduceMotion) marker.style.transition = "none";
  pick();

  // Print the page as the CV.
  var print = document.getElementById("print");
  if (print) print.addEventListener("click", function () { window.print(); });

  // Live list of recently pushed repositories, with the static list as the fallback.
  var feed = document.getElementById("feed");
  var list = document.getElementById("feed-list");
  var note = document.getElementById("feed-note");
  if (!feed || !list || !("fetch" in window)) return;

  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function when(iso) {
    var d = new Date(iso);
    return isNaN(d) ? "" : months[d.getMonth()] + " " + d.getFullYear();
  }

  fetch("https://api.github.com/users/kostistzim/repos?sort=pushed&per_page=12", {
    headers: { Accept: "application/vnd.github+json" }
  })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (repos) {
      var own = repos.filter(function (r) { return r.name !== "kostistzim.github.io" && r.name !== "kostistzim"; }).slice(0, 5);
      if (!own.length) return;
      list.textContent = "";
      own.forEach(function (r) {
        var li = document.createElement("li");
        li.className = "feed__item";
        var a = document.createElement("a");
        a.href = r.html_url;
        a.textContent = r.name;
        var meta = document.createElement("span");
        meta.className = "feed__meta";
        meta.textContent = [r.fork ? "Fork" : r.language, when(r.pushed_at)].filter(Boolean).join(" · ");
        li.appendChild(a);
        li.appendChild(meta);
        list.appendChild(li);
      });
      feed.classList.add("is-live");
      note.textContent = "Live from the GitHub API.";
    })
    .catch(function () {
      note.textContent = "GitHub API unavailable right now; showing a saved list.";
    });
})();
