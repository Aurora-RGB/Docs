---
title: Asus
authors:
  - diogotr7
  - Popat0
---

# Required Software

* Asus Aura Sync 1.01.71 - [Download](https://dlcdnets.asus.com/pub/ASUS/mb/Utility/Lighting_Control_1.07.71.zip)

{{% alert "The most recent version of Asus Aura Sync, 1.07.79, will NOT work for most users. If you have this version installed, Aurora might either fail to initialize Asus, or even fail to start altogether. Keep reading for instructions on how to downgrade" "danger" %}}

{{% alert "There is a small chance Aura v1.07.79 works correctly on your system. To force the initialization attempt, you can go to the Device Manager tab in the settings, click the 'View Options' button, and tick the 'Enable unsupported Asus SDK versions' checkbox. Then, click the 'Start' button." "info" %}}

# Downgrade instructions

How to uninstall Aura 1.07.79 and/or armoury crate in order to downgrade to .71 :

1. Download Revo Uninstaller of similar (there's a free trial available)
2. Use revo to uninstall Aura and all leftover files + registry entries
3. Select "Show System Components" in revo options
![Show system components](/img/docs/revo-system-components.png)
4. Select all the ASUS Aura components
![Select Aura components](/img/docs/revo-select-asus.png)
5. Click quick uninstall, accept all the warning messages
6. Open the Registry Editor (regedit) and delete the following keys:
    * Computer\HKEY_LOCAL_MACHINE\SOFTWARE\ASUS
    * Computer\HKEY_CURRENT_USER\Software\ASUS
7. Reboot
8. Install 1.07.71. [Download Link](https://dlcdnets.asus.com/pub/ASUS/mb/Utility/Lighting_Control_1.07.71.zip)
9. Reboot when the setup asks.

# Known issues


# Supported Devices
