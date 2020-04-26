---
title: Percent Effect Layer
authors:
  - Wibble199
---

The percent effect layer allows you to have the color of some set keys dependent on a [numeric variable](../../reference-expressions/numeric-expressions) that can be provided by the computer (such as how much RAM or CPU is in use) or by the game if it is supported (e.g. health in CS:GO or speed in Euro Truck Sim).

![A percent layer with current value set to the current time's milliseconds](/img/docs/layer-percent-effect.gif)

## Properties

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Current Value</td>
      <td>The path of a <a href="../advanced-topics/state-variables">State Variable</a> or a number. This value represents the current value of whichever variable you are watching, e.g. health, ammo, etc.</td>
    </tr>
    <tr>
      <td>Maximum Value</td>
      <td>The path of a <a href="../advanced-topics/state-variables">State Variable</a> or a number. This value represents the value that is the maximum value of the percent layer. This will be your max health, or max ammo etc.</td>
    </tr>
    <tr>
      <td>Progress Color</td>
      <td>In the case of progressive effect types: the color that the active keys will take. For example, if current was 50 and max was 100, then the first half of the keys will be lit this color. For "all at once": the color that will be mixed with the background color depending on the current/max ratio.</td>
    </tr>
    <tr>
      <td>Background Color</td>
      <td>For progressive effect types: the color that will appear if the key is not being shown in progress color. For "all at once": the color that will be mixed with the progress color depending on the current/max ratio.</td>
    </tr>
    <tr>
      <td>Effect Type</td>
      <td><ul>
        <li><strong>All at once</strong> - All keys in the <em>affected keys</em> sequence share the same color. This color will be given by a blend of progress and background depending on the current/max ratio. For example: if progress is green, background is blue, current is 30 and max is 100: all the keys will be set to a blend of 30% green, 70% blue.</li>
        <li><strong>Progressive</strong> - The keys will light up in progress color when they are active. For example: if there are 10 keys in the affected key list, progress is green, background is blue, current is 30 and max is 100: the first 3 keys will be green, the others blue. </li>
        <li><strong>Progressive (Gradual)</strong> - Same as progressive, but any keys that are partially active will have their color interpolated.</li>
      </ul></td>
    </tr>
    <tr>
      <td>Blink Threshold</td>
      <td>If the current/max percentage is less than this value, the "active" keys will fade in and out.</td>
    </tr>
    <tr>
      <td>Reverse Blink Threshold</td>
      <td>If this is true, the current/max percentage must be greater than the threshold for the active keys to flash.</td>
    </tr>
    <tr>
      <td>Blink Background</td>
      <td>If this is selected, the background will fade in and out instead of the active keys.</td>
    </tr>
    <tr>
      <td>Affected Keys</td>
      <td>A collection of keys that will display the progress bar or color. Note that for progressive effect types, the order of the keys in the list matters.</td>
    </tr>
  </tbody>
</table>