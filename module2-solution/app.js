(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getItems();

  toBuyList.buy = function (itemIndex) {
    ShoppingListCheckOffService.addItem(toBuyList.items[itemIndex].name, toBuyList.items[itemIndex].quantity);
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of toBuy shopping items
  var items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Donuts",
      quantity: 200
    },
    {
      name: "Cookies",
      quantity: 300
    },
    {
      name: "Chocolate",
      quantity: 5
    },
    {
      name: "Waters",
      quantity: 15
    }
  ];

  // List of bought items
  var boughtItems = [];

  // add to boughtList
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItems.push(item);
  };

  // remove from toBuyList
  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
