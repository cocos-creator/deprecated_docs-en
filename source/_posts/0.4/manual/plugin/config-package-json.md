title: Plugin Configuration
permalinks: 0.4/manual/plugin/config-package-json
---

TODO:

## Options

 * fireball
   * `main` String - Main entrance function
   * `menus` Array - Menu array
     * `path` String - Menu path
     * `message` String - Triggered message
   * `panels` Object - Panel information list
     * `panel` Object - Using panel's alias as the key
       * `type` String - Type of panel. Optional values are: `float`, `dockable`, `fixed-size`
       * `page` String - Index page. If `page` is set, the value of `view` will be ignored.
       * `view` String - Content of the panel
       * `title` String - Title shown in the panel's title bar
       * `width` Integer - Width of the panel
       * `height` Integer - Height of the panel
       * `min-width` Integer - Minimum width of the panel
       * `min-height` Integer - Minimum height of the panel
       * `max-width` Integer - Maximum width of the panel
       * `max-height` Integer - Maximum height of the panel
       * `messages` Object - The list of the binding between Panel messages and DOM message. The data structure is as: `{ key: "ipc message", value: "DOM message"}`
