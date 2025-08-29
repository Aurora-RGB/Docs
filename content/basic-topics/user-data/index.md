---
searchTitle: Aurora User Data Folder and Backups
title: User Data & Backups
description:
  Learn where Aurora stores your user data, how to back it up, and how to import/export lighting profiles.
order: 4
authors:
  - Wibble199
  - Aytackydln
---

You can see the Aurora data by navigating to `%APPDATA%\Aurora` in File Explorer.
This user data includes all your settings as well as all your lighting profiles and recent logs that Aurora has created.

'Sensitive.json' contains encrypted data contains location data (possible tokens in the future) and it is encrypted.
It can only be opened by Aurora and on the current Windows user.

## Importing Profiles

Profiles that others have made can be imported easily into Aurora using the import button on the "Profiles" section. Pressing this button will open a dialog asking you to choose a file to import.
JSON files that have been exported from Aurora (see [exporting profiles]({{% ref "#exporting-profiles" %}})) are fully supported through import.

When importing a profile, a new profile will appear in the profile list - you do not need to worry about it overwriting the profile you currently have selected.
If you wish to merge the imported profile with an existing one you have,
you can select the layers from one profile and copy and paste them using the relevant buttons or by pressing the Ctrl + C and Ctrl + V keys on the keyboard.

## Exporting Profiles

If you have created a profile that you wish to share with other people, you can easily export it by clicking the export button on the "Profiles" section.
Clicking this button will open a window where you will be asked to save the profile as a JSON file.
This JSON file can then be sent to other people who can import it into Aurora using the method described above.

## Automatic Backups

Aurora creates new backup with each update at `%APPDATA%/AuroraBackups`.
You can restore them by:

1. Removing `%APPDATA%\Aurora` folder
2. Moving the version file to %appdata% and renaming it to Aurora

## Taking a Backup

There may be times when it would be wise to take a backup of your entire Aurora data folder (for example when you are installing a test build of Aurora).
Doing this is a very simple matter of duplicating a folder.

1. First, open up Windows file explorer.
2. In the address bar, type `%APPDATA%` and press enter. This will take you to the folder where various installed programs can store data for your user account.
3. There will be a folder called "Aurora" in here. Simply copy that folder to a different location (for example your Documents).

![Finding the Aurora user data directory](aurora-user-data-directory.png)
4. Should you need to restore data that's been backed up in the future, you can simply replace the same Aurora direction with the backup folder.

## Clearing User Data

Clearing your user data may be required if you start using test versions of Aurora or need to downgrade your Aurora installation for whatever reason.
To do this, you can simply delete (or rename/move if you intend to reuse to this data some time) the Aurora folder.

1. First, ensure that you have closed Aurora. Aurora will write back some data from memory when it closes.
2. Next, open up Windows file explorer and in the address bar, type `%APPDATA%` and press enter. This will take you to the roaming application data folder.
3. There will be a folder called "Aurora" in here. Simply delete, move or rename that folder.
4. When you next re-open Aurora, it will recreate all the necessary data with the default configuration: default settings, default profiles, etc.
