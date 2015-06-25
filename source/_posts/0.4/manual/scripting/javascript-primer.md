title: JavaScript Primer
permalinks: 0.4/wwmanual/scripting/javascript-primer
---

> This guide is based on [A JavaScript Primer For Meteor](https://www.discovermeteor.com/blog/javascript-for-meteor/)

## Overview

This guide provides a set of minimal JavaScript syntax and patterns for beginner to be able to understand scripting in Fireball.

JavaScript is a language full of contradictions: it’s named after Java even though it doesn’t have anything to do with it, it was [created in 10 days](https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript) but is still in use 20 years later, and despite getting its fair share of criticism, it’s ubiquitous on the web.

If JavaScript has one thing going for it, is that it’s easy to get started with. Now don’t get me wrong: truly mastering JavaScript is a difficult task. But learning enough to get by isn’t that hard, and shouldn’t take long especially if you already have some experience with other programming languages.

What’s more, when building Fireball games you’ll often find yourself re-using the same patterns over and over. And as stated by the Pareto principle, learning 20% of a language should be enough to cover 80% of situations.

So today, let’s take a look at the absolute minimum amount of JavaScript you need to know to learn Fireball.

## Following Along

Did you know that you already possessed a full-fledged JavaScript development environment? I’m talking about the very browser you’re reading this with!

So you can follow along with all these examples simply by typing them into your browser console. Here’s [a handy guide](http://webmasters.stackexchange.com/a/77337) on how to open it in various browsers.

Ready? Let’s learn some JavaScript!

## Variables

Here’s how you declare a variable in JavaScript:

```js
var a;
```

The var keyword lets JavaScript know that whatever comes after is a variable. Now let’s assign a value to our variable:

```js
var a = 12;
```

Now maybe you’ve seen something like this while looking at some JavaScript code:

```
a = 12;
```

JavaScript doesn’t seem to mind when you ommit the var keyword. So what is it good for?

The var keyword makes our variable local. Inside a Fireball project, this means that prefixing a variable with var will restrict its scope to the function you’re declaring it in (or the file, if you declare it outside of any function).

On the other hand, **omitting the var keyword will make your variable available to your whole Fireball project**. Sometimes that’s good, but in most case it’s better to try and avoid polluting the global scope.

## Functions

Here’s how you declare a function in JavaScript:

```js
var myAwesomeFunction = function (myArgument) {
    // do something
}
```

And here’s how you’d call your function:

```js
myAwesomeFunction(something);
```

You’ll notice function declarations follow the same var something = somethingElse pattern as variable declarations.

As they should, since in JavaScript, functions are variables too! This means that you can do stuff like using functions as arguments for other functions:

```js
square = function (a) {
    return a * a;
}
applyOperation = function (f, a) {
    return f(a);
}
applyOperation (square, 10); // 100
```

## Return

A return statement takes a value and returns this value as the result of a function. The key thing to remember here is that whatever comes after return will never get executed:

```js
myFunction = function (a) {
    return a * 3;
    explodeComputer(); // will never get executed (hopefully!)
}
```

## If Statements

Here’s what an If statement looks like in JavaScript:

```js
if (foo) {
    return bar;
}
```

## If/Else Statements

Here’s what an If/Else statement looks like in JavaScript:

```js
if (foo) {
    function1();
}
else {
    function2();
}
```

If/Else statements also have their own shorthand syntax:

```js
foo ? function1() : function2();
```

This is particularly useful when assigning a value to a variable:

```js
var n = foo ? 1 : 2;
```

This means “if foo is true, then set n to 1, otherwise set it to 2”.

Oh and for good measure, here’s an If/Else If/Else:

```js
if (foo) {
    function1();
}
else if (bar) {
    function2();
}
else {
    function3();
}
```

## JavaScript Arrays

Here’s how you define an array:

```js
a = [123, 456, 789];
```

And here’s how you access an array item (indexes start at 0):

```js
a[1]; // 456
```

## JavaScript Objects

Here’s how you define a JavaScript object:

```js
myProfile = {
    name: "Jare Guo",
    email: "blabla@gmail.com",
    'zip code': 12345,
    isInvited: true
}
```

After the object declaration (`myProfile = {…}`) comes a list of comma-separated pairs. Each pair contains a key (a string, which can optionally be enclosed in quotes if it contains any spaces) and a value (any type of JavaScript item: strings, numbers, booleans, variables, arrays, objects, and even functions).

You can also nest objects, and even use arrays:

```js
myProfile = {
    name: "Jare Guo",
    email: "blabla@gmail.com",
    city: "Xiamen",
    points: 1234,
    isInvited: true,
    friends: [
        {
            name: "Johnny",
            email: "blablabla@gmail.com"
        },
        {
            name: "Nantas",
            email: "piapiapia@gmail.com"
        }
    ]
}
```

Accessing an object’s property couldn’t be simpler: just use the dot notation. You can even combine it with arrays:

```js
myProfile.name; // Jare Guo
myProfile.friends[1].name; // Nantas
```

You’ll find JavaScript objects almost everywhere in JavaScript, especially when invoking functions. For example, here’s how you define a FireClass in Fireball:

```js
var MyComponent = Fire.Class({
    extends: Fire.Component
});
```

This `{extends: Fire.Component}` argument is an anonymous JavaScript object. With JavaScript, you’ll see that most of the time you don’t actually need to assign a name to an object (or even to a function) to make use of it.

## Anonymous Functions

We’ve seen you can declare functions using the following syntax:

```js
myFunction = function (myArgument) {
    // do something
}
```

And we’ve seen that JavaScript treats functions just like variables, letting you pass them as arguments to other functions:

```js
square = function (a) {
    return a * a;
}
applyOperation = function (f, a) {
    return f(a);
}
applyOperation(square, 10); // 100
```

And we’ve also seen that JavaScript loves coming up with shorter ways to write things. So here’s an equivalent syntax:

```js
applyOperation = function (f, a) {
    return f(a);
}
applyOperation(
    function(a){
      return a*a;
    },
    10
) // 100
```

Instead of defining the square function and passing it as an argument, we’re defining it inside the argument call. This is known as using an “anonymous function”, and it’s one of the most common JavaScript patterns around.

## Chaining

We’ve seen that you can pass parameters to functions. But there’s another syntax that you’ll often encounter for things such as array or string operations:

```js
var myArray = [123, 456];
myArray.push(789) // 123, 456, 789
var myString = "abcdef";
myString.replace("a", "z"); // "zbcdef"
```

This dot notation means “call the `replace` function on `myString` with arguments “a” and “z” and return the result”.

The beauty of it is that you can also chain multiple links together as long as they all return something. We won’t get into how to define chainable functions, but using them is easy enough. Just follow the `something.function1().function2().function3()` pattern.

Each link of the chain will take a value, apply a function to it, and then pass on its result to the next link:

```js
var n = 5;
n.double().square(); //100
```

## This

`this` is probably one of the hardest concept to master in all of JavaScript.

Basically, the `this` keyword lets you access the object on which you’re currently working: just like a chameleon, `this` keeps changing based on its surroundings.

So instead of trying to explain `this`, let me give you two tools to help you figure things out yourself (what do you mean, I’m taking the easy way out?!).

The first is the good old `console.log()`, which prints any object to the browser’s console. Adding a `console.log(this)` to begin a function is often the best way to figure out what’s going on:

```js
myFunction = function (a, b) {
    console.log(this);
    // do something
}
```

The second pattern is assigning `this` to another variable:

```js
myFunction = function (a, b) {
    var myObject = this;
    // do something
}
```

While it might at first seem like this doesn’t accomplish anything, it lets you safely re-use `myObject` throughout your code, since unlike `this` its value won’t change depending on the context.

## Operators

`=` is the assigment operator. This means that `a = 12` means assign the value “12” to `a`.

If you want to compare two values, you would use `==`, as in `a == 12`.

JavaScript also features the `===` operator, which compares both value and type (i.e. string, integer, etc.):

```js
a = "12";
a == 12; // true
a === 12; // false
```

In most cases, you’ll want to use the `===` operator whenever comparing two values, because there aren’t that many cases where you’d want two variables to be equal in value but not in type.

Here’s JavaScript’s unequality operator:

```js
a = 12;
a !== 11; // true
```

The `!` operator can also be used independently to get the opposite of a boolean value:

```js
a = true;
!a; // false
```

An interesting consequence of the `!` operator is that it always returns a boolean value, even if what comes after is not a boolean:

```js
a = 12;
!a; // false
```

This means that if you want to convert a variable to boolean you can just use the `!` operator twice (once to force the variable to boolean, a second time to revert the value back):

```js
a = 12;
!!a; // true
```

Or:

```js
a = 0;
!!a; // false
```

## Style

Finally, here are a few optional style rules that will make your JavaScript code cleaner:

- Use camelCase: write myRandomVariable, not my_random_variable.
- Add a ; at the end of each line, even if it’s optional.
- Separate each keyword with a space, i.e. a = b + 1, not a=b+1.

You’ll find more guidelines in the (TODO).

## Putting It Together

So now that you’re equipped with the basics of JavaScript syntax, let’s try to put it together and understand a bit of Fireball code:

```js
var Comp = Fire.Class({
    extends: Fire.Component,

    properties: {
        target: {
            default: null,
            type: Fire.Entity
        }
    },

    onStart: function () {
        this.target = Fire.Entity.find('/Main Player/Bip/Head');
    },

    update: function () {
        this.transform.worldPosition = this.target.transform.worldPosition;
    }
});
```

The above code defines a new component for engine, with a `target` parameter. At runtime this component will place itself at the same position as `target` entity.

Let’s break this down (I’ll highlight each syntax pattern as we go):

`var Comp = Fire.Class({`: We’re diving into the `Fire` object, using **dot notation** to call the `Class()` function (which is itself a property of `Fire`) on an anonymous **JavaScript object** (`{}`) (chaining, JavaScript objects).

`target: { default: null, type: Fire.Entity }`: This key-pair defines a `target` property. Value is an object literal, which specifies default value and type for `target`.

`extends: Fire.Component`: This means the class inherits from `Fire.Component`，it's a builtin class in Fireball.

`onStart: function () {`: The key/value pair implement an instance method called onStart, the value is an **anonymous function**.

`this.target = Fire.Entity.find('`: In this context, `this` corresponds to the component being created. We use `this.target` to access `target` property.

## Going Forward

This tutorial is by no means meant to replace actually learning JavaScript. But the various patterns covered here should be enough to let you understand the vast majority of Discover Fireball’s code, at least from a syntax point of view.

So if like me you prefer learning by doing, hopefully this should be enough to get you ready to start building Fireball games!

## JavaScript Resources

If you want to learn more about JavaScript, we recommend the following ebook:

- [Eloquent JavaScript](http://eloquentjavascript.net/)
- [JavaScript Garden](http://bonsaiden.github.io/JavaScript-Garden/)
