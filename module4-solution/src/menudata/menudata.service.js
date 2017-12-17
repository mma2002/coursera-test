(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath', '$q', '$timeout']
function MenuDataService($http, ApiBasePath, $q, $timeout) {
  var service = this;

  // List of categories
  var items = [];

  service.getAllCategories = function () {
    var deferred = $q.defer();
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
      items = result.data;
      // console.log("items="+result.data);
      // console.log("items::"+result.data.categories);
    });

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);
    return deferred.promise;
  };


  service.getItemsForCategory = function (categoryShortName) {
    console.log("ddfdfd:"+categoryShortName);
    var deferred = $q.defer();
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
      // params: {
      //   category: categoryShortName
      // }
    }).then(function (result) {
      items = result.data.category;
       console.log("items="+result.data);
      console.log("items::"+result.data.category);
    });

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);
    return deferred.promise;
  };
}

})();
