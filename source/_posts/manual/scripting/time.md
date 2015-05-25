title: Time and Framerate
categories: manual
permalinks: manual/scripting/time
---

Assuming a character needs to travel in a constant speed. You might figure out that every frame should use a fixed value for the moving distance (`distancePerFrame`).

```js
Fire.Class({
    extends: Fire.Component,
    properties: {
        distancePerFrame: 1
    },
    update: function () {
        this.transform.x += this.distancePerFrame;
    }
});
```

It is reasonable. However, due to different system and platform, the framerate varies, resulting unstable moving speed of the character. Say, when every frame spends 20ms, the character moves `distancePerFrame` for 50 times per second; when every frame takes 40ms, it moves for 25 times, which is much slower. The correct way of doing this is to scale the distance by each frame's actual duration.

```js
Fire.Class({
    extends: Fire.Component,
    properties: {
        distancePerSecond: 50
    },
    update: function () {
        this.transform.x += this.distancePerSecond * Fire.Time.deltaTime;
    }
});
```

We set the expected distance for 1 second as `distancePerSecond`, while acquire the time spent (in second) from last frame to the present time point by `Fire.Time.deltaTime`. Multiplying the two values gets the distance per frame, and moving character using this value gives a stable speed. In fact, the result of accumulating all moved distance with 1 second equals to `distancePerSecond` exactly.

You should consider calculating any transition effect in game, including moving, by multiplying `Fire.Time.dealtaTime`.

## Other Useful Interfaces of `Time`
- Get passed seconds from the beginning of the game to now: `Time.time`
- Get the total frame count from the beginning of the game to now: `Time.frameCount`
