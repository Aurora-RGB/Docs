---
title: Repair WMI
description: Tutorial explaining how to fix WMI for Windows
order: 1
authors:
  - Aytackydln
---

If this page opened automatically for you, you need to take action to repair your Windows.

AuroraRGB, and possibly other software, needs Win32_Process class in WMI to work properly.
Here you can follow the steps to fix it.


1) Open a terminal (as Admin):
   - In the start menu type "cmd" OR
   - Right click "Start" button and choose Terminal

2) Enter following command:
   > net stop winmgmt

3) Open a Windows Explorer and locate the path to `C:\Windows\System32\WBEM\` folder 
and rename the **Repository** folder to something else like RepositoryOLD.

4) Restart the computer

5) Open a terminal (as Admin)

6) Enter following commands:
    > net stop winmgmt \
    winmgmt /resetRepository

7) Restart the computer
