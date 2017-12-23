(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

// MyInfoController.$inject = ['$scope', 'RegDataService'];
// function MyInfoController($scope, RegDataService) {
//   var info = this;
//
//   // var regdata = RegDataService();
//   var regData = RegDataService.getData();
//   var menuItems = RegDataService.getMenuItems();
//   $scope.firstname = regData.firstname;
//   console.log(regData.firstname);
//   console.log(regData);
//   console.log("menuItems:"+menuItems.menu_items[0].name);
//   // console.log("menuItem:"+menuItems[0]);
// }

MyInfoController.$inject = ['menuInfos'];
function MyInfoController(menuInfos) {
  var $ctrl = this;
  $ctrl.menuInfos = menuInfos;
}

})();
