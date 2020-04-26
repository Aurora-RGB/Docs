---
title: Script Layer
authors:
  - Wibble199
---

The script layer on its own will do nothing, however it is one of the most powerful, advanced layers. It provides an interface for users to create custom effects using the Aurora API in either C# or Python. More details can be found on the project [Wiki](https://github.com/antonpup/Aurora/wiki/Profile-Scripting) and example scripts can be found in the [Script Examples](https://github.com/antonpup/Aurora/tree/master/Script%20Examples) folder on GitHub. The limits of what this layer can do really are up to you.

Scripts can be placed in the relevant directory for the profile you wish to use them on:
- For default profiles: `%appdata%\Aurora\Profiles\<game>\Scripts`
- For custom applications: `%appdata%\Aurora\AdditionalProfiles\<application>\Scripts`

## Properties

Name|Description
-|-
Script|Select the script you wish to use from here. If the script does not appear in the drop down list, it is either in the wrong directory or has an error in the code.