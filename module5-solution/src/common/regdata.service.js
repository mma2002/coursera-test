(function () {
"use strict";

angular.module('common')
.service('RegDataService', RegDataService);

var regData = [];

RegDataService.$inject = ['$http', 'ApiPath'];
function RegDataService($http, ApiPath) {
  var service = this;


  service.getData = function () {
    console.log("getData:"+regData);
    return regData;
  };

  service.setData = function (newFormData) {
    console.log("setData"+newFormData.firstname);

    var short_name = newFormData.menunumber;

    // var menu = getMenuItem(short_name);
    // console.log("description:::"+menu[0]);

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

  service.getMenuItems = function () {
    var config = {};
    // console.log("menunumber:"+regData[0].menunumber);
    var short_name = regData[0].menunumber;
    if (short_name) {
      console.log(short_name);
      config.params = {'short_name': short_name};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      console.log("response:::"+response.data.menu_items[0].name);
      //console.log(items.menu_items[0].name);
      return response.data;
    });
  };
  // service.getMenuItems = function (category) {
  //   var config = {};
  //   if (category) {
  //     config.params = {'category': category};
  //   }
  //
  //   return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
  //     return response.data;
  //   });
  // };


}

})();
