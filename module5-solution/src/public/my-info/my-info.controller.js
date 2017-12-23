(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['RegDataService', 'menuInfos'];
function MyInfoController(RegDataService, menuInfos) {
  console.log('MyInfoController');
  var $ctrl = this;
  $ctrl.menuInfos = menuInfos;
}

})();
