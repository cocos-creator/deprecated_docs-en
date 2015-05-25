title: Component Callbacks
categories: manual
permalinks: manual/scripting/component/callbacks
---

Fireball calls certain Component methods periodically. Once Components implements them, these methods are registered as **callbacks** in Fireball. Callbacks are called during game process only in particular time spans, or when particular game events happen. We've discussed `start` (called before the first `update` calling) and `update` (called before every frame's refresh), and there are lots of other callbacks in Fireball. This chapter will introduce some of commonly used ones. For a full list of callbacks, please refer to Component API documentation.

Please Note:
- When a callback happens, Fireball gives game logic control to the Component until the callback method returns. Fireball may be stuck if the callback method is overly time consuming.

## Periodical Callbacks

A key point of game developement is to update object's behaviour, status and transform before rendering every frame. Such update operations are often handled in `update` callback.

```js
    update: function () {
        this.transform.translate(new Fire.Vec2(0, Fire.Time.deltaTime * 40));
    }
```

`update` executes before rendering. What if we need to do something after rendering, or after all Components' `update`? What we are looking for is `lateUpdate` callback.

```js
    lateUpdate: function () {
        this.transform.worldPosition = this.target.transform.worldPosition;
    }
```

## Initialization Callbacks

Some data doesn't require being calculated repeatly in every frame, which can be calculated once for all when a Component executes for the first time, and then save the result. Initializations like this are often dealt with in `onLoad` or `start`. `onLoad` is called when the scene owning the Component is loaded, while `start` before the component's first activation, aka its first `update`. In terms of that, `start` of any Component is called sequantially after all Component's `onLoad`.

```js
var Comp = Fire.Class({
    extends: Fire.Component,

    properties: {
        target: {
            default: null,
            type: Fire.Entity
        }
    },

    start: function () {
        this.target = Fire.Entity.find('/Main Player/Bip/Head');
    },

    update: function () {
        this.transform.worldPosition = this.target.transform.worldPosition;
    }
});
```
