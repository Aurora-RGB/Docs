---
title: Toolbar Layer
authors:
  - Wibble199
---

The toolbar layer is a layer that shows one key as “active” and all others assigned to it as “inactive”. When a different key is pressed, the pressed key becomes the active one instead. This works similarly to how toolbars/item bars work in video games such as Factorio or Minecraft.

The layer can also be toggled to listen for the scroll wheel to allow scrolling through the toolbar by turning on the <em>Enable Scroll</em> configuration option. The order the keys are scrolled through is given by their order in the <em>Affected Keys</em> option, so if scrolling through is in the incorrect order, check the order of the keys here. 

![The toolbar layer affecting the number keys](/img/docs/layer-toolbar.gif)

## Properties

Name|Description
-|-
Default Color|The color of the inactive keys.
Active Color|The color of the active key.
Enable Scroll|Whether or not to allow the active key to be moved up and down when you scroll the mouse scroll wheel.
Scroll Loop|Whether or not to allow the scrolling to wrap from one end of the toolbar to the other. Only has an effect when *Enable Scroll* is true.
Affected Keys|The keys that make up the toolbar layer. Note that if *Enable Scroll* is checked, the order of the keys matters.