title: Attributes
categories: manual
permalinks: manual/scripting/attributes
---

## Inspector-related Attributes

The following attributes are allowed to be used with `get` method.

Attribute Name | Description | Type | Default Value
--- | --- |:---:|:---:
[type](/manual/scripting/class#type) | Constrain the value type of the property（[Example](/manual/scripting/class#type)） | (Any) | undefined
[visible](/manual/scripting/class#visible) | Show/hide the property in the Inspector Panel | boolean | (1)
displayName  | Use a specified name for the property in the Inspector Panel | string | undefined
tooltip | Display a tooltip for the property in the Inspector Panel | string | undefined
multiline | Edit the property with a multi-line text input control in the Inspector Panel | boolean | false
readonly | Make the property read-only in the Inspector Panel | boolean | false
nullable | Attach a checkbox in front of the property's edit control | { propName: string, default: boolean } | undefined
watch | Watch other properties' status to refresh this UI control | { "prop names": function (this, uiCtrl) {} } | undefined
range | Constrain the min and max values for the property by a slider control | [min, max] | undefined

*(1) The default value of `visible` depends on the property name. The default value is `false` if the property name starts with an underscore("_"), while being `true` if not.*

## Serialization-related Attributes

The following attributes are not allowed to be used with `get` method

Attribute Name | Description | Type | Default Value
--- | --- |:---:|:---:
[serializable](/manual/scripting/class#serializable) | Decide if the property is allowed to serialize | boolean | true
editorOnly | Remove the property before exporting the project | boolean | false
rawType | The property is of a raw type of the hosting platform | string | undefined
