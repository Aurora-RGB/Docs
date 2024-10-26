---
title: Disabling Windows Services
searchTitle: How to Disable Unnecessary Windows Services
description: Tutorial explaining how to disable or set specific Windows services to "Manual"
order: 2
authors:
  - Aytackydln  
---

Some proprietary software services can be disabled if they are not necessary for your use case,
reducing resource consumption and improving performance

{{% alert "You can also set the services to \"Manual\" so that they don't run unless they are needed" "success" %}}

### Services to Consider Disabling or Setting to "Manual"

- **For Asus users:**
    - `LightingService`
        - Manages RGB lighting for Asus components. Disable if Asus lighting control is not needed.

- **For Razer users:**
    - `Razer Chroma SDK Server`
    - `Razer Chroma SDK Service*`
    - `Razer Chroma StreamServer`
    - `Razer Game Manager Service`
    - `Razer Synapse Service`
      {{% alert-content %}}
      *Only keep "Razer Chroma SDK Service" enabled if you want to use Razer software for controlling Razer devices or
      [Chroma Integration with Aurora]({{% ref "integrations/chroma" %}})
      {{% /alert-content %}}

### Steps to Disable or Set Services to "Manual"

1) Open **Services Manager**:
    - Press `Win + R`, type `services.msc`, and press **Enter**.

2) Find the Service:
    - Scroll through the list to find the desired service (e.g., "LightingService" or "Razer Synapse Service").

3) Adjust Startup Type:
    - Right-click the service and choose **Properties**.
    - Under **Startup type**, select either **Disabled** (to prevent the service from running)
      or **Manual** (to allow it to start only when required).
    - Stop the service if you want to stop it immediately.
    - Click **Apply** and then **OK** to save changes.