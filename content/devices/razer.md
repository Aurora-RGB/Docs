---
searchTitle: "How to Use Aurora with Razer Devices"
title: Razer
authors:
  - Aytackydln
---

You can have brand specific integrations (like LightFX and Lightsync) with Razer devices using Aurora.

# Required Software

One of:
* Synapse
* OpenRGB

# Tips

- After installing Synapse, you can disable all Razer services and only leave "**Razer Chroma SDK Service**" running to reduce background usage.
- Using Chroma SDK Service and a Chroma integrated game make Razer devices flicker.
In this case using OpenRGB and "**Disabling Device Control**" in "**Devices & Wrappers**" menu of Aurora is recommended


# Needed configuration

## Through Razer Software

1. Install Synapse from Razer or Chroma SDK from Aurora
2. Make sure **Razer (RGB.NET)** is enabled in Aurora's **Device Manager**
3. Make sure you didn't enable "Disable Device Control" in "**Devices & Wrappers**" settings. 
If you did, click "..." button in **Chroma Wrapper** section and reenable device control.
4. Make sure "Razer Chroma SDK Service" in running

## Through OpenRGB

1. Check [OpenRGB page]({{% ref "devices/openrgb" %}}) for regular instructions.
2. If you are still using Synapse:
   1. Click/check "Disable Device Control" in "Devices & Wrappers" Chroma section
3. If you are not using Synapse, you can either uninstall it or make sure all Razer services are disabled

# Supported Devices

All devices except really recent devices should work. For really recent devices, small update to the SDK library is needed.
