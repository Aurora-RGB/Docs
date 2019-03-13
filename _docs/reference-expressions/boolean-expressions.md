---
title: Boolean Expressions
order: 1
authors:
  - Wibble199
---

This page lists and explains the types of boolean expressions (sometimes called 'evaluatables') that you can use to construct your override logic. They are listed in the order they appear in the UI.

# Logic

|Name|Description|
|-|-|
|And|Requires two other boolean expressions and results in `true` only when both the sub-expressions are also `true`. Returns `false` otherwise.|
|Boolean Constant|A constant boolean value. Provides a checkbox allowing you to set whether this should return `true` or `false`.|
|Not|Requires a single other boolean expression. Returns the opposite of the result of the inner expression. If the inner expression is `false`, this returns `true` and vice-versa.|
|Or|Takes two other expressions and returns `true` if either one of them is `true`. If neither of them are `true` (i.e. both are `false`) then this returns `false`.|

# State Variable

|Name|Description|
|-|-|
|Boolean State Variable|Fetches a boolean [state variable](../advanced-topics/state-variables) from the current application's game state and returns it's value.|
|Numeric State Variable|Fetches up to two numeric [state variable](../advanced-topics/state-variables) (or uses a static value if you type a number instead) from the current application's game state, compares the two numbers (either by checking if they are equal, not equal, less than or greater than) and returns whether the comparison is `true` or `false`.|

# Input

|Name|Description|
-|-
|Key Held|Returns `true` if the specified key is currently being pressed down.|
|Lock Key Active|Returns `true` if the specified lock key (caps, num or scroll) is currently locked.|
|Mouse Button Held|Returns `true` if the specified mouse button (left, right, middle, extra 1, extra 2) is being pressed down.|

# Maths

|Name|Description|
-|-
|Arithmetic Comparison|Requires two [numeric evaluatables](./numeric-expressions) and returns the result of a comparison between the two. Comparisons include equals, not equal, less than, greater than, etc.|

# String

|Name|Description|
-|-
|String Comparison|Requires two [string evaluatables](./string-expressions) and returns the result of a comparison between the two. Comparisons include equals, alphabetically before, length comparison, whether string 1 contains string 2, etc.|