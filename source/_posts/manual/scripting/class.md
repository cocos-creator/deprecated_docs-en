title: Define Class
categories: manual
permalinks: manual/scripting/class
---

```
All **Note** parts are advanced skills, which can be skipped if you are a beginner.
```

`Fire.Class` declares classes in Fireball. We call classes declared by `Fire.Class` as **FireClass**, in distinction from the rest classes in JavaScript. Comparing with other class systems in JavaScript, FireClass is highly extendable with massive metadata.

## Overview

### Creating FireClass

A class is created by calling `Fire.Class` method, passing in a prototype object, and setting the type parameter by a key-value pair.

```js
    var Sprite = Fire.Class({
        name: 'Sprite'
    });
```

The code above assigns the created class to `Sprite` variable, while using `name` parameter for setting class name. Class names are for serialization, and can be ignored usually.
The `{name: 'Sprite'}' object, in our example, will be referred as a **Prototype Object** in this chapter for simplification. This chapter is mainly about how to define prototype objects.

### Creating Object

An object is created by `new` since FireClass is a JavaScript constructor in essence.

```js
    var obj = new Sprite();
```

### Constructor

Specified constructor is called during the creation of each instance if `constructor` is defined in the prototype object. **Construction parameters** are **NOT** allowed in FireClass constructors.

```js
    var Sprite = Fire.Class({
        constructor: function () {
            console.log(this instanceof Sprite);    // true
        }
    });
    var obj = new Sprite();
```

### Testing Type

`instanceof` tests an object's type:

```js
    console.log(obj instanceof Sprite);     // true
```

**Note**

- Class names can be ignored if serialization is unnecessary. Class names can be any string and must be distinct. Use `Fire.getClassName` to get class name, and `Fire.getClassByName` to look for a particular class.
- For professional developers who need to use construction parameters, they can be retrieved from `arguments` in `constructor`. In this case, serialization requires the class is able to `new` an instance with default parameter values.

## Members

### Instance Variables

Instance variables should be declared in the constructor.

```js
    var Sprite = Fire.Class({
        constructor: function () {
            // Declare instance variables and assign default values
            this.url = "";
            this.id = 0;
        }
    });
    var obj = new Sprite();
    // Assignment
    obj.url = 'img/fb.png';
    obj.id = 1;
```

### Instance Methods

Instance methods are defined in the prototype object.

```js
    var Sprite = Fire.Class({
        constructor: function () {
            // ...
        },
        // Defining an instance method named "load"
        load: function () {
            // load this.url
        };
    });
    var obj = new Sprite();
    // Call the instance method
    obj.load();
```

### Static Variables and Static Methods

Static class variables and methods can be added directly to a defined Class:

```js
    var Sprite = Fire.Class({ ... });

    // Declaring a static variable
    Sprite.count = 0;
    // Defining a static method
    Sprite.getBounds = function (spriteList) {
        // ...
    };
```

Or, to be defined in the `statics` of a prototype object:

```js
    var Sprite = Fire.Class({
        statics: {
            // Declaring a static variable
            count: 0,
            // Defining a static method
            getBounds: function (spriteList) {
                // ...
            }
        }
    });
```

**The complete example code is as below: **

```js
    var Sprite = Fire.Class({
        name: 'Sprite',
        constructor: function () {
            // Declare instance variables and assign default values
            this.url = "";
            this.id = 0;
        },
        // Defining an instance method named "load"
        load: function () {
            // load this.url
        };
    });
    // Instantiation
    var obj = new Sprite();
    // Accessing instance variable
    obj.url = 'sprite.png';
    // Calling instance method
    obj.load();

    // Declaring a static variable
    Sprite.count = 0;
    // Defining a static method
    Sprite.getBounds = function (spriteList) {
        // ...
    };

    // Calling static method
    Sprite.getBounds([obj]);
```

**Note**

- It is suggested to use "_" as naming prefix for **private** members.

    ```js
    var Sprite = Fire.Class({
        name: 'Sprite',
        constructor: function () {
            // Private instance variable
            this._myData = 0;
        },
        // Private instance method
        _load: function () {
            // ...
        };
    });
    // Private class variable
    Sprite._list = [];
    ```

- **Private** static members can be implemeted by closure.

    ```js
    // Private static method
    var doLoad = function (sprite) {
        // do load ...
    };
    // Private static variable
    var url = 'foo.png';

    var Sprite = Fire.Class({
        load: function () {
            // Calling local scoped method
            doLoad(this, url);
        };
    });
    ```

- "Instance members" include both member variables and member methods.
- "Static members" include both static variables and static methods.
- The implement of static variable inheritance is to assign shallow copies of base class static variables to inherit class.

## Inheritance

### How To Declare

To inherit, define prototype object's `extends` as the base class:

```js
    // define base class
    var Node = Fire.Class();

    // define sub class
    var Sprite = Fire.Class({
        extends: Node
    });

    // test
    var obj = new Sprite();
```

`instanceof` can also test if an object inherits from a specified base class:

```js
    var sub = new Sprite();
    console.log(sub instanceof Node);       // true
    var base = new Node();
    console.log(base instanceof Sprite);    // false
```

### Constructor of Base Class

Please note that no matter a constructor is provided in a inherited class, the constructor of its base class is always called before inherited class's instantiation.

```js
    var Node = Fire.Class({
        constructor: function () {
            this.name = "node";
        }
    });
    var Sprite = Fire.Class({
        extends: Node,
        constructor: function () {
            // Consturctor of base class is called already, so this.name has been initialized.
            console.log(this.name);    // "node"
            // Reassigning this.name
            this.name = "sprite";
        }
    });
    var obj = new Sprite();
    console.log(obj.name);    // "sprite"
```

### Overriding

All instance methods are virtual methods, and can be overrided in its inherited classes:

```js
    var Node = Fire.Class({
        getName: function () {
            return "node";
        }
    });
    var Sprite = Fire.Class({
        getName: function () {
            return "sprite";
        }
    });
    var obj = new Sprite();
    console.log(obj.getName());    // "sprite"
```

To call the base class's method, it has to be called through the prototype of base class, by `call` or `apply`:

```js
    var Node = Fire.Class({
        getName: function () {
            return "node";
        }
    });
    var Sprite = Fire.Class({
        getName: function () {
            var baseName = Node.prototype.getName.call(this);
            return baseName + ">sprite";
        }
    });
    var obj = new Sprite();
    console.log(obj.getName());    // "node>sprite"
```

You can use `Fire.isChildClassOf` to test the inheritance between two classes:

```js
    var Texture = Fire.Class();
    var Texture2D = Fire.Class({
        extends: Texture
    });
    console.log(Fire.isChildClassOf(Texture2D, Texture));   // true
```

Please note that both parameters have to be class constructors (i.e. prototype objects). `isChildClassOf` returns `true` if two class are equal.

**Note**

- You can use the static variable `$super` to access base class.
- All instance members and static members are inherited by the inherited class.
- In case there are members that shouldn't be inherited, declare them with [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty):

    ```js
        Object.defineProperty(Sprite, 'getBounds', {
            value: function (spriteList) {
                // do get bounds ...
            },
            enumerable: false
        });
    ```
- If the original JavaScript inheritance is required, i.e. both the base class and inherited class are not FireClass, implement it by `Fire.JS.extend` method.

## Properties

### Defining and Accessing Property

Properties are special instance members, which can be shown in the Inspector Panel and serialized. Properties are not defined in constructor, but in the `properties` dictionary of prototype object.

**Here we define a playerName property in Player class: **

```js
    var Player = Fire.Class({
        extends: Fire.Component,

        properties {
            playerName: {
                default: 'Jare'
            }
        }
    });
```

The example above was also used in the [Component Overview](/manual/scripting/component#show-in-inspector) chapter. Defining like this makes `playerName` shown in the Inspector Panel for storing user's value.

The `default` attribute is for declaring the default value of a property. In our example, it tells the compiler that the value is a string as well. `default` can take parameters of any type, however it's only used when the object is created for the first time. A deserialized object uses the stored value when serialized, so might not be the default value.

**Properties are instance members in essence, so can be accessed like:**

```js
    var Sprite = Fire.Class({
        constructor: function () {
            console.log(this.width);    // Read the default width
        },

        properties: {
            width: {
                default: 128
            },
        },

        getWidth: function () {
            return this.width;
        }
    });
```

Properties are defined before the constructor is called, so they are able to be accessed or reassigned in the constructor.

### Property Attributes

Multiple attributes can be assgined to a property, to determine how the property is displayed in the Inspector Panel, or the way it's serialized.

```js
    properties {
        score: {
            default: 0,
            type: Fire.Integer,
            tooltip: 'The score of player'
        }
    }
```

The code above constrains user can only input integer value for `score` in the Inspector Panel, with a tip shown when mouse hovering on the input control.

Here are some useful parameters. For more details please refer to [Property Attributes](/manual/scripting/attributes) in Scripting API documentation.

- type: Constrains the value type.
- visible: Hide the property in the Inspector Panel if set to `false`.
- serializable: Don't serialize the property if set to `false`.
- displayName: Show the value text as the label for the property in the Inspector Panel.
- tooltip: Add a tooltip to the property in the Inspector Panel.
- multiline: Use multi-line text input control in the Inspector Panel.

#### <a name="visible参数"></a>`visible` Attribute

Whether a property is shwon in the Inspector Panel depends on, by default, if the property name starts with a "_"(underscore). If so, the property will not be seen in the Inspector Panel, vice versa.

To make such a property visible in the Inspector Panel, set the `visible` attribute to `true`:

```js
    properties {
        _id: {
            default: 0,
            visible: true
        }
    }
```

Or to hide it, set `visible` to `false`:

```js
    properties {
        id: {
            default: 0,
            visible: false
        }
    }
```

#### <a name="serializable"></a>`serializable` Attribute

By default properties will be serialized. Set `serializable: false` for prevention.

```js
    temp_url: {
        default: '',
        serializable: false
    }
```

#### <a name="type"></a>`type` Attribute

It would be necessary to declare the type of value explicitly, by setting `type` attribute, when `default` value is not self-explained enough to tell the type:

- When `default` is `null`,  set `type` to a class type (constructor) to make the property assignable in the Inspector Panel.

    ```js
        enemy: {
            default: null,
            type: Fire.Entity
        }
    ```
- When `default` is a Number type, set `type` to `Fire.Integer` to declare the value as an integer, which makes it's not possible to input decimal in the Inspector Panel.
    ```js
        score: {
            default: 0,
            type: Fire.Integer
        }
    ```
- Setting `type` as an enumerative type makes the Inspector Panel show an enumerator combobox.
    ```js
        wrap: {
            default: Fire.Texture.WrapMode.Clamp,
            type: Fire.Texture.WrapMode
        }
    ```
- If `default` is an **array**`[]`, the `type` attribute can be assgined with one of these values: constructor, `Fire.Integer`, enumerator, `Fire.Float`, `Fire.Boolean`, or `Fire.String`. This creates the value type constraint for each elements in the array.
    ```js
        nameList: {
            default: [],
            type: Fire.String      // Every element in the array is of String type
        },
        enemyList: {
            default: [],
            type: Fire.Entity   // Every element in the array is of Entity type
        }
    ```

### Shortcut of Property Definition

Property definition can be like this, if it holds no attributes:

```js
    // Complete form
    properties: {                   // Shortcut form
        width: {            =>      properties: {
            default: 128    =>          width: 128
        }                   =>      }
    }
```

But **the default value MUST NOT be an object type**. Properties with an object value can only be defined with the complete form:

```js
    properties: {
        position: {
            default: new Fire.Vec2()
        }
    }
```

**Note**

- Properties can be inherited, but those defined in inherited class must choose a name unused in base class.
- If the property default value cannot be retrieved without calling other methods, think about assigning them in the constructor.

    ```js
    var Sprite = Fire.Class({
        constructor: function () {
            this.img = LoadImage();
        },
        properties: {
            img: null
        }
    });
    ```

## GetSet Methods

Once `get` or `set` is set in a property, the pre-defined methods will be called as soon as the property is accessed.

### get

To define the `get` method of a property:

```js
    properties: {
        width: {
            get: function () {
                return this.__width;
            }
        }
    }
```

`get` can return any type of value.
Property with `get` is displayed as well in the Inspector Panel, and is accessible anywhere, including the constructor.

```js
    var Sprite = Fire.Class({
        constructor: function () {
            this.__width = 128;
            console.log(this.width);    // 128
        },
        properties: {
            width: {
                get: function () {
                    return this.__width;
                }
            }
        }
    });
```

Please note:
- Once `get` is assgined, the property will not be able to serialize, nor to use a default value. The good new is that it can use any attribute besides `default` and `serializable`.

    ```js
        width: {
            get: function () {
                return this.__width;
            },
            type: Fire.Integer,
            tooltip: "The width of sprite"
        }
    ```

- `get` is a read-only property, not the object it returns. User can modify properties inside the returned object by code. For instance:

    ```js
    var Sprite = Fire.Class({
        ...
        position: {
            get: function () {
                return this.__position;
            },
        }
        ...
    });
    var obj = new Sprite();
    obj.position = new Fire.Vec2(10, 20);   // Error! The position property is read-only!
    obj.position.x = 100;                   // Ok! The object position itself can be modified!
    ```

### set

To define the `set` method in a property:

```js
    width: {
        set: function (value) {
            this.__width = value;
        }
    }
```

`set` accepts a parameter, which can be of any type.
`set` can be used with `get` together:

```js
    width: {
        get: function () {
            return this.__width;
        },
        set: function (value) {
            this.__width = value;
        },
        type: Fire.Integer,
        tooltip: "The width of sprite"
    }
```

Please note:
- If `set` is defined without a `get`, the property cannot have any other attributes.
- A property with `set` cannot be serialized nor have default value, as well as having `get` attribute.
