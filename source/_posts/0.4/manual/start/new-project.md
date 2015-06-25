title: New project
permalinks: 0.4/manual/start/new-project
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


Once finishing setting up properties, please click `Create` button to make the new project created. Fireball will shut the Dashboard and load the project in Fireball Editor.

###Open Other...
You can open Fireball projects manually by **Open Other...**, in case of your project is not listed in Recent Projects.

Click `Open Other...` and choose the **project folder** in a pop-up dialog. Fireball Engine maintains projects with **directories** instead of particular project files.

###Help
You can access Fireball manuals and help documentations with **Help**.

##Project File Structure
Files are structured in a Fireball project as below:
```
ProjectName
├──assets
├──library
├──local
├──settings
└──temp
```
- Public folders to project collaborators
  - **assets**
    Project resource files, including all actual elements used to form up a project. Such as:
    - Scenes
    - Scripts
    - Sprites
    - Textures
    - Audio files
    - ...
    Just think them as all loaded resources in the Assets Panel of the [Editor]（/start/editor-overview)
  - **settings**
    Global project settings, which are of project-level and shared by all project collaborators. Such as:
    - Plug-in settings
    - Button settings
    - Physics settings
    - ...
- Private folders used by current client *(and you should ignore them in version control)*
  - **library**
    Files in this folder are for resource library management, and will be used by the [Editor](/manual/start/editor-overview) for library data persistence and resource display.
  - **local**
    Local project settings, which store user's customized settings, such as Editor layout.
  - **temp**
    Temporary files created by Fireball Engine.


---
###Next...
- Read [Editor Overview](/manual/start/editor-overview/) to learn more about the IDE.
