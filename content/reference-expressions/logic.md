---
title: Logic
order: 1
authors:
  - Wibble199
---

This page lists all the standard evaluatables that are under the 'Logic' category.

## And {{% typetag "boolean" %}}

Takes two input booleans and outputs `true` only if both these inputs are also `true`.

## Boolean Constant {{% typetag "boolean" %}}

Outputs a boolean of your choice, either `true` or `false`.

## Flip-Flip {{% typetag "boolean" %}}

A special kind of evaluatable that can store and toggle a boolean value.

It has two boolean inputs, a "_Set_" and "_Reset".

When _Set_ becomes `true`, the flip-flop starts outputting a `true` value. It will keep outputting `true` until _Reset_ becomes true (even if _Set_ becomes false in the mean time).

Set|Reset|Output
-|-|-
`0`|`0`|_no change_
`1`|`0`|`1`
`0`|`1`|`0`
`1`|`1`|`1`

This can be used to make simple toggles. For example, you could have a layer whose enabled property is based on a flip-flop whose _Set_ was bound to the user pressing the 'A' key and _Reset_ bound to the user pressing the 'Space' key. Now, whenever the A key is tapped or held, the layer will activate and remain activate until the space key is pressed or held.

## If - Else If - Else {{% typetag "boolean" %}}{{% typetag "number" %}}{{% typetag "string" %}}

## Not {{% typetag "boolean" %}}

Takes a boolean and outputs the opposite value.

## Or {{% typetag "boolean" %}}

Takes two booleans and outputs `true` if either or both of them are also `true`.

## True Extender {{% typetag "boolean" %}}

Extends the length of a `true` signal from the input boolean by the amount specified in the expression's UI.

Note that the timer starts as soon as the input becomes `false`. So, if the input was `true` for 1 second and the duration was 3 seconds, the length of the output `true` would be effectively 4 seconds.

This is commonly used for extending the length of a single-frame output such as the [numeric change detector]({{% relref "maths#numeric-change-detector" %}}).

For delaying a bool signal (without changing its length), see the [delay expression]({{% relref "misc#delay" %}}).