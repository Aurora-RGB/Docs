---
title: Aurora Logs
searchTitle: Where are Aurora Logs Located?
description: Tutorial explaining Aurora log location and it's files
authors:
  - Aytackydln
---

Short answer:
> %appdata%\Aurora\Logs

If you want to know which file to share:
1. Device related; log files starting with **Devices-** then a date
2. UI, Layers, Game Integrations; files that are just dates

## Event Viewer Logs

In case Aurora cannot handle the crash, Windows logs the error in **Event Viewer**

If asked, you can find them by searching Windows with keyword **Event Viewer**.
Useful ones have the source ".NET Runtime"

Below image shows an example log
![SCreenshot showing Aurora's crash log on EventViewer](img/docs/EventViewrAurora.webp)
