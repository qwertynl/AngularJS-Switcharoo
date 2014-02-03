AngularJS-Switcharoo
==================

A multi-select plugin for Angular JS


Use this wrapper if you want to expand the power of your multiple select box.

Basic Usage
=====

Remember to add it to your app:

```javascript
var app = app.module("myApp", ["switcharoo"]);
```

Then in your HTML form you can use it with the `multi-select` directive:

```html
<multi-select default="<array of default selected items>"
            items="<object with items in `key:value` format>"
            left-title="Title of left box"
            right-title="Title of right box"
        ></multi-select>
```

-----------------------

So a full example:

In the controller:

```javascript
app.controller("MyCtrl", ['$scope', function($scope) {
    $scope.defaultItems = [
        "1", "4"
    ];
    $scope.listOfItems = {
        1: 'Apples',
        2: 'Oranges',
        3: 'Peaches',
        4: 'Bananas',
        5: 'Lemons',
        ...
    }
}]);
```

In the template:

```html
<div ng-controller="MyCtrl">
    <multi-select default="defaultItems"
            items="listOfItems"
            left-title="Unpicked Fruits"
            right-title="Fruits in the barrel"
        ></multi-select>
</div>
```

[Demo](http://qwertynl.github.io/AngularJS-Switcharoo/switchDemo.html)
