(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope', 'RegDataService'];
function SignUpController($scope, RegDataService) {
  var reg = this;

  reg.submit = function () {
    // reg.user.firstname =
    console.log(reg.user.firstname);
    reg.completed = true;

    //var regdata = RegDataService();
    var items = RegDataService.setData(reg.user);
    console.log('regdata:'+items);


  }
}

})();
