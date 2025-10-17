# 3dvr-meet

Lightweight WebRTC starter that ships a local copy of [Gun](https://gun.eco/) for signaling and exposes
an input for choosing your preferred relay (defaulting to `https://3dvr-relay.fly.dev/gun`).

## Local development

```bash
npm install
npm run relay  # launches a local Gun relay on http://localhost:8765/gun
python -m http.server 8000
```

Open `http://127.0.0.1:8000/` in two browser tabs (or devices) and join the same room. The Test Link button
acts as a shared click counter so you can confirm connectivity without relying on audio/video.

Use the "Relays" input to add comma-separated URLs for custom signaling nodes. The preferences persist in
localStorage; clearing the field reverts to the bundled default Fly.io relay. The active list is re-read on
join so you can update it without reloading the page.

## Vendored assets

* `vendor/gun.js` – Gun v0.2020.1241 from npm (MIT, see `vendor/GUN-LICENSE.md`).
