title: Module
categories: manual
permalinks: manual/scripting/module
---

It is allowed to seperate code into several script files, and inter-reference among them. To make it happen, you'll need to understand how to define and use modules in Fireball. This is often referred as  **Modulization**

> In this chapter, the terms of 'module' and 'script' are usually of the same meaning. All **Note** contents are advanced skills, and are not required to be understood for beginners.

## Overview

If you are still not sure what modulization is for, consider it as:
- `include` in C/C++
- `using` in C#
- `import` in Java & Python
- `link` in HTML

Modulization allows you to refer other scripts in Fireball. For instance, you can:
- Access public variables in other scripts
- Call public methods in other scripts
- Use public types in other scripts
- Utilize or inherit public components in other scripts

Fireball JavaScript implements modulization almost in the same way as node.js:
- A single script is a module
- Each module has its own scope (i.e. local variables declared with `var` cannot be accessed in other modules)
- Refer other modules **synchronously** by `require` method.
- Export variables by setting `module.exports`

All user code will be compiled by Fireball into native JavaScript, which can be executed in mobile browsers, no matter how the modules are defined.

## Module Reference

### `require`

All modules defined by user, i.e. not Fireball built-in modules, need `require` to access. Assuming we're trying to access a component named `Rotate` defined in another script:

```js
var Rotate = require('rotate');
```

The return value of `require` is an object exported by module, and is usually saved in a variable for futher use. The string passed into `require` is the **file name** of the module. The file name has no path or suffix, and is case sensitive.

### A Complete Example of `require`

Next we can create an inherited class from `Rotate`. Create a new script named `sinRotate.js`:

```js
var Rotate = require('rotate');

var SinRotate = Fire.Class({
    extends: Rotate,
    update: function () {
        this.transform.rotation += this.speed * Math.sin(Fire.Time.time);
    }
});
```

We define a new component named `SinRotate`, which extends from `Rotate` and override the `update` method. The new component is available to other scripts as well, as long as there is a `require('sinRotate')`.

**Note**
  - `require` can be called anywhere, at any moment.
  - A script doesn't execute until it's required in the project for the first time, which means `require` always returns the same instance no matter how many times called.
  - When debugging, you can `require` any project module in the Developer Tools.

## <a name="define"></a>定义模块

### 定义Component

其实每一个单独的脚本文件就是一个模块，例如新建一个脚本 `rotate.js`，在里面定义一个 Component：

```js
var Rotate = Fire.Class({
    extends: Fire.Component,
    properties: {
        speed: 1
    },
    update: function () {
        this.transform.rotation += this.speed;
    }
});
```

当你在脚本中定义了一个 Component，Fireball 会自动将它设置为导出模块，其它脚本直接 require 这个模块就能使用这个 Component。

### 定义普通JavaScript模块

模块里不单单能定义 Component，实际上你可以定义任意 JavaScript 对象。假设有个脚本 `config.js`

```js
var config = {
    moveSpeed: 10,
    version: '0.15',
    showTutorial: true,

    load: function () {
        // ...
    }
};
config.load();
```

现在如果我们要在其它脚本中访问 config 对象：

```js
// player.js
var config = require('config');
Fire.log('speed is', config.moveSpeed);
```

结果会有报错：`TypeError: Cannot read property 'moveSpeed' of null`，这是因为 config 没有设置为导出对象。我们还需要在 `config.js` 的最后把 **module.exports** 设置成 config：

```js
module.exports = config;
```

这样做的原因是只要有其它脚本 require 它，获得的实际上就是这里的 module.exports 对象。

> 那为什么定义 Component 时可以不用设置 exports ？
  因为 Component 是 Fireball 中的特殊类型，如果一个脚本定义了 Component 却没有声明 exports，Fireball 会自动将它设置为对应的 Component。

完整代码如下：

```js
// config.js
var config = {
    moveSpeed: 10,
    version: '0.15',
    showTutorial: true,

    load: function () {
        // ...
    }
};
config.load();

module.exports = config;
```
```js
// player.js
var config = require('config');
Fire.log('speed is', config.moveSpeed);
```

这样便能正确输出：`speed is 10`。

## 更多示例

### 导出变量

- module.exports 默认就是 {}，可以直接往里面增加新的字段。

    ```js
    // foobar.js:
    module.exports.foo = function () {
        Fire.log("foo");
    };
    module.exports.bar = function () {
        Fire.log("bar");
    };
    // test.js:
    var foobar = require("foobar");
    foobar.foo();    // "foo"
    foobar.bar();    // "bar"
    ```
- module.exports 导出的对象的值可以是任意 JavaScript 类型。

    ```js
    // foobar.js:
    module.exports = {
        FOO: function () {
            this.type = "foo";
        },
        bar: "bar"
    };
    // test.js:
    var foobar = require("foobar");
    var foo = new foobar.FOO();
    Fire.log(foo.type);      // "foo"
    Fire.log(foobar.bar);    // "bar"
    ```

### 封装私有变量

每个脚本都是一个单独的作用域，在脚本内使用 **var** 定义的局部变量，将无法被模块外部访问。我们可以这样来封装模块内的私有变量：

```js
// foobar.js:
var dirty = false;
module.exports = {
    setDirty: function () {
        dirty = true;
    },
    isDirty: function () {
        return dirty;
    },
};

// test1.js:
var foo = require("foobar");
Fire.log(typeof foo.dirty);        // "undefined"
foo.setDirty();

// test2.js:
var foo = require("foobar");
Fire.log(foo.isDirty());           // true
```

**警告：定义变量前一定要在前面加上 var**，否则将会变成全局变量！在 Fireball 中禁止使用全局变量。

```js
// foobar.js:
dirty = false;        // 这是错的，dirty 会变成全局变量！前面应该加上 var ！
module.exports = {
    setDirty: function () {
        dirty = true;
    },
};
```

## 循环引用

(TODO)
