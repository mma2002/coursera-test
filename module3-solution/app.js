(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    // restrict: "E",
    // template: '{{ found.name }}',
    templateUrl: 'foundList.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;
}
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  // list.searchTerm = "";
  // list.found = [];

  list.filter = function () {
    console.log("filter");
    var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

    promise.then(function (foundItems) {
      console.log(foundItems);
      list.found = foundItems;
    })
    .catch(function (error) {
      console.log(error);
    })
  };
  list.removeItem = function (itemIndex) {
    list.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      var foundItems = [];
      var items = result.data.menu_items;
      for (var i = 0; i < items.length; i++) {
        var description = items[i].description;
        if (description.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(items[i]);
        }
        // if (items[i].description.includes(searchTerm)) {
        //   foundItems.push(items[i]);
        // }
      }

      return foundItems;
    });

  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };


}

})();
