(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['items']
function ItemDetailController(items) {
  var ctrl = this;
  // itemDetail.short_name = item.short_name;
  // itemDetail.name = item.name;
  // itemDetail.special_instructions = item.special_instructions;

  // for (var i = 0; i < items.length; i++) {
  //   console.log("controller:"+items[i].name);
  //   itemDetail.name = items[i].name;
  //
  // }
 console.log("controller:"+items[0].name);
  ctrl.items = items;
}

})();
