(function () {
"use strict";

angular.module('public')
.component('menuInfo', {
  templateUrl: 'src/public/my-info/menu-info.html',
  bindings: {
    menuInfo: '<'
  },
  controller: MenuInfoController
});


MenuInfoController.$inject = ['ApiPath'];
function MenuInfoController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
