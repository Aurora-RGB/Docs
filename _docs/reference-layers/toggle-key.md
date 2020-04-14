---
title: Toggle Key Layer
order: 20
authors:
  - Wibble199
---

The toggle key layer allows for the turning on or off some lights based on the key press of another specific key. This layer can be useful for things such as indicators for whether something is toggled on/off in a game.

<span class="alert info">If you are using caps lock, num lock or scroll lock as a trigger key it is probably better to use the Lock Layer to ensure the key light state stays synced with the lock state properly.</span>

Note: Currently there is no way of syncing the toggle status across profiles, so you cannot have persistent states between different games or applications.

## Properties

Name|Description
-|-
Default Color|The starting color of the Affected Keys.
Toggle Color|The color of the Affected Keys after one of the Trigger Keys has been pressed.
Trigger Keys|A list of key triggers that can cause the Affected Keys to toggle between the default and toggle color. These do not have to share any of the same keys as the keys that actually change color.
Affected Keys|The keys that do the color change. These keys do not trigger a change.