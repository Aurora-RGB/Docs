---
searchTitle: "How to Use Aurora with Asus Devices"
title: Asus
authors:
  - Popat0
---

You can use Aurora profiles and brand specific integrations (like Chroma and Lightsync) with Corsair devices using Aurora.

# Required Software
One of:

* Asus Aura Sync 1.01.79_V2.1 or later - [Download](https://www.asus.com/campaign/aura/us/download.html)
* Asus Armory Crate
* OpenRGB

{{% alert "Version 1.07.79 of Asus Aura Sync will NOT work for most users." "info" %}}

{{% alert "Using OpenRGB instead of Asus software is highly recommended." "info" %}}

# Needed configuration

By default, all Asus lights that are not a keyboard will default to the mouse logo color.
To change this behaviour, you must open the Aurora settings, get to the "Devices and Wrappers" tab and click the "Configure Asus Peripheral Devices" button, which will open an interface to assign each individual light to a certain key or zone, such as mousepad lights.

# Known issues

Items controlled by both Aura and another supported app can create conflicts.
A common example would be Corsair RAM in the system with Asus Aura and iCue both trying to control it at the same time.
The fix for that is rather simple : Open up the Aura app and disable sync for that peripheral/component by clicking the unlink button under its icon, at the top.

# Supported Devices

Most Asus devices supported by Asus Aura.
Most components plugged in directly to an Aura enabled motherboard (Notable exceptions include the Corsair Vengeance PRO ram, which needs to be controlled via iCue instead)
