/**
 * Created by nlubin on 1/31/14.
 */
var switcharoo = angular.module('switcharoo', []).directive('multiSelect', function(){
    return {
        restrict: 'E',
        scope: {
            items: '=',
            default: '=',
            leftTitle: '@',
            rightTitle: '@'
        },
        templateUrl: "templates/switcharoo.html",
        link: function(scope)   {
            scope.switchItem = function(item)   {
                var index = scope.default.indexOf(item);
                if(index == -1) {
                    //add it in
                    scope.default.push(item);
                }
                else    {
                    //remove it
                    scope.default.splice(index, 1);
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