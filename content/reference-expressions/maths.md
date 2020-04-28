---
title: Maths
order: 5
authors:
  - Wibble199
---

This page lists all the standard evaluatables that are under the 'Maths' category.

## Absolute {{% typetag "number" %}}

Takes a number and outputs the absolute (positive) value. E.G. `5` outputs `5` (no change), but `-10` would output `10`.

## Arithmetic Comparison {{% typetag "boolean" %}}

Compares two numbers together and outputs a boolean indicating the result of the comparison. Can choose a comparison from: equal, not equal, less than, less than or equal, greater than, greater than or equal.

## Arithmetic Operation {{% typetag "number" %}}

Performs a binary operation on two numbers, such as: adding them together, subtracting one from the other, multiplying them together, dividing one by the other or finding the modulus (remainder of one when divided by the other).

## Lerp {{% typetag "number" %}}

Maps a value from one range onto it's interpolated value in another range.

For example, mapping the value `0.7` from a range of `0` to `1` onto the range of `50` to `100` would output `85`. This is because `0.7` is _70%_ of the way between `0` and `1`, and the number that is _70%_ of the way between `50` and `100` is `85`.

## Number Change Detector {{% typetag "boolean" %}}

Outputs a `true` value on a frame whenever the value of the input number changes. If you require the boolean to be `true` for longer than a single frame, use this in conjunction with the [true extender]({{% relref "logic#true-extender" %}}).

Can also be set up to only output `true` when the value increases or decreases (instead of any change) and can also provide a minimum threshold that the change must be. For example, if you tick "Trigger on increase", untick "Trigger on decrease" and set the threshold to `5`, the only time a `true` will be output is when the current value of the number is 5 or higher more than the value it was last frame.

## Number Constant {{% typetag "number" %}}

Constantly outputs the specified number.

## Wave Function {{% typetag "number" %}}

Creates a wave output based on the given input.

{{% alert "Note that **all** waves are normalized to accept a value in the range `0 - 1` and also output a value in the range `0 - 1`." "info" %}}

#### Sine
![](/img/docs/evaluatable-number-waves-sine.png)

#### Triangle
![](/img/docs/evaluatable-number-waves-triangle.png)