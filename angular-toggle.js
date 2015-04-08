/**
 * @author xialei <xialeistudio@gmail.com>
 */
var toggle = angular.module('angular-toggle', []);
toggle.directive('angularToggle', [function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div ng-click=\"click()\" class=\"toggle-box\"><div class=\"toggle-container\"><div class=\"toggle-item\"></div></div></div>",
        link: function (scope, ele, attrs) {
            //得到字段名称
            var name = attrs.name;
            //初始化
            scope[name] = false;
            //绑定事件
            scope.click = function () {
                scope[name] = !scope[name];
                ele.toggleClass("active");
            }
        }
    }
}]);