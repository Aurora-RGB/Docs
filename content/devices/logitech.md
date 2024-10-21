---
searchTitle: "How to Use Aurora with Logitech Devices"
title: Logitech
authors:
  - diogotr7
  - Mikowmer
  - Aytackydln
---

You can use Aurora profiles and brand specific integrations (like Chroma) with Logitech devices using Aurora.

# Required Software

One of:

* Logitech Gaming Software 9.02.65+
* Logitech G Hub
* OpenRGB

# Needed configuration

{{% alert "Logitech software does not work when Lightsync Wrapper in Aurora is enabled" "warning" %}}
The SDK should come enabled by default when you install LGS or GHUB, but in case it doesn't connect, make sure it is enabled.

## For GHUB:

![Turning on the SDK in Logitech G HUB](img/docs/ghub-enable-sdk.png)

## For LGS:

1. Open Logitech Gaming Software and go into Settings
![Opening Settings in Logitech Gaming Software](img/docs/lgs-enable-sdk-1.png)
2. Enable Game Integration Settings
![Enabling Game Integration Settings in Logitech Gaming Software](img/docs/lgs-enable-sdk-2.png)
3. Open the Game Integration Configuration menu
![Opening the Game Integration Menu in Logitech Gaming Software](img/docs/lgs-enable-sdk-3.png)
4. Disable Conflicting Settings and Applets
![Disabling CS2 in Logitech Gaming Software](img/docs/lgs-enable-sdk-4.png)
![Disabling DotA2 in Logitech Gaming Software](img/docs/lgs-enable-sdk-5.png)

# Known issues

* Lightsync wrapper will be automatically disabled if Logitech software autorun is detected.
If you want to use Logitech devices with other brands and have Lightsync integration on all devices, you have to replace Logitech software with [OpenRGB]({{% ref "devices/openrgb" %}})

* G HUB can take a very long time to fully open and start receiving SDK requests. Because of this, on some systems Aurora tries to connect to G HUB before it has the chance to completely start. This causes any following connections to fail until both G HUB and Aurora are restarted. This can be fixed on boot by adding a delay to the task Aurora uses to startup. This can be done in the General Settings:

![Adding a delay to Aurora's startup task](img/docs/aurora-startup-delay.png)

* Sometimes G HUB will only display Aurora's lighting when the window is open on the foreground. To fix this, setting the desktop profile to permanent may be needed.

![Setting the desktop profile as the persistent one in GHUB](img/docs/ghub-persistent.png)

# Supported Devices

## Keyboards

All per-key RGB keyboards are supposed to work. These are confirmed keyboards:
* G910
* G410
* G810
* GPRO
* G815
* G513

## Mice

All mice are supposed to work, these are confirmed mice:
* G900
* G502

## Mousepads

{{% alert "Most other Logitech LIGHTSYNC devices should work fine, even if they don't have a layout available in Aurora. Simply choose a keyboard with the same layout!" "info" %}}
