---
title: Ambilight Layer
authors:
  - Wibble199
---

The ambilight layer takes the average color of the monitor (or specific areas of the monitor) and displays them on the keys.

{{% alert "This can be a very intensive operation and so may not perform well on all machines. You may find that Aurora is lagging or using too much CPU when you use one of these layers." "warning" %}}

![Ambilight Layer in use on a dual-monitor setup with a white background on one and blue on the other](/img/docs/layer-ambilight.png)

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
      <td>Ambilight Effect Type</td>
      <td><ul>
        <li>Default - Takes the image from the target and sets the keys to the color at points on that image (see above for an example).</li>
        <li>Average Color - Takes the entire image and gets the average color of the image and sets all keys to be that color.</li>
      </ul></td>
    </tr>
    <tr>
      <td>Ambilight Capture Type</td>
      <td><ul>
        <li>Everything - Takes entire screen output (including multiple monitors if you have them).</li>
        <li>Main Monitor Only - Takes screen output only from the monitor designated as number 1.</li>
        <li>Foreground Application - Takes output from whichever application currently has focus.</li>
        <li>Specific Process - Takes output only from the process with the specified name.</li>
      </ul></td>
    </tr>
    <tr>
      <td>Specific Process Name</td>
      <td>Used with Capture Type "Specific Process" to restrict the ambilight layer to only use output from a specific application.</td>
    </tr>
  </tbody>
</table>