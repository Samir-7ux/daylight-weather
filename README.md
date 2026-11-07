# Daylight Weather

A lightweight, installable weather app with Nepal-focused place search, live
conditions and forecasts, theme customization, and an offline app shell.

## Mobile store preparation

The Android and iOS wrappers use Capacitor with the permanent app identifier
`com.samir7ux.daylightweather`. Run the **Build mobile apps** workflow from
GitHub Actions to create downloadable test artifacts:

- Android: a debug APK for device testing and an **unsigned** release AAB.
- iOS: an **unsigned** Xcode archive for inspection.

These are build artifacts, not store-ready signed submissions. Publishing still
requires an Apple Developer Program account and App Store Connect setup, a
Google Play developer account and Play Console setup, platform signing
credentials, store listing materials, privacy disclosures, testing, and approval.
Do not commit signing keys or upload them to the repository. Apple requires a
macOS/Xcode environment to sign and distribute iOS apps.

## Open the app

Once the GitHub Pages deployment finishes, visit:

https://samir-7ux.github.io/daylight-weather/

## Install

Open the site over HTTPS in a supported browser and choose **Install** or
**Add to Home Screen**. On iOS, use Safari's **Share → Add to Home Screen**.

## Data sources

- Weather: [Open-Meteo](https://open-meteo.com/)
- Place search: [Photon](https://photon.komoot.io/) and
  [OpenStreetMap contributors](https://www.openstreetmap.org/copyright)

Privacy policy: https://samir-7ux.github.io/daylight-weather/privacy-policy.html
Support: https://github.com/Samir-7ux/daylight-weather/issues

The app is a web app and is not currently listed in Google Play or Apple's App
Store.
