---
title: Shortcut Assistant Layer
authors:
  - Wibble199
---

The Shortcut Assistant layer shows possible key presses when a modifier key is pressed. The defined shortcuts will set the keyboard lights when they are partially pressed. For example, if you had a shortcut defined for Ctrl + C and Ctrl + V, whenever you press control, the other layers below are dimmed and the C and V letter light up in whichever color is specified.

![A shortcut layer with common Ctrl and Ctrl + Shift shortcuts on top of a gradient layer](img/docs/layer-shortcut.gif)

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
      <td>Dim Background</td>
      <td>If this is checked, when Aurora detects you a pressing a modifier key (Ctrl, Shift, Alt) then it will display Dimming Color over all keys before rendering the shortcut keys.</td>
    </tr>
    <tr>
      <td>Shortcuts</td>
      <td>A list of all shortcuts that should be displayed by the layer. To create a shortcut, click on the "New Shortcut" button, then "Assign" next to the new row of the table and press the keys on your keyboard. Once done, click the button again (now "Stop"). Multiple keys can be pressed at the same time and will appear in the shortcut.</td>
    </tr>
    <tr>
      <td>Dimming Color</td>
      <td>If Dim Background, this color is used to dim the background. A semi-transparent dark color is recommended.</td>
    </tr>
    <tr>
      <td>Color</td>
      <td>The color that the keys representing the shortcuts will be displayed.</td>
    </tr>
    <tr>
      <td>Presentation Type</td>
      <td>For shortcuts with longer sequences of keys, this option will dictate which keys become active and when. As an example, we shall consider the sequence Ctrl + Shift + A.<ul>
        <li><strong>Show All Keys</strong> - Shows any shortcut that can be pressed that has the currently pressed buttons in its key list. In the example with this mode, when Ctrl is pressed, both Shift and A will light up.</li>
        <li><strong>Progressive Suggestion</strong> - Shows a shortcut only when all it's previous keys in the list are pressed. In the example, when Ctrl is pressed, only Shift will light up. When Ctrl + Shift are pressed, A will also light up.</li>
      </ul></td>
    </tr>
    <tr>
      <td>Trigger When Same Modifier Keys Pressed</td>
      <td>If this is checked, both control keys (left and right) and both shift keys (left and right) will trigger a shortcut bound to one of the keys. E.G. if there is a shortcut bound to LControlKey + A, then the right control key would also trigger this shortcut if this option was selected.</td>
    </tr>
  </tbody>
</table>
