---
title: Installation
order: 1
authors:
  - Wibble199
---

To install Aurora, the easiest way is to download the installer from our [GitHub page](https://github.com/antonpup/Aurora/releases) and simply run it.

After this, you will find Aurora in your start menu. Opening the Aurora program will show you some simple steps you will need to take with detected existing RGB to allow Aurora to take priority when it needs to. It's important you follows these steps otherwise Aurora may not work correctly.

## Dev Version

The Aurora software is constantly evolving thanks to submissions from various contributors. Before these changes hit the main release, they are added to a special "dev" version of Aurora (after being bug-tested).

If you would like to, it is possible to download the dev version to access some new additional features and bug fixes.

<span class="alert warning">The dev version may be more unstable than the main release, and so you may encounter some bugs.</span>

<span class="alert warning">The dev version's settings may also be incompatible with the main release's. It is **highly** recommended that you [back up your profiles](../basic-topics/user-data.html#taking-a-backup) and settings before changing Aurora versions.</span>

The dev version is automatically built whenever a new change happens to the dev branch and you can find the artefacts on the relevant [AppVeyor page](https://ci.appveyor.com/project/antonpup/aurora/branch/dev/artifacts).

## Other Versions

Since there are several contributors contributing to Aurora, there are several different branches of Aurora. A developer will often ask their branch to be tested by users, either through [Discord](https://discord.gg/YAuBmg9) or on a [Pull Request on GitHub](https://github.com/antonpup/Aurora/pulls).

Because of all the seperate versions with different functionality, it is advisiable **NOT** to install these versions using the exe, but instead to download the zip file and extract them to a place **other than your main Aurora installation**. Like with the dev version, it's **highly** recommended to backup profiles and settings.

### Downloading a GitHub Pull Request

A pull request is where a developer has made changes to Aurora and would like to merge these into the main Aurora release. These pull requests will contain a description of exactly what changes have been made and will automatically create a build of that version. This version will likely be based on a recent dev version of Aurora (as opposed to the main version).

Once you have found a Pull Request you wish to download and test, you should be presented with a screen such as this.

![PR GitHub page](/img/docs/gh-pr-1.png)

Scroll down until you find a section with green ticks (a maybe red crosses). There should be an item that says "All checks have passed". Next to this item, click on "Show all checks" button to reveal a small panel below this item. Click on the "Details" link. If you do not have an "All checks have passed" option, the automatic build process has failed and you will not be able to download a pre-built version.

![The panel that will take you to the build artefacts](/img/docs/gh-pr-2.png)

You should be taken to the website "AppVeyor" and should see a large blue block of text. Just above this text, click the "Artifacts" tab, and you will be presented with the built installer and ZIP file for that PR.

![The download link for the artefacts](/img/docs/appveyor-pr-1.png)