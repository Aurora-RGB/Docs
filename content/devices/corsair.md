---
title: Corsair
authors:
  - diogotr7
---

# Required Software

* Corsair iCUE

# Needed configuration

The SDK should come enabled by default when you install iCUE, but in case it doesn't connect, make sure it is enabled.

![Turning on the SDK in Corsair iCUE](/img/docs/icue-enable-sdk.png)

# Known Issues

Disabling the desktop profile should cause devices to fallback to their default configuration, however this is bugged for corsair devices specifically, causing them to turn black instead. This bug needs a rework of the aurora implementation to be fixed.

# Supported Devices

Most devices supported by the CUE sdk should work. These devices are listed on Corsair's wiki page [here](https://corsairofficial.github.io/cue-sdk/#supported-devices). Notable exceptions are zone based keyboards like the k55.
