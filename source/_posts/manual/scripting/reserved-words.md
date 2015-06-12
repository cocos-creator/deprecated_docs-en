title: Appendix - Reserved Keywords
categories: manual
permalinks: manual/scripting/reserved-words
---

除了类已经定义的变量外，以下是其它 Fireball-x 中已经内部占用的变量名，请避免冲突。这些变量有一些只有特殊情况才会用到，有一些是将来可能会用到。
Following are variables used by Fireball-x beside of variables declared in classes. Some of them are used in uncommon situations, others are reserved for future extension. You should avoid to use them in your code.

### Global Variables

- `Fire`
- `Editor`
- `FireEditor`
- `PIXI`
- `require`

### Variables Possibly Defined In Any Object

- `__id__`
- `__type__`
- `_iN$t`
- `_rawext`

### Variables Possibly Defined In Any Type or Prototype

- All variables starts with `_attrs$`
- `__classname__`
- `__cid__`

### FireClass Static Variables

- `get`
- `set`
- `getset`
- `prop`
- `$super`
- `__props__`
- `__ctors__`

### FireClass Instance Variables

- `_observing`
- `_$erialized`

### Variables In Enumeration Definition

- `__enums__`
