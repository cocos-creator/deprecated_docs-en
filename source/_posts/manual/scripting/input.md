title: Input
categories: manual
permalinks: manual/scripting/input
---

```
User input APIs introduced in this chapter is not the final version. They will be upgraded gradually in a planned future.
```

## Overview

Fireball currently adopts a web-dev-like mechanism based on event registering for user input handling. There are two ways of registering: global register and Entity register. Detectable inputs include keyboard, mouse and touch, where touch input is implemented by mouse simulation, so would be detected as long as mouse input events are registered.

## Global Register

Global registered methods response to global input events in the game. To make such a method work, it has to be registered and unregistered. The following code listens to mouse button down event. Method `jump` is called once the event happens, no matter which part of the screen is pressed.

```js
var Sheep = Fire.Class({
    extends: Fire.Component,
    constructor: function () {
        // Define the event callback method, and save it to the bindedMouseDown variable for unregistering later.
        this.bindedMouseDown = this.onMouseDown.bind(this);
    },
    onMouseDown: function (event) {
        this.jump();
    },
    onLoad: function () {
        // Register the callback
        Fire.Input.on('mousedown', this.bindedMouseDown);
    },
    onDestroy: function () {
        // Unregister the callback in avoid of memory leaking
        Fire.Input.off('mousedown', this.bindedMouseDown);
    }
});
```

Here we use `Fire.Input.on` to register a callback. The first parameter indicates the event type. For more event types please refer to [Input Events](/manual/scripting/input-events). The second one is the callback method, which usually needs to bind `this` object with `bind` method, or the `this` variable within the callback method would be `null`.

When unregistering, the parameter event type and callback method must be exactly identical as the ones during registering.

## Entity Register

Entity register is to listen to the mouse/touch input events that happen on a single entity. An entity requires renderer components (e.g. `SpriteRenderer`) for event listening. The following code listens to all mouse input events happening on the entity to which the component attached. `jump` method is called only when mouse button is pressed **on** the entity.

```js
var Sheep = Fire.Class({
    extends: Fire.Component,
    constructor: function () {
        // Define the event callback method, and save it to the bindedMouseDown variable for unregistering later.
        this.bindedMouseDown = this.onMouseDown.bind(this);
    },
    onMouseDown: function (event) {
        this.jump();
    },
    onLoad: function () {
        // Register callback
        this.entity.on('mousedown', this.bindedMouseDown);
    },
    onDestroy: function () {
        // Unregister callback
        this.entity.off('mousedown', this.bindedMouseDown);
    }
});
```

The only difference between entity register and global register is the event handlers are registered on a particular entity, not on `Fire.Input`.

Like other entity events, input events is dispatched through the entity hierarchy as well in certain route, such as Bubble mechanism.
