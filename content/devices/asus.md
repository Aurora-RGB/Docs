---
searchTitle: "How to Use Aurora with Asus Devices"
title: Asus
authors:
  - Popat0
  - Aytackydln
---

You can use Aurora profiles and brand specific integrations (like Chroma and Lightsync) with Corsair devices using Aurora.

# Required Software
One of:

* Asus Aura Sync 1.01.79_V2.1 or later - [Download from Asus](https://www.asus.com/campaign/aura/us/download.html)
* Asus Armory Crate
* OpenRGB

{{% alert "Version 1.07.79 of Asus Aura Sync will NOT work for most users." "info" %}}

{{% alert "Using OpenRGB instead of Asus software is highly recommended." "info" %}}

# Needed configuration

After installing official software, make sure "LightingService" runs in the background.

If you aren't using official software, make sure "LightingService" **is disabled**

see [Disabling Windows Services]({{% ref "diagnostics/disabling-windows-services" %}})

# Known issues

Items controlled by both Aura and another supported app can create conflicts.
A common example would be Corsair RAM in the system with Asus Aura and iCue both trying to control it at the same time.
The fix for that is rather simple :
Open up the Aura app and disable sync for that peripheral/component by clicking the unlink button under its icon, at the top.

# Supported Devices

Most Asus devices supported by Asus Aura.
Most components plugged in directly to an Aura enabled motherboard (Notable exceptions include the Corsair Vengeance PRO ram, which needs to be controlled via iCue instead)
