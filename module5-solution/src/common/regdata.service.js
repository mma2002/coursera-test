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

    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      console.log("response");
      // console.log(response.data.menu_items.length);
      // console.log(response.data.menu_items.length);
      var item = regData[0];
      var foundItems = [];

      var items = response.data.menu_items;
      for (var i = 0; i < items.length; i++) {
        if (JSON.stringify(short_name) == JSON.stringify(items[i].short_name)) {
        // if (short_name.toLowerCase().indexOf(items[i].short_name) !== -1) {
        // if (deepEqual(short_name, items[i].short_name)) {
          console.log("stringify:"+item.firstname);
          var newItem = {
            firstname: item.firstname,
            lastname: item.lastname,
            email: item.email,
            phone: item.phone,
            menunumber: item.menunumber,
            menuname: items[i].name,
            shortname: items[i].short_name,
            description: items[i].description
          };
          // regData.found.splice(0, 1);
          foundItems.push(newItem);
        }
        // console.log("response:::"+response.data.menu_items[i].short_name);
      }

      //console.log(items.menu_items[0].name);
      return foundItems;
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
