title: From Unity
categories: manual
permalinks: manual/start/from-unity
---

Though there are many differences between Fireball and [Unity®](http://unity3d.com/), they are both designed based on components, and share some common user experiences. Knowledge of Unity is therefore helpful for getting started with Fireball. You will find this chapter useful if you ever used Unity.

This chapter will not give you a detailed introduction of Fireball from scratch, nor will list all differences from Unity.

## Differences In Terms

Terms in Fireball | Terms in Unity | Description
 --- | --- | ---
Scene | Level | Game Scene
Entity | GameObject | Objects in game scene, which may include multiple Components respectively.
Assets | Project | Project resources

## Differences In Design

- Parent-child relations are maintained by Entity in Fireball, while in Unity are by Transform.
- Fireball chooses uppper-left corner as origin point (i.e. (0,0)) in coordinates system (both Viewport and Screen), while Unity chooses bottom-left corner.
- NonSerialized fields **can** be shown in Fireball Inspector Panel, while they cannot to so in Unity.
- Fireball **can** access properties defined by getter/setter in Inspector Panel. Unity can't.

## Differences in API

- Fireball methods' names start with lower-cased letters.
- Fireball objects are all inherited from Fire.FObject. (As Unity objects are inherited from UnityEngine.Object)
- Fireball doesn't destroy objects by calling Object.Destroy(obj), but by `obj.destroy()`.
- Fireball checks if an object has been destroyed by `if(obj.isValid)` or `Fire.isValid(obj)`, and `if(obj)` doesn't work. `obj.isValid` is available only when the reference to `obj` is not null.
- Fireball uses `Entity.active` to get and set the activation state for entities. (Unity uses `activeSelf`)
- Fireball components are of type `Component` <del>and `Behaviour`</del>. There is no `Monobehaviour`.
- Fireball adds components by `entity.addComponent(MyComponent)` or `entity.addComponent("MyComponent")`.
- Fireball gets components by `entity.getComponent(MyComponent` or `entity.GetComponent(MyComponent)`.
- Fireball retrieves Entity from components by `component.entity`. (Unity uses `component.gameObject`)
- Fireball retrieves and sets parent objects directly by `Entity.parent`. Related interfaces such as `children`, `sibling` and `find` can be accessed through Entity as well.
- Fireball uses the local coordinates of the parent object, not the world coordinates, for the value of `Transform.position`. Values of `rotation` and `scale` follow the same rule.
- Fireball provides `transform.x` and `transform.y` in Transform for users' convenience.
- Fireball provides the `onLoad` callback for components, equaling to `Awake` in Unity.
- Fireball provides the `start` callback for components, equaling to `Start` in Unity.
- Fireball follows the node.js style in callback functions, which means the first parameter is error message, and the second is actual passed data.
- Fireball can set an Entity as `dontDestroyOnLoad = true`, which equals to `DontDestroyOnLoad()` in Unity.
