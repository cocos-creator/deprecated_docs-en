YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        {
            "displayName": "Intersection",
            "name": "Intersection",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "_CallbacksHandler",
            "name": "_CallbacksHandler",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The CallbacksHandler is an abstract class that can register and unregister callbacks by key.\nSubclasses should implement their own methods about how to invoke the callbacks.</p>\n",
            "access": "private"
        },
        {
            "displayName": "_ObjectFlags",
            "name": "_ObjectFlags",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Bit mask that controls object states.</p>\n",
            "access": "private"
        },
        {
            "displayName": "_Runtime.RenderContext",
            "name": "_Runtime.RenderContext",
            "namespace": "_Runtime",
            "module": "Fire",
            "description": "<p>The abstract renderer class which will be totally replaced with runtime implementation.\nhere just used as the mocker for unit tests.</p>\n",
            "access": "private"
        },
        {
            "displayName": "Animation",
            "name": "Animation",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "AnimationNode",
            "name": "AnimationNode",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The collection and instance of playing animations created by entity.animate.</p>\n",
            "access": "public"
        },
        {
            "displayName": "AnimationNodeBase",
            "name": "AnimationNodeBase",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The abstract interface for all playing animation.</p>\n",
            "access": "public"
        },
        {
            "displayName": "AnimationState",
            "name": "AnimationState",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The AnimationState gives full control over animation playback process.\nIn most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Array",
            "name": "Array",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Asset",
            "name": "Asset",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Base class for asset handling.</p>\n",
            "access": "public"
        },
        {
            "displayName": "AssetBundleBase",
            "name": "AssetBundleBase",
            "namespace": "",
            "module": "Fire",
            "description": "<p>AssetBundleBase 为 Resources 提供了上层接口，用于加载资源包里的资源。</p>\n",
            "access": "public"
        },
        {
            "displayName": "AssetLibrary",
            "name": "AssetLibrary",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The asset library which managing loading/unloading assets in project.</p>\n",
            "access": "public"
        },
        {
            "displayName": "AtlasAsset",
            "name": "AtlasAsset",
            "namespace": "",
            "module": "Fire.Spine",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "AudioClip",
            "name": "AudioClip",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The audio clip is an audio source data.</p>\n",
            "access": "public"
        },
        {
            "displayName": "AudioSource",
            "name": "AudioSource",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The audio source component.</p>\n",
            "access": "public"
        },
        {
            "displayName": "BitmapFont",
            "name": "BitmapFont",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "BitmapText",
            "name": "BitmapText",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The bitmap font renderer component.</p>\n",
            "access": "public"
        },
        {
            "displayName": "CallbacksInvoker",
            "name": "CallbacksInvoker",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The callbacks invoker to handle and invoke callbacks by key</p>\n",
            "access": "public"
        },
        {
            "displayName": "Camera",
            "name": "Camera",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Color",
            "name": "Color",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Representation of RGBA colors.</p>\n<p>Each color component is a floating point value with a range from 0 to 1.</p>\n<p>You can also use the convenience method <% crosslink Fire.color Fire.color %> to create a new Color.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Component",
            "name": "Component",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Base class for everything attached to Entity.</p>\n<p>NOTE: Not allowed to use construction parameters for Component&#39;s subclasses,\n      because Component is created by the engine.</p>\n",
            "access": "public"
        },
        {
            "displayName": "ContentStrategyType",
            "name": "ContentStrategyType",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "EmitterMode",
            "name": "EmitterMode",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Engine",
            "name": "Engine",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Access to engine runtime data.\nThis class contains static methods for looking up information about and controlling the runtime data.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Entity",
            "name": "Entity",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Class of all entities in scenes.</p>\n",
            "access": "public"
        },
        {
            "displayName": "EqualToFrame",
            "name": "EqualToFrame",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Strategy that makes the container&#39;s size equals to the frame&#39;s size</p>\n",
            "access": "public"
        },
        {
            "displayName": "Event",
            "name": "Event",
            "namespace": "",
            "module": "Fire",
            "description": "<p>An event allows for signaling that something has occurred. E.g. that an asset has completed downloading.</p>\n",
            "access": "public"
        },
        {
            "displayName": "EventTarget",
            "name": "EventTarget",
            "namespace": "",
            "module": "Fire",
            "description": "<p><p>EventTarget is an object to which an event is dispatched when something has occurred.\nEntity are the most common event targets, but other objects can be event targets too.</p></p>\n<p><p>Event targets are an important part of the Fireball event model.\nThe event target serves as the focal point for how events flow through the scene graph.\nWhen an event such as a mouse click or a keypress occurs, Fireball dispatches an event object\ninto the event flow from the root of the hierarchy. The event object then makes its way through\nthe scene graph until it reaches the event target, at which point it begins its return trip through\nthe scene graph. This round-trip journey to the event target is conceptually divided into three phases:</p></p>\n<ul>\n<li>The capture phase comprises the journey from the root to the last node before the event target&#39;s node</li>\n<li>The target phase comprises only the event target node</li>\n<li>The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the tree\nSee also: <a href=\"http://www.w3.org/TR/DOM-Level-3-Events/#event-flow\">http://www.w3.org/TR/DOM-Level-3-Events/#event-flow</a></li>\n</ul>\n<p>Event targets can implement the following methods:</p>\n<ul>\n<li>_getCapturingTargets</li>\n<li>_getBubblingTargets</li>\n</ul>\n",
            "access": "public"
        },
        {
            "displayName": "FixedHeight",
            "name": "FixedHeight",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Strategy to scale the content&#39;s height to container&#39;s height and proportionally scale its width.</p>\n",
            "access": "public"
        },
        {
            "displayName": "FObject",
            "name": "FObject",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The base class of most of all the objects in Fireball.</p>\n",
            "access": "public"
        },
        {
            "displayName": "FontFlagType",
            "name": "FontFlagType",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "HashObject",
            "name": "HashObject",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Provides object id, this id is unique globally.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Input",
            "name": "Input",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Interface into the Input system.</p>\n",
            "access": "public"
        },
        {
            "displayName": "InputField",
            "name": "InputField",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The Input Field renderer component.</p>\n",
            "access": "public"
        },
        {
            "displayName": "_DeserializeInfo",
            "name": "_DeserializeInfo",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "KeyboardEvent",
            "name": "KeyboardEvent",
            "namespace": "",
            "module": "Fire",
            "description": "<p>KeyboardEvent objects describe a user interaction with the keyboard. Each event describes a key; the event type (keydown, keypress, or keyup) identifies what kind of activity was performed.\nThis class is just an alias to the Web <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent\">KeyboardEvent</a></p>\n",
            "access": "public"
        },
        {
            "displayName": "LoadManager",
            "name": "LoadManager",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The manager scheduling resources loading</p>\n<ul>\n<li>It will:<ul>\n<li>select registered loader</li>\n<li>merge same url request</li>\n<li>limit the max concurrent request</li>\n</ul>\n</li>\n<li>It will NOT:<ul>\n<li>cache what has being loaded</li>\n<li>load depends of resource</li>\n</ul>\n</li>\n</ul>\n",
            "access": "public"
        },
        {
            "displayName": "Matrix23",
            "name": "Matrix23",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Simple matrix to do 2D affine transformations.\nIt is actually 3x3 but the last row is [0 0 1].</p>\n",
            "access": "public"
        },
        {
            "displayName": "ModifierKeyStates",
            "name": "ModifierKeyStates",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "MouseEvent",
            "name": "MouseEvent",
            "namespace": "",
            "module": "Fire",
            "description": "<p><p>The MouseEvent interface represents events that occur due to the user interacting with a pointing device (such as a mouse). Common events using this interface include click, dblclick, mouseup, mousedown.</p></p>\n<p><p>See</p></p>\n<ul>\n<li><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent\">https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent</a></li>\n<li><a href=\"http://www.quirksmode.org/dom/w3c_events.html#mousepos\">http://www.quirksmode.org/dom/w3c_events.html#mousepos</a></li>\n</ul>\n",
            "access": "public"
        },
        {
            "displayName": "NoScale",
            "name": "NoScale",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "ParticleSystem",
            "name": "ParticleSystem",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The Particle System component.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Path",
            "name": "Path",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The utils for path operation</p>\n",
            "access": "public"
        },
        {
            "displayName": "Playable",
            "name": "Playable",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "PositionType",
            "name": "PositionType",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Rect",
            "name": "Rect",
            "namespace": "",
            "module": "Fire",
            "description": "<p>A 2D rectangle defined by x, y position and width, height.</p>\n<p>see {% crosslink Fire.rect Fire.rect %}</p>\n",
            "access": "public"
        },
        {
            "displayName": "Renderer",
            "name": "Renderer",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The base for all renderer</p>\n",
            "access": "public"
        },
        {
            "displayName": "Resources",
            "name": "Resources",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Resources 模块允许你在运行时动态加载资源。资源以路径的形式标识，路径不能包含文件后缀名。\nResources 能够使用路径加载项目里所有 <code>Resources</code> 目录下的资源，例如 <code>sprites/npc/001</code>。</p>\n",
            "access": "public"
        },
        {
            "displayName": "ResourcesBundle",
            "name": "ResourcesBundle",
            "namespace": "",
            "module": "Fire",
            "description": "<p>这个加载类用于在运行时访问项目里的 Resources 目录</p>\n",
            "access": "public"
        },
        {
            "displayName": "Screen",
            "name": "Screen",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Screen class can be used to access display information.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Screen.ContainerStrategy",
            "name": "Screen.ContainerStrategy",
            "namespace": "",
            "module": "Fire",
            "description": "<p>ContainerStrategy class is the root strategy class of container&#39;s scale strategy,\nit controls the behavior of how to scale the container and canvas.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Screen.ContentStrategy",
            "name": "Screen.ContentStrategy",
            "namespace": "",
            "module": "Fire",
            "description": "<p>ContentStrategy class is the root strategy class of content&#39;s scale strategy,\nit controls the behavior of how to scale the scene and setup the viewport for the game.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Skeleton",
            "name": "Skeleton",
            "namespace": "",
            "module": "Fire.Spine",
            "description": "<p>The skeleton animation of spine.</p>\n",
            "access": "public"
        },
        {
            "displayName": "SkeletonDataAsset",
            "name": "SkeletonDataAsset",
            "namespace": "",
            "module": "Fire.Spine",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "SkeletonRenderer",
            "name": "SkeletonRenderer",
            "namespace": "",
            "module": "Fire.Spine",
            "description": "<p>The base class of Skeleton.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Sprite",
            "name": "Sprite",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Represents a Sprite object which obtained from Texture.</p>\n",
            "access": "public"
        },
        {
            "displayName": "SpriteAnimation",
            "name": "SpriteAnimation",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The sprite animation Component.</p>\n",
            "access": "public"
        },
        {
            "displayName": "SpriteAnimationClip",
            "name": "SpriteAnimationClip",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The sprite animation clip.</p>\n",
            "access": "public"
        },
        {
            "displayName": "SpriteAnimationState",
            "name": "SpriteAnimationState",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The sprite animation state.</p>\n",
            "access": "public"
        },
        {
            "displayName": "SpriteRenderer",
            "name": "SpriteRenderer",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Renders a sprite in the scene.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Text",
            "name": "Text",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The text renderer component.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Texture.FilterMode",
            "name": "Texture.FilterMode",
            "namespace": "Texture",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Texture.Texture",
            "name": "Texture.Texture",
            "namespace": "Texture",
            "module": "Fire",
            "description": "<p>Class for texture handling.\nUse this to create textures on the fly or to modify existing texture assets.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Texture.WrapMode",
            "name": "Texture.WrapMode",
            "namespace": "Texture",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "Time",
            "name": "Time",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The interface to get time information from Fireball.</p>\n<p>See <a href=\"/en/scripting/time/\">Time</a></p>\n",
            "access": "public"
        },
        {
            "displayName": "Transform",
            "name": "Transform",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Defines position, rotation and scale of an entity.</p>\n",
            "access": "public"
        },
        {
            "displayName": "ValueType",
            "name": "ValueType",
            "namespace": "",
            "module": "Fire",
            "description": "<p>The base class of all value types.</p>\n",
            "access": "public"
        },
        {
            "displayName": "Vec2",
            "name": "Vec2",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Representation of 2D vectors and points.</p>\n<p>see {% crosslink Fire.v2 Fire.v2 %}</p>\n",
            "access": "public"
        }
    ],
    "enums": [
        {
            "displayName": "Fire.KeyCode",
            "name": "Fire.KeyCode",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard.</p>\n",
            "access": "public"
        },
        {
            "displayName": "FontType",
            "name": "FontType",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "ImageType",
            "name": "ImageType",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Image Type</p>\n",
            "access": "public"
        },
        {
            "displayName": "SpriteAnimationClip.StopAction",
            "name": "SpriteAnimationClip.StopAction",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "SpriteAnimationClip.WrapMode",
            "name": "SpriteAnimationClip.WrapMode",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "TextAlign",
            "name": "TextAlign",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Text alignment</p>\n",
            "access": "public"
        },
        {
            "displayName": "TextAnchor",
            "name": "TextAnchor",
            "namespace": "",
            "module": "Fire",
            "description": "",
            "access": "public"
        },
        {
            "displayName": "WrapMode",
            "name": "WrapMode",
            "namespace": "",
            "module": "Fire",
            "description": "<p>Specifies how time is treated when it is outside of the keyframe range of an Animation.</p>\n",
            "access": "public"
        }
    ],
    "modules": [
        {
            "displayName": "Editor",
            "name": "Editor",
            "submodules": []
        },
        {
            "displayName": "Fire",
            "name": "Fire",
            "submodules": []
        },
        {
            "displayName": "Fire.JS",
            "name": "Fire.JS",
            "submodules": []
        },
        {
            "displayName": "Fire.Spine",
            "name": "Fire.Spine",
            "submodules": []
        },
        {
            "displayName": "Math",
            "name": "Math",
            "submodules": []
        }
    ],
    "allModules": [
        {
            "displayName": "Editor",
            "name": "Editor",
            "description": "<p>Global object with classes, properties and methods you can access from anywhere.</p>\n"
        },
        {
            "displayName": "Fire",
            "name": "Fire",
            "description": "<p>Global object with runtime classes, properties and methods you can access from anywhere.\nSubmodules:</p>\n<ul>\n<li><a href=\"./Fire.JS.html\">JS</a></li>\n<li><a href=\"./Fire.Spine.html\">Spine</a></li>\n</ul>\n"
        },
        {
            "displayName": "Fire.JS",
            "name": "Fire.JS",
            "description": "<p>This module provides some JavaScript utilities.</p>\n"
        },
        {
            "displayName": "Fire.Spine",
            "name": "Fire.Spine",
            "description": "<p>The namespace of Spine, all classes, functions, properties and constants of Spine are defined in this\nmodule.</p>\n"
        },
        {
            "displayName": "Math",
            "name": "Math",
            "description": "<p>Extends the JavaScript built-in object that has properties and methods for mathematical constants and functions.\nSee <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math\">Global_Objects/Math on MDN</a></p>\n"
        }
    ]
} };
});