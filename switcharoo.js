/**
 * Created by nlubin on 1/31/14.
 */
var switcharoo = angular.module('switcharoo', []).directive('multiSelect', function(){
    return {
        restrict: 'E',
        scope: {
            items: '=',
            selected: '=',
            leftTitle: '@',
            rightTitle: '@'
        },
        templateUrl: "switcharoo.html",
        link: function(scope)   {
            scope.switchItem = function(item)   {
                var index = scope.selected.indexOf(item);
                if(index == -1) {
                    //add it in
                    scope.selected.push(item);
                }
                else    {
                    //remove it
                    scope.selected.splice(index, 1);
                }
            }
            scope.isSelected = function(item){
                return (scope.selected.indexOf(item) > -1);
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
