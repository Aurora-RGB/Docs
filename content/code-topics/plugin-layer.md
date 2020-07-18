---
title: Plugin Layer
order: 3
authors:
  - wolfcomp
---

This is where plugin creation starts getting more advanced as Auroras code for layers is a bit on the tedious side

First you have to make a LayerHandlerProperties that fits your layer or you can use the base LayerHandlerProperties in Aurora if you don't need anything special for layer settings

Next you have to create a UserControl for the layer to handle LayerHandlerProperties changes

I will create a more in depth representation of this at a later date for now you can peek at how to do layers in open source plugins