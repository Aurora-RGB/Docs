---
searchTitle: "How to Use Aurora with OpenRGB"
title: OpenRGB
description:
    Using Aurora with OpenRGB supported devices.
authors:
  - Aytackydln
---

You can use Aurora with OpenRGB for ultimate lighting control, integration, performance and compatibility.

## Required Software

[OpenRGB](https://openrgb.org/)

## Needed configuration

1. Enable SDK Server from OpenRGB
![OpenRGB Setup screenshot](img/docs/openrgb-setup.png)
You can also make OpenRGB start at boot and enable SDK Server automatically from it's settings.
2. Make sure **OpenRGB (RGB.NET)** is enabled in Aurora's **Device Manager**

### "Device is Detected in OpenRGB but not listed in Aurora"
For Aurora to use RGB devices safely, devices must support "Direct Mode"
Check [Wiki](https://github.com/Aurora-RGB/Aurora/wiki) for more details
