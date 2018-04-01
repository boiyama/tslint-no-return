# disallow `return` statements (no-return)

## Rule Details

This rule disallows return statements.

Examples of **incorrect** code for this rule:

```js
function foo(bar) {
    var baz = bar * 2;
    return baz;
}
```

```js
var foo = function (bar) {
    var baz = bar * 2;
    return baz;
};
```

```js
var foo = bar => {
    var baz = bar * 2;
    return baz;
};
```

Examples of **correct** code for this rule:

```js
var foo = bar => bar * 2;
```
