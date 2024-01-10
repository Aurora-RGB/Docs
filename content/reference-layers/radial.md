---
title: Radial Layer
authors:
  - Wibble199
---

A layer that provides a gradient that rotates around a single point and optionally spins.

![A rainbow radial layer](img/docs/layer-radial.gif)

Note that this gradient is generated using discrete pie-shaped segments of colour. This color is determined by the median color at a particular point on the gradient. For example, if there were 4 segments, each would have a 90 degree arc. The first would use the color at 45 degrees (90 / 2) the second at 135 degrees, etc. If you do not get the colors you expect when using small numbers of segments, this is likely the reason.

## Properties

Name|Description
-|-
Gradient|The gradient of the layer.
Rotation speed|The rotation speed of the layer, in degrees per second. Positive will spin clockwise, negative for counter-clockwise.
Segment count|The number of segments (see above) that are used to create the gradient. A lower number will result in distinct blocks of colour whereas a higher number will result in a smoother transition.
Affected keys|The keys or region to apply the gradient to.
