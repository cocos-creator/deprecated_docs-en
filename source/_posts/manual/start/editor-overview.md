title: Meet Editor
categories: manual
permalinks: manual/start/editor-overview
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

# Assets面板
![assets-panel](/manual/start/editor-overview/assets-panel.png)

**Asset（资源）** 是游戏中一切展现元素和逻辑控制的组成基础，这些**Asset**属于整个游戏项目，为所有游戏场景共有。只有拥有对应的**Asset**，场景中的**Entity**才能够发挥各自的作用，例如展示相应的图形、调用脚本进行逻辑控制等。Fireball引擎中，**Asset** 可以是以下类型：

* Texture（纹理）
* Normal Map（法向贴图）
* Sprite（精灵）
* Sprite Animation（精灵动画）
* 音乐音效
* 游戏字体
* Fire-shell脚本
* Atlas图集
* 场景

Fireball Engine中，为不同类型的**Asset**提供了不同的控制行为，使其可以匹配不同类型的**Component**。更多详细信息请参见Fireball Engine的API开发文档。

## Asset列表

游戏项目中的**Asset**按照目录关系进行组织，以*Assets*文件夹为根目录，因此Fireball Editor只会加载*Assets*目录下的**Assets**。
对于一个完整的游戏来说，其项目中可能包含大量**Asset**，因此我们强烈建议按照**Asset**的类别组织目录以方便查找，例如所有脚本**Asset**均放置于*script*目录下，界面相关的**Asset**放置于*ui*目录下，以此类推。
选中列表中的**Asset**后，会在**Inspector面板**中显示所选**Asset**的属性。您可以使用 <kbd>Shift</kbd> 键和 <kbd>Ctrl</kbd> 键来进行连续多选和不连续多选。
在列表中拖动**Asset**可以改变所选**Asset**所属的目录，以便对其进行更好的归纳组织。
如需将**Asset**放入当前场景，可将其拖拽到**Hierarchy面板**中，该**Asset**将自动被转换为**Entity**放入场景。
> 此处有一项特例：场景**Asset**不能通过拖拽放入**Hierarchy**面板中，因为一个场景不能够包含另一个场景。您可以通过双击场景**Asset**来打开所选场景。

在Asset列表中点击鼠标右键可以打开右键菜单，其中：
* **Create**
  - **New Folder**: 在当前选中的文件夹下创建新的子文件夹。
  - **New Script**: 创建新的Fire-shell脚本。新创建的脚本会提供基础的编辑模版，详情请查阅API开发文档。
  - **New Scene**: 创建新的场景。
  - **New Atlas**: 创建新的Atlas图集。
  - **New Sprite(Standalone)**: 创建静态Sprite（精灵）对象。必须选中一项静态图片作为材质才能创建。
  - **New Sprite Animation**: *施工中*
* **Rename**: 重命名选中的**Asset**
* **Delete**: 删除选中的**Asset**。您也可以使用 <kbd>Delete</kbd> 键删除。
* **Reimport**: 重新加载Asset列表中的所有**Asset**。
* **Show in Explorer**: 打开文件管理器，并定位到选中的**Asset**文件。
* **Show in Library**: 打开文件管理器，并定位到*Library*目录下选中**Asset**的元数据文件。
* **Show Uuid**: 在**Console面板**中显示选中**Asset**的唯一标识Uuid。

## 新增**Asset**
单击左上角的![add-button](/manual/start/editor-overview/add-button.png)按钮将弹出**Asset**的创建菜单，其中：
* **New Folder**: 在当前选中的文件夹下创建新的子文件夹。
* **New Script**: 创建新的Fire-*hell脚本。新创建的脚本会提供基础的编辑模版，详情请查阅API开发文档。
* **New Scene**: 创建新的场景。
* **New Atlas**: 创建新的Atlas图集。
* **New Sprite(Standalone)**: 创建静态Sprite（精灵）对象。必须选中一项静态图片作为材质才能创建。
除了使用新增按钮添加**Asset**外，您也可以直接将欲添加的文件拖拽到**Asset面板**上来将其添加到项目中。

## 搜索**Asset**
搜索框用于快速筛选和定位具有指定关键字的**Asset**。当项目中拥有大量**Asset**时，使用搜索框能够有效提高您的工作效率。

# Inspector面板
**Inspector面板**使您可以查看并编辑当前选中项目的属性。
无论您选中的是场景中的**Entity**，还是资源库中的**Asset**，**Inspector面板** 都会立即显示其可以编辑的关联属性和数值，而在**Inspector面板** 中做出的修改也将实时应用到所选项目上，而无须重新编译游戏。

## **Entity** 属性编辑

![inspector-entity](/manual/start/editor-overview/inspector-entity.png)
* 启用/禁用复选框
  通过勾选/清空该复选框，可以启用或禁用当前编辑的**Entity**。禁用的**Entity**将不会在游戏场景中显示。
* 名称文本框
  修改当前选中的**Entity**的名称，以便更易查找和识别场景中的**Entity**。不同的**Entity**可以重名，但是我们建议您遵循统一的命名规范来为游戏项目中的**Entity**命名，以降低项目的开发难度和维护难度。您也可以通过**Hierarchy面板**来为**Entity**命名。
* 新增**Component**按钮
  您可以为**Entity**添加**Component（组件)**以使其具备相应的行为和功能。
  单击右上角的![add-button](/manual/start/editor-overview/add-button.png)按钮将弹出**Component**新增菜单，包括：
  - **Scripts**: 将Fire-shell脚本绑定到该**Entity**上以控制其行为。Fireball Editor将自动搜索Asset库中所有的脚本，并以子菜单的形式列举出来以便快速选择。
  - **SpriteRenderer**: 新增Sprite精灵渲染组件，使该**Entity**能够将指定的Sprite精灵**Asset**渲染到场景中。
  - **BitmapText**: 使用位图字体在场景中显示文本。
  - **Text**: 使用系统字体在场景中显示文本。
  - **Camera**: 新增游戏摄影机，用于控制游戏的视角。
  - **AudioSource**: 新增音频播放源，用于在游戏场景中播放音乐或音效。
  - **Sprite Animation**: 新增Sprite精灵动画控制器。*施工中*
* **Component**列表
  这里是**Inspector面板**的主要工作区域，其中包括了该**Entity**所拥有的所有**Component**及**Component**的可编辑属性。通常情况下，**Entity**的**Component**根据被添加的顺序进行排列，但是`Fire.Transform`会始终显示在第一个，因为它是**Entity**的基本组件。点击**Component**名称左侧的箭头图标可以展开或折叠该**Component**的详细信息以节省空间。点击名称右侧的“X”图标将从**Entity**中删除该**Component**。
  关于每种**Component**属性的详细说明，请参阅相应**Component**的说明文档。

## **Asset** 属性编辑

![inspector-asset](/manual/start/editor-overview/inspector-asset.png)

相比**Entity**的属性编辑面板，**Asset**的属性编辑面板要简洁很多。这是因为**Asset**并不作为游戏场景直接使用的对象，无需进行与场景相关的详细参数设置，而且它们大多数都是从外部被导入的，通常情况下需要使用相应的外部工具进行编辑（如图像处理软件）。

总的来说，**Asset**属性编辑面板中的参数由两种类别组成，但部分种类的**Asset**可能只拥有其中一种类别的属性可供编辑：
* **Meta**
  **Asset**在Fireball Editor中的元数据，主要包含了被编辑的**Asset**在引擎中的行为或表现方式。例如，对于导入的图片文件，可以设置其**Asset**类型为Sprite精灵、纹理或法向贴图。
* **Asset**
  被编辑**Asset**的原始资源属性，例如图片的尺寸、音频的采样率等。这些属性通常情况下不能在Fireball Editor中进行编辑，只能作为查阅之用。

**Asset**属性编辑面板还提供了**Asset**的预览窗口，以供开发者对所编辑的**Asset**进行确认。对于不同种类的**Asset**：
* 如果是图形文件，预览窗口将在窗口尺寸的限制内显示该图片，并在窗口底部注明图片的原始尺寸。
* 如果是音频文件，预览窗口将提供音频的回放控制工具栏，使您可以播放和停止播放该音频文件，并且可以控制是否循环播放。同时，预览窗口中将显示该音频文件的一些基本信息（声道、采样率、音频格式等）以及回放的时间信息。

在**Inspector面板**中修改**Asset**的属性后，需要单击面板右上角的![inspector-apply](/manual/start/editor-overview/inspector-apply.png)以将更改应用到所有关联的**Entity**上，或单击![inspector-revert](/manual/start/editor-overview/inspector-revert.png)撤销修改。

# Scene面板
![scene-panel](/manual/start/editor-overview/scene-panel.png)
**Scene面板**用于对当前的游戏场景进行编辑，可以说是游戏制作中最直观、最主要的编辑面板。
**Scene面板**通常被用于设计和构建游戏关卡的地图，例如对关卡背景、地图地面、障碍物、可视元素等进行设置。得益于**Scene面板**的可视化特性，它也被用于设计UI（用户交互界面）布局等一切希望所见即所得的游戏元素。
**需要注意的是，场景中必须有一个摄影机（Camera)用于提供视角，否则在游戏中将看不到任何画面。**不过通常情况下您并不需要担心这一点，因为在创建每个场景时，Fireball Editor都提供了一个默认的摄影机。

**Scene面板**的使用十分简单。您只需要在其中单击选中或框选所需编辑的**Entity**，然后使用工具栏上相应的变换工具对其进行位置、旋转或缩放的更改便可即时看到变化结果。当某个或多个**Entity**被选中时，在**Hierarchy面板**中会对选中项进行高亮显示，同时**Scene面板**中也会显示控制柄（控制柄的显示位置取决于您的**控制柄位置设置**，详情请参见[工具栏](#toolbar)的使用说明）。

当游戏场景过大时，您可以使用鼠标滚轮来缩放场景的显示范围。

通过面板右上角的搜索框，您可以通过**Entity**的名称来快速选中场景中对应的项目。

# Game面板
![game-panel](/manual/start/editor-overview/game-panel.png)
**Game面板**是游戏场景的运行窗口。其本身并不提供游戏场景的编辑功能，但是在游戏场景进入运行状态后，它将与最终的游戏运行环境完全一致——这意味着您可以使用**Game面板**查看游戏的最终运行效果，以及进行游戏中的交互操作。

**Game面板**中的游戏视角取决于您对摄影机**Entity**的设置，不过您可以通过面板的工具栏设置不同的画面比例，以模拟游戏在不同平台和屏幕尺寸下的运行效果。大部分画面比例通过其名称就可以知道其含义，而此处将对其中几种特殊的比例和设置进行说明：
* **Free Aspect**: 画面大小根据当前**Game面板**的尺寸进行调整，确保填满面板的显示范围。
* **Custom Size**: 自定义画面尺寸。选中此项后，您可以使用工具栏右侧的数值框对画面尺寸进行精确的自定义设置。尺寸大小的单位为像素。
* **Rotate**: 勾选此项后，游戏画面将进行90°旋转，以模拟横屏效果。

# Console面板
![console-panel](/manual/start/editor-overview/console-panel.png)
**Console面板**主要用于对游戏脚本的运行状态进行监控，以及通过输出的调试信息进行脚本调试。其中的信息可能来自您编写的有脚本，也可能来自Fireball Editor本身。
Fireball Editor通过不同的颜色对不同级别的控制台输出信息进行区分，严重级别从低到高分别为：
* **Log**（灰色）: 通常为仅用于调试的跟踪信息。
* **Info**（蓝色）: 通常用于指明运行状态或进行通知的信息。
* **Warn**（黄色）: 通常用于表明有不正常的运行状态，但尚不会导致程序无法运行。
* **Error**（红色）: 通常用于告知遇到了严重的、影响程序正常运行的错误，如未被捕获的异常等。

当程序的控制台输出很多时，可以通过**Console面板**工具栏中提供的工具进行管理：
* **清空所有信息** ![console-clear](/manual/start/editor-overview/console-clear.png): 清空控制台输出信息列表。
* **筛选框** ![console-filter](/manual/start/editor-overview/console-filter.png): 通过关键字对控制台信息进行筛选。当勾选后面的**Regex**复选框时，筛选文本框中的文本将被认为是正则表达式。
* **级别筛选下拉框** ![console-level](/manual/start/editor-overview/console-level.png): 只显示某一严重级别的控制台输出。当选择**All**时将显示所有级别的控制台输出。
* **Collapse复选框**: 当勾选此复选框时，相同内容的控制台输出信息将被合并，并在被合并的信息前显示一个数字，以指明该信息已被重复显示了多少次。当输出大量重复信息，且信息的输出顺序不重要时，使用折叠功能能够有效节省**Console面板**的使用空间。

# 状态栏
*施工中*

# 工具窗口 <a id="tool-windows"></a>
*施工中*
