---
title: Wrapper Lights Layer
authors:
  - Wibble199
---

The wrapper layer is a special layer that is able to display lighting received from games that have been patched with the relevant wrapper patch and that have native lighting of some sort.

To patch a game, navigate to "Settings" -> "Devices & Wrappers" -> "Install Wrapper Patch for xxx", where xxx is the name of the **native lighting** provided by that game. Do not patch the game with their own device's brand (unless that is also the provider of the in game lighting). For example, if I am using a Logitech keyboard, and I wish to get the lights from Killing Floor 2, I need to patch using the LightFX wrapper, since Killing Floor uses LightFX library to provide it's lighting.

{{% alert "Note that some more recent and multiplayer titles have been shipping with anti-cheat or signature checking on the lighting DLL file. In these cases, the game will not load our modified wrapper. Unfortunately there's nothing we are able to do about this. Examples of these games include Apex Legends, Fortnite and Division 2." "warning" %}}

{{% alert "Aurora is not able to directly control the affects these games apply, since Aurora is unable to get values from the game (such as health/ammo/etc.). The only data the lighting engine sends is which keys should be which color." "info" %}}

## Key Cloning

The key cloning option of the wrapper layer is useful for if the device you are using has some keys that aren't handled by the wrapper layer, often this is lights such as macro keys or the peripheral logo.

You can add an item to the source keys list, then clicking it, then adding one or more keys to the destination keys list. The layer will then take whatever value the source key is and apply it to the destination key(s). You can have multiple source keys, each with their own destination keys if you desire.