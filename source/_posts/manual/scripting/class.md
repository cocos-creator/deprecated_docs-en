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

## 属性

### 属性定义和访问

属性(Property)是特殊的实例变量，能够显示在 Inspector 中，也能被序列化。属性不在构造函数里定义，而是声明在原型对象的 `properties` 字典里。

**下面在 Player 类定义一个 playerName 属性：**

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

这个示例也可在教程[创建和使用脚本](/manual/scripting/component#show-in-inspector)中看到，这样定义后，playerName 就能显示在 Inspector 面板里，并且在场景里保留用户输入的值。

这里的 `default` 用来声明属性的默认值，同时也定义了值类型是字符串。default 可以接受任意类型的参数，但默认值只有在第一次创建对象的时候才会用到，如果是反序列化出来的对象，属性值将会还原为上次序列化前设置的值。

**属性本身也是实例变量，可以直接访问：**

```js
    var Sprite = Fire.Class({
        constructor: function () {
            console.log(this.width);    // 读取默认 width
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

在构造函数被调用前，属性已经被定义好了，可以在构造函数内访问或者重新给属性赋值。

### 属性参数

每个属性可附带任意多个参数(Attribute)，用于指定在 Inspector 中的显示方式、序列化方式等。

```js
    properties {
        score: {
            default: 0,
            type: Fire.Integer,
            tooltip: 'The score of player'
        }
    }
```

以上代码规定了 score 在 Inspector 里只能输入整数，并且当鼠标移到参数上时，显示对应说明。

下面是常用参数，详细用法请参阅[属性参数](/manual/scripting/attributes)。

- type: 限定属性的数据类型
- visible: 设为 false 则不在 Inspector 面板中显示该属性
- serializable: 设为 false 则不序列化该属性
- displayName: 在 Inspector 面板中显示成指定名字
- tooltip: 在 Inspector 面板中添加属性的 Tooltip
- multiline: 在 Inspector 面板中使用多行文本框

#### <a name="visible参数"></a>visible参数

默认情况下，是否显示在 Inspector 取决于属性名是否以下划线"_"开头。如果以下划线开头，则默认不显示在 Inspector，否则默认显示。

如果要显示在 Inspector，可以设置`visible`参数为 true:

```js
    properties {
        _id: {
            default: 0,
            visible: true
        }
    }
```

如果要在 Inspector 中隐藏，可以设置`visible`参数为 false:

```js
    properties {
        id: {
            default: 0,
            visible: false
        }
    }
```

#### <a name="serializable"></a>serializable参数

属性默认情况下都会被序列化，如果不想序列化，可以设置`serializable: false`。

```js
    temp_url: {
        default: '',
        serializable: false
    }
```

#### <a name="type"></a>type参数

当`default`不能提供足够详细的类型信息时，如果想要在 Inspector 里编辑属性，则需要用`type`显式声明具体的类型：

- 当默认值为 null 时，将 type 设置为指定类型(构造函数)，这样才能在 Inspector 中给属性正确赋值。

    ```js
        enemy: {
            default: null,
            type: Fire.Entity
        }
    ```
- 当默认值为数值(Number)类型时，将 type 设置为 `Fire.Integer`，用来表示这是一个整数，这样属性在 Inspector 里就不能输入小数点。
    ```js
        score: {
            default: 0,
            type: Fire.Integer
        }
    ```
- 将 type 设置为枚举类型，就能在 Inspector 中显示枚举选项框。
    ```js
        wrap: {
            default: Fire.Texture.WrapMode.Clamp,
            type: Fire.Texture.WrapMode
        }
    ```
- 当 default 设置为**数组**`[]`时，如果要在 Inspector 中编辑数组元素，可以设置 type 为以上提到的构造函数、`Fire.Integer`、枚举，或者设置成字符串`Fire.Float`, `Fire.Boolean`, `Fire.String`的其中一个，。
    ```js
        nameList: {
            default: [],
            type: Fire.String      // 指定数组的每个元素都是字符串类型
        },
        enemyList: {
            default: [],
            type: Fire.Entity   // 指定数组的每个元素都是 Entity 类型
        }
    ```

### 属性快捷定义

如果属性不带任何参数，则可以直接写成：

```js
    // 完整形式
    properties: {                   // 快捷形式
        width: {            =>      properties: {
            default: 128    =>          width: 128
        }                   =>      }
    }
```

但**默认值不能是对象类型**，如果默认值是对象，还是只能用完整的写法：

```js
    properties: {
        position: {
            default: new Fire.Vec2()
        }
    }
```

**备注**

- 属性都能被子类继承，但子类和父类的属性不能重名。
- 如果属性的默认值需要调用其它方法才能获得，可以在构造函数里重新赋值。

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

## GetSet方法

在属性中设置了 get 或 set 以后，访问属性的时候，就能触发预定义的 get 或 set 方法。

### get

在属性中设置 get 方法：

```js
    properties: {
        width: {
            get: function () {
                return this.__width;
            }
        }
    }
```

get 方法可以返回任意类型的值。
这个属性同样能显示在 Inspector 中，并且可以在包括构造函数内的所有代码里直接访问。

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

请注意：

- 设定了 get 以后，这个属性就不能被序列化，也不能指定默认值，但仍然可附带除了 "default", "serializable" 以外的任意参数。

    ```js
        width: {
            get: function () {
                return this.__width;
            },
            type: Fire.Integer,
            tooltip: "The width of sprite"
        }
    ```

- get 属性本身是只读的，但返回的对象并不是只读的。用户使用代码依然可以修改对象内部的属性，例如：

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
    obj.position = new Fire.Vec2(10, 20);   // 错误！position 是只读的！
    obj.position.x = 100;                   // 允许！position 对象本身可以修改！
    ```

### set

在属性中设置 set 方法：

```js
    width: {
        set: function (value) {
            this.__width = value;
        }
    }
```

set 方法接收一个传入参数，这个参数可以是任意类型。

set 可以和 get 一起使用：

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

请注意：
- 如果没有和 get 一起定义，则 set 自身不能附带任何参数。
- 和 get 一样，设定了 set 以后，这个属性就不能被序列化，也不能指定默认值。
