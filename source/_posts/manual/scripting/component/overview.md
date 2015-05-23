title: Component Overview
categories: manual
permalinks: manual/scripting/component
---
Most features in Fireball are provided by Components, the entrance of Fire-shell script execution. Various types of gameplay can be implemented by Components, such as entity controlling, event broadcasting, property modifying and user input handling.

Same as Fireball itself, Components run in Javascript. JavaScript is a quick-start programming language. You might want to check the [JavaScript Primer](/manual/scripting/javascript-primer) for basics. On the other hand, other languages are supported by Fireball, such as CoffeeScript and TypeScript, which can be smoothly compiled to JavaScript.

## Creating Scripts

Different from other kinds of resources, scripts are normally created in Fireball directly, which can be done by right-clicking your mouse button in the Assets panel, or, clicking the adding button in the upper-left corner and choose `Create > New Script`.

Note:
- The file name will be used for the Component class name and the references among scripts, so it is suggested to rename your script as soon as they are created.
- Scripts with same file names are not allowed.

## Getting Started with Scripts

Double clicking a script in Fireball will open it with the built-in code editor. Let's create a script named `Player.js` and open it. The default code should look like this:

```js
// Player.js

var Comp = Fire.Class({
    extends: Fire.Component,

    // use this for initialization
    start: function () {

    },

    // called every frame
    update: function () {

    }
});
```

The script above is recognized in Fireball because it inherits `Fire.Component`, the base class for all Components. Defining a class that inherits `Fire.Component` can be considered as creating a Component template. Once this script is attached to an entity, the template will be used to create a Component instance.

## Getting Started with Components

`Fire.Class({...})` defines a class, in which `extends: Fire.Component` suggests the inheritance (or extension) of the `Fire.Component` class. Fireball sets the class name to `Player` automatically since Components use the script file name as its class name, and the script is named as *Player.js*.

`var Comp` declares a variable, and is assigned to the class returned by `Fire.Class` afterwards. It is a normal JavaScript local variable that holds the reference of a class, and can be named as you please without considering the actual class name `Player`. Actually, you don't even need to declare this variable if the returned class of `Fire.Class` won't be used further in this script (as what we've done here).

`update: function () {...};` is for defining the **update** callback function. The `update` function is called by Fireball before the rendering of every frame. Actions that can be done in `update` function are often those continuously happen in gameplay, like triggering behaviours, handling interactions, etc.

`start: function () {...};` is for defining the **start** callback function. The `onStart` function is called by Fireball before the first `update` call. You can put your initialization code into `start`.

Note:
- We will use **FireClass** to refer to the types defined by `Fire.Class`. The only difference between Components and FireClasses is that the class names of Components are retrieved automatically from their scripts. Further details can be learned from [Define Class](/manual/scripting/class).
- For experienced users, we suggest to put logical processing code into Fireball callbacks (e.g. `start`). Although constructors are perfectly legal to define, it'd be better to use them for member variable declaring.

## Attaching to Entity

As mentioned, scripts are templates of Component definition. Code inside won't be executed until an instance is created in an entity. To do that, please drag the script from the Asset Panel to the Inspector Panel that is currenly presenting the entity properties (i.e. you'll need to choose the desire entity first, in the Hierarchy Panel or the Scene Panel). Or, you can click the adding button in the Inspector Panel and select your script in the sub-menu of `Scripts`. Once done by either way, your `Player` component will be attached to the entity and look like the same as other Fireball built-in Components.

The Component will be executed as soon as you click Play to run the game. It can be verified by adding some code in `start`:
```js
// use this for initialization
start: function () {
    Fire.log('Hello Fireball!');
}
```

`Fire.log` is a useful function to print log information to Fireball Console Panel. Run the game again, and you'll see `Hello Fireball!` in the Console.

## <a name="show-in-inspector"></a>Showing Properties in Inspector

It is possible to check and edit Component properties outside the code, including the one you just created, in Fireball Inspector Panel.

```js
// Player.js

var Player = Fire.Class({
    extends: Fire.Component,

    properties {
        playerName: '',
    },

    // use this for initialization
    start: function () {
        Fire.log("My name is", this.playerName);
    },

    // called every frame
    update: function () {
        // ...
    };
});
```

The script will add an input control in the Inspector for `playerName`. You might be glad to know that the Inspector will display the camel naming styled `playerName` as a more readable name: `Player Name`.

![player-name-in-inspector](/manual/scripting/component/player-name-in-inspector.png)

Try to change `Player Name` and run the game. In our example, the Console will print "My name is Duang Duang". In fact, Fireball allows you to change properties in run-time, which is quite useful for debugging. After stopping, property values will be reset to those before game running, which means that you can modify and test game objects during game running without worrying about ruining your unsaved work.
