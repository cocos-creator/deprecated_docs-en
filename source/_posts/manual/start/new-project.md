title: New project
categories: manual
permalinks: manual/start/new-project
---

> By reading this article you will learn about:
- How to use Fireball Dashboard to create a new project or to open a existing project.
- How files are organized in a Fireball project.

##Managing your projects with Dashboard
After starting up Fireball Engine, a dashboard like this will be shown:
![new-project-01](https://cloud.githubusercontent.com/assets/2867434/6851104/f49912b0-d417-11e4-8338-9b72b18df4a7.png)

###Recent Projects
You can quickly access recently opened projects via **Rencent Projects**.
By hovering your mouse on a recent project entry, action buttons will be displayed on the bottom-right corner of the entry. You can:
- Click `Open` to reopen the selected project, or
- Click `Close` to remove the selected entry from the recent project list. The actual project folder will not be deleted from your disk.
![new-project-02](https://cloud.githubusercontent.com/assets/2867434/6866397/b26ccc38-d4b2-11e4-89b0-91bc1d3f6d09.png)

###New Project
You can create a new Fireball project via **New Project**
Click `New Project` will bring out the UI for setting up the new project properties.
![new-project-02](https://cloud.githubusercontent.com/assets/2867434/6851105/f5123dd4-d417-11e4-9399-3ea81c0fd3b0.png)

The following settings have to be properly set:
- **Name**
  The name of your new project
- **Path**
  The **parent directory** of your new project folder. Fireball will create a new folder as its child, named by the `Name` property you set, for managing project files.
- **Templates**
  The framework template of your new project.
  Please select a template fitting you desired game type (2D/3D). Fireball will take care of loading and referencing all necessary libraries.
  *Note: Fireball Engine currently supports creating 2D game only. Supporting for building 3D game will be available in future versions.*
- **Game Kits**
  Creating your new project with a specific Game Kit.
  By using Game Kit, it will be nice and easy to create a game of desired genre (RPG, ACT, STG). Game Kits contain a bunch of basic logical frameworks and resources that are designed for specific genres, so you don't need to get yourself in trouble of most low-level works. Game Kits make it possible to build and release your game in lightspeed.
  *Note: This feature is not currently available. Game Kits will be provided in future releases.*


项目属性设置完成后，单击`Create`按钮创建项目，Fireball将关闭Dashboard并将新建项目加载到Fireball Editor中。
关于Fireball Editor的更多信息请参见本文末尾的相关条目。

###Open Other...
若Recent Projects中没有您想要访问的项目，您可以使用**Open Other...**来手动打开Fireball项目。
单击`Open Other...`，并在弹出的文件对话框中选择项目位置。由于Fireball项目是以**文件夹**进行组织的，因此您需要定位到**项目文件夹**而非特定的项目文件。

###Help
使用**Help**访问Fireball的使用帮助。

##项目文件结构
Fireball项目的文件结构如下：
```
ProjectName
├──assets
├──library
├──local
├──settings
└──temp
```
- 项目参与者公用目录
  - **assets**
    项目资源文件，包括实际用于构建项目的所有元素，例如：
    - 场景
    - 脚本
    - Sprite
    - 贴图
    - 音频
    ...
    简单来说，该目录对应[Editor]（/start/editor-overview)中Assets面板下加载的项目资源。
  - **settings**
    项目的全局设置，这些设置为项目级参数，为项目的所有参与者所共有，例如：
    - 插件设置
    - 按键设置
    - 物理设置
    ...
- 客户端私有目录（不应纳入版本管理）
  - **library**
    客户端资源库管理目录，用于[Editor](/start/editor-overview)资源库的数据记录及资源展示。
  - **local**
    项目的本地设置，存储当前用户不适用于项目全局范围的个性化设置，如客户端界面布局。
  - **temp**
    临时文件存放目录。


---
###接下来...
- 阅读[「认识Editor」](/start/editor-overview)以了解项目开发环境的更多信息。
