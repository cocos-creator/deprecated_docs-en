title: 对象访问
categories: manual
permalinks: manual/scripting/component/access
---

## Controlling By Script

Components can be modified in the Inspector Panel. Say, changing the `position` of `Transform` component will changes the attached entity's position, and a different `Color` value of `SpriteRenderer` component determines in which color the entity is rendered. But such controlling can go further by script. The difference between two controlling methods is that script controlling is able to make a transition to the change, by modifying properties continuously during a time span. Scripts also response to players' input, create or destroy Components and Entities, which implements all kinds of gameplay logic.
To make them happen, we'll need to talk about how to access Entities and Components in a script.

## Accessing Attached Entity
Retrieving the Entity that a Component is attached to is a common action. All need to be done is to access the `this.entity` variable:

```js
    start: function () {
        var myName = this.entity.name;
        Fire.log('starting', myName);
    }
```

## Accessing Components

Accessing other Components attached to the same Entity is one of the easiest and most commly used action.

As mentioned in the previous chapter, a Component is merely an instance of the class. So step one, get the object reference. What you need is the Component interface `getComponent`, which returns the Component instance, attached to the Entity, of specified type. Usually this reference to instance is saved in a variable, which can be used for accessing any property in the Component.

```js
    start: function () {
        var sr = this.getComponent(Fire.SpriteRenderer);

        // Change the color of the sprite's renderer
        sr.color = Fire.Color.red;
    }
```

`Fire.SpriteRenderer` is a Fireball built-in Component. Alternatively, string-formed class name is also acceptable as the parameter:

```js
    start: function () {
        var sr = this.getComponent("Fire.SpriteRenderer");

        // ...
    }
```

In fact, you can call the member function `getComponent` of any Entity object:

```js
    start: function () {
        var transform = playerEntity.getComponent(Fire.Transform);

        // Rotate the transform around world position (10, 10)
        transform.rotateAround(Fire.v2(10, 10), 90);
    }
```

`Transform`, the most common Component, is for controlling an Entity's position, rotation and scaling in the scene. Both `Entity.transform` and `Component.transform` can get you the `Transform`. In our example above, code can be simpler:

```js
    start: function () {
        playerEntity.transform.rotateAround(Fire.v2(10, 10), 90);
    }
```

`getComponent` returns `null` if the specified Component doesn't to an Entity. Accessing `null` will throw the `TypeError` exception in run-time.

## Accessing Other Objects

Merely accessing Entities' Components is usually not enough - scripts needs to do interops often. For instance, a cannon aiming the player character automatically requires continuing accessing the character's position. That's why Fireball has several ways to access other objects.

### Setting By Inspector

The easiest way is to set objects needed in advance in the Inspector Panel. It only needs an Entity typed property declared in script.

```js
// Cannon.js

var Comp = Fire.Class({
    extends: Fire.Component,
    properties: {
        // 声明一个 player 属性，类型为 Entity
        player: {
            default: null,
            type: Fire.Entity
        }
    }
});
```

The code declares a `player` property in `properties`, having `null` as the default value, and specifies the object type as `Fire.Entity`. Consider it as the statement `public Fire.Entity player = null;` in other languages. This property look like this in the Inspector Panel:

![player-in-inspector-null](/manual/scripting/component/access/player-in-inspector-null.png)

Then you can drag any Entity from the Hierarchy Panel to the Inspector Panel, to set it as the `player` property of the editing Component instance.

![player-in-inspector](/manual/scripting/component/access/player-in-inspector.png)

`player` can be accessed directly as:

```js
var Comp = Fire.Class({
    extends: Fire.Component,
    properties: {
        player: {
            default: null,
            type: Fire.Entity
        }
    },
    start: function () {
        // 显示 player 的名字
        Fire.log(this.player.name);
    }
});
```

Here is an exciting feature: if you declare a property as a Component type, and drag an Entity into the Inspector Panel, the Component of the specified type in that Entity, instead of the Entity itself, will be assigned to the target property.

```js
var Comp = Fire.Class({
    extends: Fire.Component,
    properties: {
        targetTransform: {
            default: null,
            type: Fire.Transform
        }
    },
});
```

It is the most convenient way to connect objects by properties. You can even set the property's default value to `[]`, an empty array, instead of `null`. Array makes it possible to assign multiple objects in the Inspector Panel.

However drag & drop would be not good enough if accessing objects needs to be done in run-time. That's why you'll need the find object function described below.

### Finding Child Objects

Sometimes, multiple game objects of a same category, such as turrets, enemies and FXs, exist in the scene, and are managed altogether by a global script. Dragging and dropping every one of them into the Inspector Panel would be dull and stupid. A better practice is to gather them as child objects of a single parent, and accessing them via the parent.

```js
// CannonManager.js
var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function () {
        this.cannons = [];
    },

    properties: {
        targetTransform: {
            default: null,
            type: Fire.Transform
        }
    },

    start: function () {
        this.cannons = this.entity.getChildren();
    }
});
```

`getChildren` is an Entity's member function to get an array containing all child Entities.
It is possible to get a particular child by name as well, by calling an Entity's `find` function.

```js
this.entity.find('Main Cannon');
```

### Global Finding By Name

The static function `Fire.Entity.find` allows you to find a particular Entity in the whole scene.

```js
// CannonManager.js
var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function () {
        this.player = null;
    },

    start: function () {
        this.player = Fire.Entity.find('/Main Player');
    }
});
```

Please note:
- `find` can be an instance function or a static one. Instance function version is for finding a child object, while static function looks for the object globally, i.e. from the root of the scene and traverse all children until a value can be returned.
- The find path should not start with `/` when looking for child objects, while it is essential to have `/` when doing global finding.
