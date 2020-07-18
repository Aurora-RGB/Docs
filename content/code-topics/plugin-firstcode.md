---
title: Plugin First Code
order: 2
authors:
  - wolfcomp
---

From this point onward it will be base code from the Elite Dangerous plugin developed by [WildWolf](https://github.com/wolfcomp/)

# Control
Add a item called `Control.xaml` as this will be the overview control layout the main layout of this file should have 
```xml
<UserControl
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:EliteDangerousAuroraPlugin"
             xmlns:EnumDeviceKeys="clr-namespace:Aurora.Devices"
             xmlns:EnumPercentEffectType="clr-namespace:Aurora.Settings"
             xmlns:EnumValueConverters="clr-namespace:Aurora.Utils"
             xmlns:xctk="http://schemas.xceed.com/wpf/xaml/toolkit"
             xmlns:Controls="clr-namespace:Aurora.Controls" x:Class="EliteDangerousAuroraPlugin.Control"
             mc:Ignorable="d" 
             d:DesignHeight="300" Height="Auto" Width="Auto" d:DesignWidth="850" >
    <Grid>
        <TabControl>
            <TabItem Header="Overview for Elite Dangerous">
                <Grid>
                    <StackPanel>
                        <CheckBox x:Name="game_enabled" Content="Enable Aurora to provide lighting effects with Elite Dangerous" HorizontalAlignment="Left" Margin="10,10,0,0" VerticalAlignment="Top" Checked="game_enabled_Checked" Unchecked="game_enabled_Checked"/>
                    </StackPanel>
                </Grid>
            </TabItem>
        </TabControl>
    </Grid>
</UserControl>
```

Under this file there should be a file called `Control.xaml.cs` in this the base code should be
```cs
using System;
using System.Windows;
using System.Windows.Controls;
using Aurora;
using Application = Aurora.Profiles.Application;

namespace EliteDangerousAuroraPlugin
{
    /// <summary>
    /// Interaction logic for Control.xaml
    /// </summary>
    public partial class Control : UserControl
    {
        private Application profile_manager;

        public Control(Application profile)
        {
            InitializeComponent();

            profile_manager = profile;

            SetSettings();
        }

        private void SetSettings()
        {
            this.game_enabled.IsChecked = profile_manager.Settings.IsEnabled;
        }

        private void game_enabled_Checked(object sender, RoutedEventArgs e)
        {
            if (IsLoaded)
            {
                profile_manager.Settings.IsEnabled = (this.game_enabled.IsChecked.HasValue) ? this.game_enabled.IsChecked.Value : false;
                profile_manager.SaveProfiles();
            }
        }
    }
}
```

In these two files is where you will want to have all of your main settings for your application **This is not where you want to have layer settings**

# Profile
This is the file that will contain all the reset logic for your profile name this file `GameProfile.cs` by default this should look this way 
```cs
using Aurora.Settings;

namespace EliteDangerousAuroraPlugin
{
    public class GameProfile : ApplicationProfile
    {
        public GameProfile() : base() {}

        public override void Reset()
        {
            base.Reset();
            //this is where your default layout will be if people click the reset button in Aurora
        }
    }
}
```

# Application
This is where all the configuration happens for your plugin to run the Profile for your Application that you want to integrate into Aurora name this file `GameApplication.cs`
```cs
using System.Reflection;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using Aurora.Profiles;
using Aurora.Settings;

namespace EliteDangerousAuroraPlugin
{
    public class GameApplication : Application
    {
        public GameApplication() : base(new LightEventConfig
        {
            Name = "", // the app name
            ID = "", // the id to save the profile with in Aurora
            AppID = "", // the app id in steam
            Event = new GameEvent_Generic(),
            ProfileType = typeof(GameProfile),
            SettingsType = typeof(FirstTimeApplicationSettings),
            OverviewControlType = typeof(Control),
            ProcessNames = new []{ "" } // the process to tie the application to start this profile
        })
        {
            //this is where we will allow custom layers to be used with this application
        }

        public override ImageSource Icon 
        {
            get
            {
                BitmapImage b = new BitmapImage();
                b.BeginInit();
                b.StreamSource = Assembly.GetExecutingAssembly().GetManifestResourceStream("EliteDangerousAuroraPlugin.icon.png"); // this is an embedded resource in your application notice how it starts with the namespace for the resource
                b.EndInit();
                return b;
            }
        }
    }
}
```

Then you want to go back into your PluginMain and add 
```cs
stateManager.RegisterEvent(new GameApplication());
```

# Icon
To make the plugin icon you will want to include a png of 32x32 minimum and 128x128 maximum as this will have good quality and not to large of a file size
To include your icon you need to set the build properties for the icon.png in the project folder to an EmbeddedResource
This file should be located on the same folder as `PluginMain.cs` in your project for it to be recognized properly