---
title: Plugin Start
order: 1
authors:
  - wolfcomp
---

# Setup
To start making a plugin and you first have to get [Visual Studio](https://visualstudio.microsoft.com/).
<br />
_If you already have visual studio you can skip this step_
<br />
Download and install the Visual Studio Community edition as this is required for Auroras runtime
<br />
Once the installer is open you will require to install the workload of `.NET desktop development`.
Then go over to the `Individual Components` tab and also install `.NET Framework 4.8 SDK` and `.NET Framework 4.8 targeting pack`

# Project
Once Visual Studio is opened you will have to create a new project and make sure it is a `Class Library (.NET Framework)` template once you have selected that template this screen will pop up ![Configure screen](https://screenshots.wildwolf.dev/e9a64ba8e1.png)
Make the Project name what you want the DLL to be called and that the Framework version is 4.8

Once the project opens rename the supplied `Class1.cs` file to `PluginMain.cs`
<br />
Then add a `Reference` for 
- NuGet Package
- - Newtonsoft.Json
- Reference
- - Aurora `this being the Aurora.exe file`
- - PresentationCore `this is a windows dll and will be located under assemblies in the add reference screen`
- - PresentationFramework `this is a windows dll and will be located under assemblies in the add reference screen`
- - WindowsBase `this is a windows dll and will be located under assemblies in the add reference screen`

Once both of them are added go to the Properties tab of them and check that `Copy Local` is set to False

Now open the `PluginMain.cs` file and use this as the base for the file
```cs
using System;
using Aurora.Profiles;
using Aurora.Settings;

namespace EliteDangerousAuroraPlugin
{
    public class PluginMain : IPlugin
    {
        public void ProcessManager(object manager)
        {
            if (manager is LightingStateManager stateManager)
            {
                //this is where more code will be added to load the application
            }
        }

        public string ID => ""; // a unique id for the plugin
        public string Title => ""; // the title of the plugin
        public string Author => ""; // your name in here
        public Version Version => new Version(1, 0, 0);
        public IPluginHost PluginHost { get; set; }
    }
}
```

# Issues
As Auroras codebase changes the code above will be changing over time and at times be slow at updating to see up to date code on how to do plugins you can checkout some of my [plugins](https://github.com/wolfcomp) that i have made as these will be always running on the latest dev builds but be careful if you are building against a release and some methods does not exist because of it.