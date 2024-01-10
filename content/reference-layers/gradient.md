---
title: Gradient Layer
authors:
  - Wibble199
---

The Gradient Layer shows a gradient effect on the specified keys. The gradient can also be animated to move across the keyboard to give a wave effect. If it helps to understand how it works, you can imagine the gradient to be displayed on a (possibly moving) rectangle, and each key acts as a “window” onto that rectangle.

![A rainbow Gradient Layer on the alphabetical keys](img/docs/layer-gradient.gif)

## Properties

<!-- Have to manually add the table since it needs a list in it, which is impossible in markdown. -->
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gradient</td>
      <td>The solid color to set all the affected keys to.</td>
    </tr>
    <tr>
      <td>Effect Speed</td>
      <td>The speed at which the animation (as given by <em>Animation Type</em>) moves.</td>
    </tr>
    <tr>
      <td>Effect Angle</td>
      <td>The angle of the gradient.</td>
    </tr>
    <tr>
      <td>Animation Type</td>
      <td><ul>
        <li><strong>None</strong> - No animation, static gradient.</li>
        <li><strong>Translate X and Y</strong> - Moves the gradient X and Y (depending on angle).</li>
        <li><strong>(Radial only) Zoom In</strong></li>
        <li><strong>(Radial only) Zoom Out</strong></li>
      </ul></td>
    </tr>
    <tr>
      <td>Reverse Direction</td>
      <td>Whether or not to reverse the direction the gradient animation plays.</td>
    </tr>
    <tr>
      <td>Affected Keys</td>
      <td>A collection of keys that will be set to the above solid color.</td>
    </tr>
  </tbody>
</table>
