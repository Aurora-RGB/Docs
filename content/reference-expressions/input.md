---
title: Input
order: 3
authors:
  - Wibble199
---

This page lists all the standard evaluatables that are under the 'Input' category.

## Away Time {{% typetag "number" %}}

Outputs the amount of time the user has been inactivate. This is determined based on mouse or keyboard interaction.

## Away Timer {{% typetag "boolean" %}}

Outputs `true` if the user has been inactivate for the the amount of time specified. Whether the user is away is determined based on mouse or keyboard interaction.

## Key Held {{% typetag "boolean" %}}

Outputs `true` if the specified keyboard button is currently pressed.

## Key Press (Retain for duration) {{% typetag "boolean" %}}

Outputs `true` if the specified keyboard button was down within the given period of time. For example, if a key was pressed and the duration was 3 seconds, this would return still true for 3 seconds after the key is released.

## Lock Key Active {{% typetag "boolean" %}}

Outputs whether or not a lock key (caps lock, num lock or scroll lock) is currently in the locked or unlocked state.

## Mouse Button Held {{% typetag "boolean" %}}

Outputs whether or not the specified mouse button is currently being pressed down.