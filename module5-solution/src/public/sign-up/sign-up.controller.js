(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope', 'RegDataFactory'];
function SignUpController($scope, RegDataFactory) {
  var reg = this;

  reg.submit = function () {
    // reg.user.firstname =
    console.log(reg.user.firstname);
    reg.completed = true;

    var regdata = RegDataFactory();
    regdata.setData(reg.user);
  }
}

})();
