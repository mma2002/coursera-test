(function () {
"use strict";

angular.module('common')
.factory('RegDataFactory', RegDataFactory);

var regData = [];

// RegDataFactory.$inject = ['$http', 'ApiPath'];
function RegDataFactory() {
  var factory = function () {
    return new RegDataService();
  };

  return factory;
}



function RegDataService($http, ApiPath) {
  var service = this;


  service.getData = function () {
    console.log("getData:"+regData);
    return regData;
  };

  service.setData = function (newFormData) {
    console.log(newFormData.firstname);

    // var menu = function (newFormData.menunumber) {
    //   var config = {};
    //   if (newFormData.menunumber) {
    //     config.params = {'short_name': newFormData.menunumber};
    //   }
    //
    //   return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
    //     return response.data;
    //   });
    // };
    //
    // console.log("menu:::"+menu);

    var item = {
      firstname: newFormData.firstname,
      lastname: newFormData.lastname,
      email: newFormData.email,
      phone: newFormData.phone,
      menunumber: newFormData.menunumber
    };
    regData.push(item);
    // regData = newFormData;
    //return regData;
  };



}

})();
