(function () {
"use strict";

angular.module('common')
.service('RegDataService', RegDataService);

var regData = [];

RegDataService.$inject = ['$http', 'ApiPath', '$q', '$timeout'];
function RegDataService($http, ApiPath, $q, $timeout) {
  var service = this;


  service.getData = function () {
    console.log("getData:"+regData);
    return regData;
  };

  service.setData = function (newFormData) {
    var deferred = $q.defer();
    console.log("setData"+newFormData.firstname);

    var short_name = newFormData.menunumber;

    return $http.get(ApiPath + '/menu_items.json').then(function (result) {
      console.log("result");
      var items = result.data.menu_items;
      // var isExists = false;
      for (var i = 0; i < items.length; i++) {
        if (JSON.stringify(short_name) == JSON.stringify(items[i].short_name)) {
          // console.log("stringify:"+item.firstname);
          var item = {
            isSignUp: true,
            firstname: newFormData.firstname,
            lastname: newFormData.lastname,
            email: newFormData.email,
            phone: newFormData.phone,
            menunumber: newFormData.menunumber,
            menuname: items[i].name,
            shortname: items[i].short_name,
            description: items[i].description
          };
          regData.push(item);
          deferred.resolve(regData);
          return deferred.promise;
        }
        // if (isExists == false) {
        //
        // }
      }
    }, function (result) {
      deferred.reject(response);
      return deferred.promise;
    });
    // Wait 2 seconds before returning
    // $timeout(function () {
    //   // deferred.reject(items);
    //   deferred.resolve(regData);
    // }, 2000);
    // return deferred.reject(regData);
    // return deferred.promise;
  };

  service.getMenuItems = function () {
    console.log("length:"+regData.length);
    if (regData.length === 0) {
      var item = {
        isSignUp: false,
        firstname: "Not Signed Up Yet.",
        lastname: "Sign up Now!"
      };
      regData.push(item);
    }
    return regData;
  };

}

})();
