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

    //var regdata = RegDataService();
    RegDataService.setData(reg.user).then(function (result) {
      try {
        reg.completed = true;
        console.log('regdata:'+result[0].firstname);
      } catch (e) {
        console.log("error:"+e);
        reg.message = "No such menu number exists";
      }
    }, function (error) {
      console.log('regdata:'+error.statusText);
    });



  }
}

})();
