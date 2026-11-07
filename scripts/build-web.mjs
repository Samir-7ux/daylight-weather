import { cp, mkdir } from "node:fs/promises";

const assets = [
  "index.html",
  "privacy-policy.html",
  "manifest.webmanifest",
  "service-worker.js",
  "app-icon.svg",
  "app-icon-192.png",
  "app-icon-512.png",
  "apple-touch-icon.png"
];

await mkdir("www", { recursive: true });
await Promise.all(assets.map(asset => cp(asset, `www/${asset}`)));
