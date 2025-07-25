---
title: Global Variables
weight: 0
authors:
  - Aytackydln
---

Global variables are generic variables that are not specific to a profile.
They are mainly used for developers to easily integrate Aurora with applications.

## Updating Values

Variables can by updated by **POST**ing a **JSON** object to http://localhost:9088/variables

```json
{
  "variable1": "string value",
  "variable2": 56.26,
  "variable3": true
}
```

Variables will by sorted by their types in Aurora-RGB.

You can see current values on [http://localhost:9088/variables](http://localhost:9088/variables) endpoint.


## Using State Variables
Global variables are used similar to [State Variables]({{% ref "advanced-topics/state-variables" %}}).
Instead of selecting a variable from a drop down list, you need to type the name of the variable in a "Global Variable" function.

![Global variable usage in Aurora-RGB](img/docs/obs-global-var.png)