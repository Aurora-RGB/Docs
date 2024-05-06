---
title: Repair WMI
order: 1
authors:
  - Aytackydln
---

AuroraRGB needs Win32_Process class in WMI to work properly.
Here you can follow the steps to fix it for Aurora and possibly other software.


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
