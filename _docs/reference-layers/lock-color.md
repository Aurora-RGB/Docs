---
title: Lock Color Layer
order: 16
authors:
  - Wibble199
---

The lock layer allows you to have keys light up (or pulse) in a color when one of the “lock” keys is active (caps lock, num lock or scroll lock). You can use this to make a warning for when caps lock is on for example, or perhaps turn off the lights on the numpad when the numpad is off.

<span class="alert info">This layer functionality can be incorporated using the Overrides System. That said, it is simpler to use this layer for the pulse feature than to use the Override System alternative.</span>

![Lock layer flashing alphabetical key when the caps lock is on](../../assets/img/layer-lock.gif)

![Lock layer turning off the numpad lights when the numlock is off](../../assets/img/layer-lock-2.gif)

## Properties

Name|Description
-|-
Lock Key|The type of key to check whether it is locked or not. Valid options are: Capital, Scroll and NumLock.
Off Color|The solid color to use when the lock key is disabled/off.
On Color|The solid color to use when the lock key is enabled/on.
Pulse|If checked, the On Color will fade in and out when the lock key is active (as shown in the first screencap above).