---
title: Particle Layer
authors:
  - Wibble199
---

The particle layer spawns a number of particles which can independently move (based on the layer's settings) and have a color. After a specified amount of time, the particles are removed from the canvas.

Some examples of what can be done with this layer are shown below (both are available as presets), but this is by no means all that can be achieved. Experiment with it!

![A particle layer with the fire preset](/img/docs/layer-particle-fire.gif)
![A particle layer with the matrix preset](/img/docs/layer-particle-matrix.gif)

{{% alert "There is no limit on the number of particles that can be spawned at once. If it is setup to spawn far too many at a time, you may see issues with CPU or memory usage or the program may crash. Be sensible with it." "warning" %}}

## Properties

Many of the properties listed here have a "min" and "max" value. For every particle, a random value between the two given values will be chosen when it is spawned.

Name|Description
-|-
Spawn location|The location in which to spawn the particle. Either on an edge, randomly on the entire canvas or randomly within a specified region.
Color (over time)|A gradient that defines the color a particle should be at any given point in it's lifespan. When the particle is newly spawned, it's color will be at the far left of the gradient. At the end of it's life, the particle's color will be the value at the far right of the gradient.
Spawn time|The amount of time in seconds between a single particle (or a group of particles if spawn amount > 1) spawning.
Spawn amount|The number of particles to spawn at a time.
Lifetime|Number of seconds the particle will stay active before being removed.
Initial horizontal velocity|The initial horizontal velocity of the particle in units per second. Can be negative to make the particle move left.
Initial vertical velocity|The initial vertical velocity of the particle in units per second. Can be negative to make the particle move up.
Horizontal acceleration|The acceleration of the particle in the horizontal direction. Applies the given value to the particle's velocity per second. For example, if this was 1.5 and the particle's velocity was 5, after 2 seconds the velocity will be 8. If positive, the particle will accelerate to the right; if negative it will accelerate to the left.
Vertical acceleration|The acceleration of the particle in the vertical direction. Applies the given value to the particle's velocity per second. For example, if this was 1.5 and the particle's velocity was 5, after 2 seconds the velocity will be 8. If positive, the particle will accelerate downwards; if negative it will accelerate upwards.
Horizontal drag|A value between 0-1 which the horizontal velocity of the particle will be multiplied by. This allows for making the particle appear to naturally slow down.
Vertical drag|A value between 0-1 which the vertical velocity of the particle will be multiplied by. This allows for making the particle appear to naturally slow down.
Initial particle size|The initial size of the particle.
Size change|The rate of change in the size of the particle measured in units per second.
Presets|You can choose a preset and press 'Apply' to set all the values of the particle layer from some predefined values.
