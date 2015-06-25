title: Create and Destroy
permalinks: 0.4/manual/scripting/create-destroy-entities
---

It is inevitable to create and destroy Entities by script in dynamic scene building.

## Creating An Empty Entity

To add an empty Entity in the scene only needs to call `new Entity()`:

```js
    start: function () {
        for (var i = 0; i < 10; i++) {
            var name = 'Bullet ' + i;
            var newBulletEntity = new Entity(name);
        }
    }
```

## <a name="instantiate"></a>Copying An Entity

`Fire.instantiate` is for creating a copy of a specified Entity. All child objects and Components are duplicated as well:

```js
var Comp = Fire.Class({
    extends: Fire.Component,

    properties {
        bulletPrefab: {
            default: null,
            type: Fire.Entity
        },
    },

    // use this for initialization
    start: function () {
        for (var i = 0; i < 10; i++) {
            var newBulletEntity = Fire.instantiate(this.bulletPrefab);
        }
    },

    // called every frame
    update: function () {
        // ...
    };
});
```

## Destroying An Entity

To destroy an Entity requires the `destroy` method:

```js
    lateUpdate: function () {
        if (this.hp <= 0) {
            this.entity.destroy();
        }
    }
```

The code above destroys the whole Entity to that the Component belongs. Actually, the Entity will not be destroyed until the frame ends, which means it's still available until then. Once an Entity is destroyed, all child objects and attached Components are destroyed as well.

## Adding A Component

Beside of the Inspector Panel, scripts are able to add Components as well:

```js
    start: function () {
        for (var i = 0; i < 10; i++) {
            var name = 'Bullet ' + i;
            var newBulletEntity = new Entity(name);

            var bullet = newBulletEntity.addComponent("MyBullet");
        }
    }
```

The code above creates an Entity, and adds a Component called "MyBullet" afterwards (MyBullet.js is required in the project). Or, you can pass the type of Component into `addComponent` as parameter:

```js
    start: function () {
        // ...
        var bullet = newBulletEntity.addComponent(Fire.SpriteRenderer);
    }
```

## Removing A Component

To remove a Component by script is to call its `destroy()`, which gets exactly the same result as clicking remove button in the Inspector Panel.

```js
    start: function () {
        var bullet = this.getComponent("MyBullet");
        bullet.destroy();
    }
```
