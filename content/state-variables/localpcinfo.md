---
title: LocalPCInfo
order: 5
authors:
  - Aytackydln
---

Information is mostly provided by LibreHardwareMonitor

On AMD Systems, CPU and GPU data is not available by default because of insecure driver used by LibreHardwareMonitor.
Go to Aurora Settings -> Plugin Management to enable it
- **Battery** 
  - **ChargeStatus** 
  - **LifePercent** {{% typetag "number" %}}
  - **PluggedIn** {{% typetag "boolean" %}}
  - **SecondsRemaining** {{% typetag "number" %}}
- **CPU** 
  - **PowerUsage** {{% typetag "number" %}}
  - **Temperature** {{% typetag "number" %}}
  - **Usage** {{% typetag "number" %}}
- **GPU** 
  - **FanRPM** {{% typetag "number" %}}
  - **PowerUsage** {{% typetag "number" %}}
  - **Temperature** {{% typetag "number" %}}
  - **Usage** {{% typetag "number" %}}
- **NET** 
  - **DownloadSpeed** {{% typetag "number" %}}
  - **UploadSpeed** {{% typetag "number" %}}
  - **Usage** {{% typetag "number" %}}
- **NetworkAdapters** 
- **RAM** 
  - **Free** {{% typetag "number" %}}
  - **Total** {{% typetag "number" %}}
  - **Used** {{% typetag "number" %}}
- **Time** 
  - **CurrentDay** {{% typetag "number" %}}
  - **CurrentHour** {{% typetag "number" %}}
  - **CurrentMillisecond** {{% typetag "number" %}}
  - **CurrentMinute** {{% typetag "number" %}}
  - **CurrentMonth** {{% typetag "number" %}}
  - **CurrentSecond** {{% typetag "number" %}}
  - **MillisecondsSinceEpoch** {{% typetag "number" %}}
