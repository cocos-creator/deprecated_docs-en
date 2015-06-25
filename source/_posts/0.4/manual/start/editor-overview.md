title: Meet Editor
permalinks: 0.4/manual/start/editor-overview
---

> This chapter will introduce you all the features of Fireball Editor. It would be a good place for being familiar with Fireball Editor, and getting ready for your future Fireball works.
> Please make sure you have finished reading the following articles before going further:
> - [Get Fireball](/manual/start/get-fireball/)
> - [New Project](/manual/start/new-project/)

# Introduction

You'll have no chance to build an exciting game without understanding what all the editor tools can do for you first, so hold your horse for a while and meet the Fireball Editor along with thrilling features. And, whenever you are in doubt, don't forget this chapter is a good place to look up for as well.


Fireball Editor mainly consists of serveral panels, which are designed for finishing specific tasks, respectively. You can adjust their sizes and positions by your own taste. Beside of these panels, there are other UIs which are essential for building a game, including menu bar, tool bar and tool windows, and you should know about them as well.


Check out the screenshot below - it gives a basic concept of the UI layout (In the default layout, **Game Panel** and **Scene Panel** are overlapped, and you may need to switch between them by clicking the `Scene` tab and `Game` tab). We will discuss every piece of features in the sections below.

![editor-overview-intro](/manual/start/editor-overview/editor-overview-intro.png)

# Menus
##Fireball
* **Hide Fireball (Shortcut: <kbd>H</kbd> )**
*In construction*
* **Hide Others (Shortcut: <kbd>Shift + H</kbd> )**
*In construction*
* **Show All**
*In construction*
* **Quit (Shortcut: <kbd>Ctrl/Command + Q</kbd> )**
Exit Fireball Editor
* **Check For Updates**
Check if there is any new version of Fireball Editor to update.
* **About**
Display about information and copyrights of Fireball Editor.
* **Panels**
*In construction*

##File
* **New Scene (Shortcut: <kbd>Ctrl/Command + N</kbd> )**
Create a new scene in current project.
A game consists of one or more scenes. You'll need to create new scenes when you indend to make indepent modules such as new stages, main menu, loading screen, setting screen, etc.
* **Save Scene (Shortcut: <kbd>Ctrl/Command + S</kbd> )**
Save the current editing scene.
A save file dialog will pop up if the current scene is never saved before, in which you can determine where to save your scene file (*.fire). If the scene has been saved, Fireball Editor will update the save file directly.
> It is suggested to place all scene files in a particular directory for management, for example **assets/scenes**.
* **Build Settings**
Set the project build parameters.
Building is a critical step in the deployment process. Fireball Editor will pack and optimize your game files during building process, in order to make it able to be deployed on various platforms fast, safely and correctly. Through Build Settings, you can fine tuning the parameters for certain needs, as well as to preview your game before deployment.
You will find more information about Build Settings in the [Tool Windows](#tool-windows] section.

##Edit
* **Undo (Shortcut: <kbd>Z</kbd> )**
Undo the last operation.
* **Redo (Shortcut: <kbd>Shift + Z</kbd> )**
Redo the latest undone operation.
* **Cut (Shortcut: <kbd>X</kbd> )**
Cut the selected Entity into the clipboard.
* **Copy (Shortcut: <kbd>C</kbd> )**
Copy the selected Entity into the clipboard.
* **Paste (Shortcut: <kbd>V</kbd> )**
Paste the Entity in the clipboard into the current scene.
* **Select All (Shortcut: <kbd>A</kbd> )**
Select all Entities in the current scene.

##Entity
> In Fireball Engine, a game object is called a **Entity**. **Entity** will appear or behave differently by attaching different resources or components. The presentation, interactions and logic execution of a scene are organized by multiple **Entities**.

* **Create Empty**
Create an empty **Entity** in the scene.
An empty **Entity** solely contains its **Transform information**, i.e. its position, rotation and scale. The default property values are:
  - ***Position*** x=0, y=0
  - ***Rotation*** 0
  - ***Scale*** x=1, y=1
* **Create Empty Child**
Create a **Child Entity** that belongs to the selected **Entity**.
For the situation of no **Entity** is selected, this function will create an empty **Entity** as a root one, which behaves exactly the same as **Create Empty** function.

##View
*In construction*

##Window
* **Close (Shortcut: <kbd>W</kbd> )**
Close the Fireball Editor window.

##Developer
* **Reload (Shortcut: <kbd>Ctrl/Command + R</kbd> )**
Reload the Fireball Editor.
* **Recompile (Shortcut: <kbd>F7</kbd> )**
Recompile all scripts in the current scene.
* **Developer Tools (Shortcut: <kbd>Alt + Ctrl/Command + I</kbd> )**
Open the **Developer Tools** window.
Various useful and powerful features are provided in **Developer Tools** for analyzing, debugging and tracing, which are essential for game script developers. You will find more information about **Developer Tools** in the [Tool Windows](#tool-windows) section.
* **Show Selected Asset in Library**
Open the sub-directory of the Library folder where stores the currently selected asset in system file explorer.
* **Test**
  * **Reload Window Scripts**
*In construction*
  * **Reload Core Plugins**
*In construction*
  * **Thrown an Uncaught Exception**
*In construction*
  * **Ipc send2panel foo:bar@foobar@fire**
*In construction*
  * **AssetDB Debugger**
Open the **AssetDB Debugger**, which is for tracking asset modifications and correspondings during debugging. You will find more information about **AssetDB Debugger** in the [Tool Windows](#tool-windows) section.

##Help
* **Website**
Visit the official website of Fireball Engine for more information.
* **Documentation**
Visit the documentation site of Fireball Engine for engine manuals and scripting API references.
* **Forum**
Visit the forum of Fireball Engine to share ideas with other users and developers.
* **Submit An Issue On Github**
Commit an issue in the Fireball Engine Github repository. You can always let us know by committing issues if you encounter bugs or have better ideas about Fireball Engine. Our team will be cheerful and reply you as soon as possible.
* **Subscribe To Newsletter**
Subscribe to Fireball Engine news letters for latest news and updates.

# Toolbar<a id="toolbar"></a>
## Move Tool ![tool-move](/manual/start/editor-overview/tool-move.png)
Move the selected **Entity** by handlers. The handlers will look like below when using the Move Tool:
![preview-move](/manual/start/editor-overview/preview-move.png)
* Dragging the green arrow will move the **Entity** along the coordinates' Y-axis.
* Dragging the red arrow will move the **Entity** along the coordinates' X-axis.
* Dragging the blue rectangle in the centre will move the **Entity** along both of the coordinates' X and Y axes.

## Rotate Tool ![tool-rotate](/manual/start/editor-overview/tool-rotate.png)
Rotate the selected **Entity** by hander. The handler will look like below when using the Rotate Tool:
![preview-rotate](/manual/start/editor-overview/preview-rotate.png)
* Dragging the red handler or any point inside the circle will rotate the **Entity** clockwise or counter-clockwise, depending on the direction of dragging.
* The angel of rotation will be shown during your rotation.

## Scale Tool ![tool-scale](/manual/start/editor-overview/tool-scale.png)
Scale the selected **Entity** by handlers. The handlers will look like below when using the Scale Tool:
![preview-scale](/manual/start/editor-overview/preview-scale.png)
* Dragging the green handler will scale the **Entity** along the coordinates' Y-axis.
* Dragging the red handler will scale the **Entity** along the coordinates' X-axis.
* Dragging the grey rectangle in the centre will scale the **Entity** along both of the coordinates' X and Y axes.

## Use self coordinates ![tool-self-coordinate](/manual/start/editor-overview/tool-self-coordinate.png)
The handlers aligns with **Entity**'s self coordinates, and will rotate as **Entity** rotates.
The handlers will behave as below when using self coordinates.
![preview-self-coordinate](/manual/start/editor-overview/preview-self-coordinate.png)
## Use world coordinates ![tool-world-coordinate](/manual/start/editor-overview/tool-world-coordinate.png)
The handers aligns with the world coordinates, pointing to the world's X and Y axes.
The handlers will behave as below when using world coordinates.
![preview-world-coordinate](/manual/start/editor-overview/preview-world-coordinate.png)
## Place on Pivot ![tool-pivot](/manual/start/editor-overview/tool-pivot.png)
The handlers are placed on pivot of the selected **Entity**. Moving, rotating and scaling use the pivot as centre.
When multiple **Entities** are selected, the handlers will use the first selected one's pivot. An example is shown below (**Entities** are selected from left to right):
![preview-pivot](/manual/start/editor-overview/preview-pivot.png)
## Place on Centre ![tool-centre](/manual/start/editor-overview/tool-centre.png)
The handlers are placed on the centre of the selected **Entities**. Moving, rotating and scaling are based on the centre point.
When multiple **Entities** are selected, the handlers will be placed on the centre of the entire selection area, shown as below:
![preview-centre](/manual/start/editor-overview/preview-centre.png)
## Play ![tool-play](/manual/start/editor-overview/tool-play.png)
Compile and run the current scene. The interaction of **Game Panel** will be activated in the meantime.
## Pause ![tool-pause](/manual/start/editor-overview/tool-pause.png)
Pause the current running game.
By pausing the current game will make it possible to check game data and object states of a certain moment.
## Stepping ![tool-step](/manual/start/editor-overview/tool-step.png)
Run the game to the next frame and the pause.
By stepping, you can tracking the changes of game data and object states in every frame. This function is often used for dynamic debugging in a certain time range.
## Shortcut Mapping ![tool-hotkeys](/manual/start/editor-overview/tool-hotkeys.png)
Clicking this button will pop up the shortcut mapping table for quick reference.
## User Profile ![tool-user](/manual/start/editor-overview/tool-user.png)
*In construction*

# Hierarchy Panel
![hierarchy-panel](/manual/start/editor-overview/hierarchy-panel.png)
**Hierarchy Panel** is for managing all **Entities** (game objects) in the scene. **Entities** are organized hierarchically in the **Hierarchy Panel** to indicate the parent-child relationship between **Entities**. Child **Entities** will inherit some properties of their parents. For instance, when moving, rotating or scaling parent **Entities**, their children will transform with them.

## Entity List

**Entities** in a scene will be present in terms of their relationship.  Those that owns children will show a little arrow ![collapse-arrow](/manual/start/editor-overview/collapse-arrow.png) in front of their names. Parent **Entities** will be expanded or collapsed by clicking the arrow.

Properties of selected **Entities** will be shown in the **Inspector Panel**, while the handlers of the **Entities** will appear in the **Scene Panel** in the meantime. You can select multiple **Entities** in the list by pressing <kbd>Shift</kbd> key or <kbd>Ctrl</kbd> key, continuously or not.

You can also change the relationship by dragging **Entities** in the list. Say, dragging **Entity** A onto **Entity** B will make A become B's child.

Click right mouse button in the list will pop up a context menu, whose features includes:
* **Duplicate**: Make a copy of selected **Entity** and add it to the end of the list. It is the easiest way to create multiple **Entities** with same or similar properties.
* **Rename**: Rename the selected **Entity**. You can do so in the **Inspector Panel** as well.
* **Delete**: Delete the selected **Entity**. You can do so by pressing <kbd>Delete</kbd> key as well.
* **Create Empty**: Create an empty **Entity** in the scene.
An empty **Entity** solely contains its **Transform information**, i.e. its position, rotation and scale. The default property values are:
  - ***Position*** x=0, y=0
  - ***Rotation*** 0
  - ***Scale*** x=1, y=1
* **Create Empty Child**
Create a **Child Entity** that belongs to the selected **Entity**.
For the situation of no **Entity** is selected, this function will create an empty **Entity** as a root one, which behaves exactly the same as **Create Empty** function.

## Add **Entity**
Click the ![add-button](/manual/start/editor-overview/add-button.png) in the upper-left corner in the panel will show you the **Entity** creation menu, whose features includes:
* **Create Empty**: Create an empty **Entity** in the scene.
An empty **Entity** solely contains its **Transform information**, i.e. its position, rotation and scale. The default property values are:
  - ***Position*** x=0, y=0
  - ***Rotation*** 0
  - ***Scale*** x=1, y=1
* **Create Empty Child**
Create a **Child Entity** that belongs to the selected **Entity**.
For the situation of no **Entity** is selected, this function will create an empty **Entity** as a root one, which behaves exactly the same as **Create Empty** function.

## Search **Entity**
The search box is designed for filtering and locating **Entities** with specific keywords quickly. When there are numerous **Entities** in the scene, or the relationship between them are quite complicating, the search box will improve your efficiency in a great deal.

# Assets Panel  
![assets-panel](/manual/start/editor-overview/assets-panel.png)

**Assets**, belonging to the entire project, are basic elements for visual presents and logic controls of a game, and are shared among all scenes. **Entities** become useful, such as drawing graphics and executing scripts, only if there are corresponding **Assets**. In Fireball Engine, **Assets** can be of following types:

* Textures
* Normal Maps
* Sprites
* Sprite Animations
* Music and sound effects
* Fonts
* Fire-shell scripts
* Atlases
* Scenes

There are different behaviours for different **Assets** that varies among **Components**. For more information please refer to Fireball Engine API documentaion.

## Asset List

**Assets** of a project are organized by folders. The *Assets* folder is used as root, which means that Fire Editor will load the **Assets** placed in *Assets* folder and its sub folders. There can be numerous **Assets** for a complete game, so it is suggested to organize **Assets** by sub folders for your own convenience. For instance, all scripts should be in the *script* folder, while UI related **Assets** be in the *ui* folder, etc.

Once an **Asset** is selected in the list, its property will be shown in the **Inspector Panel**. You can do multiple selection by <kbd>Shift</kbd> key or <kbd>Ctrl</kbd> key.

You can set the which folder it belongs to by dragging an **Asset** for better structure.

If you want to put an **Asset** into the current scene, simply drag it into the **Hierarchy** panel. The **Asset** will be converted to **Entity** automatically and be placed into the scene.
> Here is an exception: scenes cannot be dragged into **Hierarchy Panel**, for them cannot be contained by another scene. You can open the scene **Assets** by double-clicking them.

Click right mouse button in the list will pop up a context menu, whose features includes:
* **Create**
  - **New Folder**: Create a new sub folder in the selected folder.
  - **New Script**: Create a new fire-shell script. A basic template will be provided in a new script. Details can be found in API documentation.
  - **New Scene**: Create a new scene.
  - **New Atlas**: Create a new atlas (image pack).
  - **New Sprite(Standalone)**: Create a static sprite object. An image as texture must be selected first.
  - **New Sprite Animation**: *In construction*
* **Rename**: Rename the selected **Asset**.
* **Delete**: Delete the selected **Asset**. You can do so with <kbd>Delete</kbd> key as well.
* **Reimport**: Reimport all **Assets** in the Asset List.
* **Show in Explorer**: Open the system file explorer and locate to the **Asset** file.
* **Show in Library**: Open the system file explorer and locate to the meta file of the selected **Asset** in the *Library* folder.
* **Show Uuid**: Print the UUID of the selected **Asset** in the **Console Panel**.

## Add **Assets**
Click the ![add-button](/manual/start/editor-overview/add-button.png) button in the upper-left corner will pop up the **Asset** adding menu, whose features include:

  - **New Folder**: Create a new sub folder in the selected folder.
  - **New Script**: Create a new fire-shell script. A basic template will be provided in a new script. Details can be found in API documentation.
  - **New Scene**: Create a new scene.
  - **New Atlas**: Create a new atlas (image pack).
  - **New Sprite(Standalone)**: Create a static sprite object. An image as texture must be selected first.
You can also add new files to the **Asset Panel** by drag and drop.

## Search **Assets**
The search box is designed for filtering and locating **Assets** with specific keywords quickly. When there are numerous **Assets** in the scene, or the relationship between them are quite complicating, the search box will improve your efficiency in a great deal.

# Inspector Panel
The **Inspector Panel** allows you to inspect and edit properties of selected items.
The **Inspector Panel** will show editable properties and their values as soon as you select an **Asset** as well as an **Entity**. All modifications made in inspector will be applied onto selected item without recompiling.

## **Entity** Property Editing

![inspector-entity](/manual/start/editor-overview/inspector-entity.png)
* Enable/Disable checkbox
  You can enable or disable the selected **Entity** by ticking or unticking the checkbox. Disabled **Entities** will not be shown in the scene.
* Name textbox
  Change the name of the selected **Entity** for better identification. Different **Entities** can have a same name, however, we suggest you to name your **Entities** following certain rules, in order to reduce the difficulty of development and maintenance. You can rename **Entities** in the **Hierarchy Panel** as well.
* New **Component** Button
  You can add **Components** for **Entities** to make them acquire certain functions and behaviours.
  Click the ![add-button](/manual/start/editor-overview/add-button.png) button in the upper-right corner will pop up the **Component** adding menu, whose features include:
  - **Scripts**: Bind a Fire-shell script to the **Entity** for behaviour controlling. Fireball will search all scripts in the asset library, and list them in the sub-menu for quick selection.
  - **SpriteRenderer**: Add a sprite renderer component to make the **Entity** render specified sprite **Asset** in the scene.
  - **BitmapText**: Draw texts with bitmap font in the scene.
  - **Text**: Draw texts with system fonts in the scene.
  - **Camera**: Add a camera to control the game view.
  - **AudioSource**: Add a audio source for playing music or sound effects.
  - **Sprite Animation**: Add a sprite animation controller. *施工中*
* **Component** List
  This is the main working area of the **Inspector Panel**, including all **Components** of the selected **Entity** and all their editable properties. Typically, **Components** of an **Entity** will be listed in the sequence as added, but `Fire.Transform` will be the first one constantly, as it is the basic component. Click the arrow icon on the left of **Component** name will expand or collapse its details, which can save you some space. Click the X button will delete the **Component** from the **Entity**.
  For details of **Component** properties, please refer to **Component** documentation.

## **Asset** Property Editing

![inspector-asset](/manual/start/editor-overview/inspector-asset.png)

Comparing with **Entity** property panel, the one of **Assets** are much simpler, for the reason that **Assets** are not used directly in game scenes, which makes them unnecessary to be edited in detail in the editor - they are always fine tuned in particular external tools (such as image processing softwares).

Generally, parameters in **Asset** property panel consist of two major types (some kinds of **Assets** probably have only one type of parameters for editing):
* **Meta**
  Meta data of **Assets** in Fireball Editor, including their behaviour or presenting methods in the engine. For instance, you can set the **Asset** type as sprite, texture or normal map for imported images.
* **Asset**
  The raw properties of the **Asset**, such as the image size, the audio sampling rate, etc. These properties usually cannot be changed in Fireball Editor but for reference.

**Asset** property panel provides preview window as well, for ensuring the editing and modifications. For different types of **Assets**:
* If it's an image, preview window will show the image within the constraint of the window size, and note its original size in the bottom.
* If it's an audio, preview window will show a playback tool bar for playing, stopping and looping the audio. Some basic information will be shown in the preview window meanwhile, including channels, sampling rate, format and playback time.

的You will need to click the ![inspector-apply](/manual/start/editor-overview/inspector-apply.png) button in the upper-right corner of the **Inspector Panel** once making changes to an **Asset**, for applying your modifications to relevant **Entities**. Or you can click ![inspector-revert](/manual/start/editor-overview/inspector-revert.png) button to discard the changes you made.

# Scene Panel
![scene-panel](/manual/start/editor-overview/scene-panel.png)
The **Scene Panel** is designed to editor the current game scene. It is the most 'frank' panel and most frequently used one in game making process, if you ask me.

The **Scene Panel** are usually used for stage designing and building, such as setting up background, floor, obstacles and other visual elements. Thanks to its visual feature, it can also be used for UI layout and any WYSIWYG elements.

**It is notable that every scene must have at least one camera for game view, or no picture will be shown when game runs.** However, it is a relief that you don't need to worry about it. Fireball Editor has created a default camera for you when a scene is created.

The **Scene Panel** is very easy to master. All you need is to click or drag a selection box to selected the **Entities** you want to edit, transform them will the tools in tool bar, and check the results. When multiple **Entities** are selected, the items will be highlighten in the **Hierarchy Panel**, and handlers will be shown in the **Scene Panel** (but their positions depends on your **handler position setting**, referring to the [Toolbar](#toolbar) manual).

When the scene is large, you can use your mouse scroller for zooming.

Also, you can quick select **Entities** by putting keywords in the search box in the upper-right corner.

# Game Panel
![game-panel](/manual/start/editor-overview/game-panel.png)
The ** Game Panel** is where the game runs. It has no editing functions itself, but while game running, it will simulate the user-end environment, which allows you to ensure what the game looks like in users' eyes, and to check the in-game interactions.

Game view in the **Game Panel** depends on your settings of the camera **Entity**. The good news is, you can set screen ratio in the **Game Panel** to simulate different platforms and screens. Most aspect ratios are self-explained by their names, however there are some special ones:
* **Free Aspect**: Fit the display area with the **Game Panel** size, using the entire available space.
* **Custom Size**: Customize the size of the display area. By selecting this, you can set width and height accurantly in the value boxes to the right, with the unit of pixels.
* **Rotate**: By ticking this option, the game display will rotate by 90 degrees, for landscape simulation.

# Console Panel
![console-panel](/manual/start/editor-overview/console-panel.png)
The **Console Panel** is for monitoring game script running status and console output, in purpose of debugging. Information printed here can be from your scripts, or Fireball Editor itself.

Fireball Editor distinguishes different levels of information by colors. The severities are ordered from the lowest to the highest as:
* **Log** (grey): information usually for tracking or debugging.
* **Info**（blue）: information usually for notification or notes.
* **Warn**（yellow）: information usually for indicating that there is an abnormal situation, but won't crash the game.
* **Error**（red）: information for fatal errors which will crash the game, such as uncaught exceptions.

You can manage information in the **Console Panel** when there is too many:
* **Clear** ![console-clear](/manual/start/editor-overview/console-clear.png): Clear all console outputs.
* **Filter box** ![console-filter](/manual/start/editor-overview/console-filter.png):
Filter console information by keywords. When **Regex** checkbox is ticked, content in the filter box is considered as a regular expression.
* **Level filter combobox** ![console-level](/manual/start/editor-overview/console-level.png):
Display information of only one severity level. All levels will be shown when **All** is selected.
* **Collapse checkbox**: Ticking this checkbox will merge same outputs, with a leading number that tells how many times it has been repeated. This feature is rather useful and space economic when there are many outputs and their sequence don't matter.

# Status Bar
*In construction*

# Tool Windows <a id="tool-windows"></a>
*In construction*
