(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$scope', 'RegDataFactory'];
function MyInfoController($scope, RegDataFactory) {
  var info = this;

  var regdata = RegDataFactory();
  var regData = regdata.getData();
  // info.user.firstname = regData.firstname;
  console.log(regData.firstname);
  console.log(regdata.getData());
}

})();
