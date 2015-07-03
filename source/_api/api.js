window.apimeta = {
  "enums": [],
  "classes": [
    {
      "name": "Array",
      "namespace": "Fire.JS.Array",
      "module": "Fire.JS",
      "description": ""
    },
    {
      "name": "Asset",
      "namespace": "Fire.Asset",
      "module": "Fire",
      "description": "<p><p>Base class for asset handling.</p>\n<p>You should override:</p>\n<ul>\n<li>validateAsset (static)</li>\n</ul>\n<p>You may want to override:</p>\n<ul>\n<li>createNode</li>\n<li>Fire.FObject._serialize</li>\n<li>Fire.FObject._deserialize</li>\n</ul></p>\n"
    },
    {
      "name": "AssetLibrary",
      "namespace": "Fire.AssetLibrary",
      "module": "Fire",
      "description": "<p>The asset library which managing loading/unloading assets in project.</p>\n"
    },
    {
      "name": "CallbacksInvoker",
      "namespace": "Fire.CallbacksInvoker",
      "module": "Fire",
      "description": "<p><p>The callbacks invoker to handle and invoke callbacks by key</p></p>\n"
    },
    {
      "name": "Color",
      "namespace": "Fire.Color",
      "module": "Fire",
      "description": "<p><p>Representation of RGBA colors.</p>\n<p>Each color component is a floating point value with a range from 0 to 1.</p>\n<p>You can also use the convenience method <% crosslink Fire.color Fire.color %> to create a new Color.</p></p>\n"
    },
    {
      "name": "EngineWrapper",
      "namespace": "Fire.Runtime.EngineWrapper",
      "module": "Fire.Runtime",
      "description": "<p><p>Access to engine runtime data.\nThis class contains methods for looking up information about and controlling the runtime data.</p>\n<p>You should override:</p>\n<ul>\n<li>initRuntime</li>\n<li>playRuntime</li>\n<li>stopRuntime</li>\n<li>getCurrentSceneNode</li>\n<li>_setCurrentSceneNode</li>\n<li>tick (if useDefaultMainLoop)</li>\n<li>canvasSize</li>\n<li>getInstanceById</li>\n</ul></p>\n"
    },
    {
      "name": "EventTarget",
      "namespace": "Fire.EventTarget",
      "module": "Fire",
      "description": "<p><p>EventTarget is an object to which an event is dispatched when something has occurred.\nEntity are the most common event targets, but other objects can be event targets too.</p>\n<p>Event targets are an important part of the Fireball event model.\nThe event target serves as the focal point for how events flow through the scene graph.\nWhen an event such as a mouse click or a keypress occurs, Fireball dispatches an event object\ninto the event flow from the root of the hierarchy. The event object then makes its way through\nthe scene graph until it reaches the event target, at which point it begins its return trip through\nthe scene graph. This round-trip journey to the event target is conceptually divided into three phases:</p>\n<ul>\n<li>The capture phase comprises the journey from the root to the last node before the event target's node</li>\n<li>The target phase comprises only the event target node</li>\n<li>The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the tree\nSee also: http://www.w3.org/TR/DOM-Level-3-Events/#event-flow</li>\n</ul>\n<p>Event targets can implement the following methods:</p>\n<ul>\n<li>_getCapturingTargets</li>\n<li>_getBubblingTargets</li>\n</ul></p>\n"
    },
    {
      "name": "FObject",
      "namespace": "Fire.FObject",
      "module": "Fire",
      "description": "<p><p>The base class of most of all the objects in Fireball.</p></p>\n"
    },
    {
      "name": "IpcListener",
      "namespace": "Editor.IpcListener",
      "module": "Editor",
      "description": "<p><p>IpcListener for easily manage ipc events</p></p>\n"
    },
    {
      "name": "LoadManager",
      "namespace": "Fire.LoadManager",
      "module": "Fire",
      "description": "<p>The manager scheduling resources loading</p>\n<ul>\n<li>It will:\n<ul>\n<li>select registered loader</li>\n<li>merge same url request</li>\n<li>limit the max concurrent request</li>\n</ul>\n</li>\n<li>It will NOT:\n<ul>\n<li>cache what has being loaded</li>\n<li>load depends of resource</li>\n</ul>\n</li>\n</ul>\n"
    },
    {
      "name": "Matrix23",
      "namespace": "Fire.Matrix23",
      "module": "Fire",
      "description": "<p><p>Simple matrix to do 2D affine transformations.\nIt is actually 3x3 but the last row is [0 0 1].</p></p>\n"
    },
    {
      "name": "Menu",
      "namespace": "Editor.Menu",
      "module": "Editor",
      "description": ""
    },
    {
      "name": "NodeWrapper",
      "namespace": "Fire.Runtime.NodeWrapper",
      "module": "Fire.Runtime",
      "description": "<p>&lt;p&gt;&lt;p&gt;&lt;p&gt;这个类用来封装编辑器针对节点的操作。\nNote: 接口中包含 &quot;Node&quot; 的使用的都是 Runtime 的原生 Node 类型。&lt;/p&gt;\n&lt;p&gt;You should override:&lt;/p&gt;\n&lt;ul&gt;\n&lt;li&gt;createEmpty (static)&lt;/li&gt;\n&lt;li&gt;name&lt;/li&gt;\n&lt;li&gt;parentNode&lt;/li&gt;\n&lt;li&gt;childNodes&lt;/li&gt;\n&lt;li&gt;position&lt;/li&gt;\n&lt;li&gt;worldPosition&lt;/li&gt;\n&lt;li&gt;rotation&lt;/li&gt;\n&lt;li&gt;worldRotation&lt;/li&gt;\n&lt;li&gt;scale&lt;/li&gt;\n&lt;li&gt;worldScale&lt;/li&gt;\n&lt;li&gt;getWorldBounds&lt;/li&gt;\n&lt;li&gt;getWorldOrientedBounds&lt;/li&gt;\n&lt;li&gt;onBeforeSerialize (so that the node's properties can be serialized in wrapper)&lt;/li&gt;\n&lt;li&gt;createNode&lt;/li&gt;\n&lt;/ul&gt;\n&lt;p&gt;You may want to override:&lt;/p&gt;\n&lt;ul&gt;\n&lt;li&gt;setSiblingIndex&lt;/li&gt;\n&lt;li&gt;getSiblingIndex&lt;/li&gt;\n&lt;li&gt;x&lt;/li&gt;\n&lt;li&gt;y&lt;/li&gt;\n&lt;li&gt;worldX&lt;/li&gt;\n&lt;li&gt;worldY&lt;/li&gt;\n&lt;li&gt;scaleX&lt;/li&gt;\n&lt;li&gt;scaleY&lt;/li&gt;\n&lt;/ul&gt;&lt;/p&gt;&lt;/p&gt;</p>\n"
    },
    {
      "name": "Path",
      "namespace": "Fire.Path",
      "module": "Fire",
      "description": "<p>The utils for path operation</p>\n"
    },
    {
      "name": "Playable",
      "namespace": "Fire.Playable",
      "module": "Fire",
      "description": ""
    },
    {
      "name": "Rect",
      "namespace": "Fire.Rect",
      "module": "Fire",
      "description": "<p><p>A 2D rectangle defined by x, y position and width, height.</p>\n<p>see {% crosslink Fire.rect Fire.rect %}</p></p>\n"
    },
    {
      "name": "SceneWrapper",
      "namespace": "Fire.Runtime.SceneWrapper",
      "module": "Fire.Runtime",
      "description": "<p><p>You should override:</p>\n<ul>\n<li>childNodes</li>\n<li>createNode</li>\n<li>position</li>\n<li>scale</li>\n</ul>\n<p>You may want to override:</p>\n<ul>\n<li>onBeforeSerialize (so that the scene's properties can be serialized in wrapper)</li>\n<li>preloadAssets (so that scene can load synchronously)</li>\n</ul></p>\n"
    },
    {
      "name": "String",
      "namespace": "Fire.JS.String",
      "module": "Fire.JS",
      "description": ""
    },
    {
      "name": "Time",
      "namespace": "Fire.Time",
      "module": "Fire",
      "description": "<p>The interface to get time information from Fireball.</p>\n<p>See <a href=\"/en/scripting/time/\">Time</a></p>\n"
    },
    {
      "name": "ValueType",
      "namespace": "Fire.ValueType",
      "module": "Fire",
      "description": "<p>&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;&lt;p&gt;The base class of all value types.&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;&lt;/p&gt;</p>\n"
    },
    {
      "name": "Vec2",
      "namespace": "Fire.Vec2",
      "module": "Fire",
      "description": "<p><p>Representation of 2D vectors and points.</p>\n<p>see {% crosslink Fire.v2 Fire.v2 %}</p></p>\n"
    },
    {
      "name": "Window",
      "namespace": "Editor.Window",
      "module": "Editor",
      "description": "<p><p>Window class for operating editor window</p></p>\n"
    },
    {
      "name": "_CallbacksHandler",
      "namespace": "Fire._CallbacksHandler",
      "module": "Fire",
      "description": "<p><p>The CallbacksHandler is an abstract class that can register and unregister callbacks by key.\nSubclasses should implement their own methods about how to invoke the callbacks.</p></p>\n",
      "access": "private"
    },
    {
      "name": "_DeserializeInfo",
      "namespace": "Fire._DeserializeInfo",
      "module": "Fire",
      "description": ""
    },
    {
      "name": "_ObjectFlags",
      "namespace": "Fire._ObjectFlags",
      "module": "Fire",
      "description": "<p>Bit mask that controls object states.</p>\n",
      "access": "private"
    }
  ],
  "modules": [
    {
      "name": "Editor",
      "namespace": "Editor",
      "description": "<p>Global object with classes, properties and methods you can access in fireball editor.</p>\n"
    },
    {
      "name": "Editor.Debugger",
      "namespace": "Editor.Debugger",
      "description": "<p>The <code>core-level</code> debugger utils, when you turn on the debugger,\nit actually run a <a href=\"https://github.com/node-inspector/node-inspector\">node-inspector</a>\nprocess in the low-level, and you can use your chrome browser debug the core module.</p>\n"
    },
    {
      "name": "Editor.JS",
      "namespace": "Editor.JS",
      "description": "<p>Extending JavaScript to better handle property and class inheritance</p>\n"
    },
    {
      "name": "Editor.MainMenu",
      "namespace": "Editor.MainMenu",
      "description": "<p>The main menu module for manipulating main menu items</p>\n"
    },
    {
      "name": "Editor.Package",
      "namespace": "Editor.Package",
      "description": "<p>Package module for manipulating packages</p>\n"
    },
    {
      "name": "Editor.Panel",
      "namespace": "Editor.Panel",
      "description": "<p>Panel module for operating specific panel</p>\n"
    },
    {
      "name": "Editor.Selection",
      "namespace": "Editor.Selection",
      "description": "<p>Selection module</p>\n"
    },
    {
      "name": "Editor.Utils",
      "namespace": "Editor.Utils",
      "description": ""
    },
    {
      "name": "Fire",
      "namespace": "Fire",
      "description": "<p>Global object with runtime classes, properties and methods you can access from anywhere.</p>\n<p>Submodules:</p>\n<ul>\n<li><a href=\"./Fire.JS.html\">JS</a></li>\n<li><a href=\"./Fire.Runtime.html\">Runtime</a></li>\n</ul>\n"
    },
    {
      "name": "Fire.JS",
      "namespace": "Fire.JS",
      "description": "<p>This module provides some JavaScript utilities.</p>\n"
    },
    {
      "name": "Fire.Runtime",
      "namespace": "Fire.Runtime",
      "description": "<p>This module provides interfaces for runtime implementation.</p>\n"
    },
    {
      "name": "Math",
      "namespace": "Math",
      "description": "<p>!#en\nExtends the JavaScript built-in object that has properties and methods for mathematical constants and functions.\nSee <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math\">Global_Objects/Math on MDN</a>\n!#zh 扩展 JavaScript 内建的数学计算属性和方法。\n请参考<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math\">MDN上的Global_Objects/Math</a></p>\n"
    }
  ]
}