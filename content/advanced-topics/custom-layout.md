---
title: Custom Layout
order: 1
authors:
  - Aytackydln
---

Intended way to use Aurora with more than keyboard, mouse, mousepad etc. is _Remapping_ them to CL1-CL5 keys.
This way, they can be integrated with default game effects.

# Creating Custom Layouts

Currently only way to create new layouts is by editing the json files in Aurora's installation folder.

You can save your layouts as **custom_keyboard.json**, **custom_mouse.json**,
**custom_mousepad.json**, **custom_headset.json** or **custom_chroma.json**

This naming is recommended as you will lose your changes if new layout updates are downloaded

## Using AI to Create New Layout

1. Use your preferred AI that supports file attachments. You can use [claude.ai(Suggested)](https://claude.ai/) or ChatGpt4 if you have the plan
2. Go to Aurora's installation folder, then **kb_layouts** folder
3. Pick any layout, and one of the included_features (mentioned in json) file from **Extra Features** and attach it to the AI conversation
4. Attach {{% link "files/extra_dock.json" %}}example file extra_dock.json{{% /link %}}
5. Enter this prompt, edit it as you like:
> Create a layout that adds two 5 LED RAM layout to the left of _corsair_k70_pro.json_.
> New file should be called custom_keyboard.json
> 
> Give me all the files completely.
> 
> Example file that adds 9 vertical LEDs to the left of the keyboard is included, extra_dock.json

## Extra Info

In case you want to add leds to different regions, include this to the prompt:

> Enum of origin_region property:
>>public enum KeyboardRegion
>>{
>>TopLeft = 1,
>>TopRight = 2,
>>BottomLeft = 3,
>>BottomRight = 4
>>}

"tag" value of each led should be different. It is recommended to use ADDITIONALLIGHT enums. They can be found here:
[DeviceKeys.cs](https://github.com/Aurora-RGB/Aurora/blob/master/Project-Aurora/AuroraCommon/Devices/DeviceKeys.cs)
