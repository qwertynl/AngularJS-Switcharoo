/**
 * Created by nlubin on 1/31/14.
 */
var switcharoo = angular.module('switcharoo', []).directive('multiSelect', function(){
    return {
        restrict: 'E',
        scope: {
            items: '=',
            list: '=',
            leftTitle: '@',
            rightTitle: '@'
        },
        templateUrl: "templates/switcharoo.html",
        link: function(scope)   {
            scope.switchItem = function(item)   {
                var index = scope.items.indexOf(item);
                if(index == -1) {
                    //add it in
                    scope.items.push(item);
                }
                else    {
                    //remove it
                    scope.items.splice(index, 1);
                }
            }
        }
    };
})

switcharoo.directive('switchitem', function() {
    return {
        restrict: 'E',
        scope: {
            value: '='
        },
        template: '<div>{{value}}</div>'
    };
});