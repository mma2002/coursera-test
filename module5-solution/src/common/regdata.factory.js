(function () {
"use strict";

angular.module('common')
.factory('RegDataFactory', RegDataFactory);

function RegDataFactory() {
  var factory = function () {
    return new RegDataService();
  };

  return factory;
}


// RegDataService.$inject = [];
function RegDataService() {
  var service = this;
  var regData = [];

  service.getData = function () {
    console.log("getData:"+regData);
    return regData;
  };

  service.setData = function (newFormData) {
    console.log(newFormData.firstname);
    var item = {
      firstname: newFormData.firstname,
      lastname: newFormData.lastname
    };
    regData.push(item);
    // regData = newFormData;
    //return regData;
  };

}

})();
