AngularJS-Switcharoo
==================

A multi-select plugin for Angular JS


Use this wrapper if you want to expand the power of your multiple select box.

You can use it like so.

Remember to add it to your app:

```javascript
var app = app.module("myApp", ["switcharoo"]);
```

Then in your HTML form you can use it with the `multi-select` directive:

```html
<multi-select default="<array of defaault selected items>"
            items="<object with items in `key:value` format>"
            left-title="Title of left box"
            right-title="Title of right box"
        ></multi-select>
```