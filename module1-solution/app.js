(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];


  function LunchCheckController($scope) {
    $scope.splitLunch = function() {
      var items = $scope.lunchMenu;
      console.log("items:"+items);
      if (items == null || items.length === 0) {
        $scope.message = 'Please enter data first';
        $scope.CustomStyle = {
           'color' : 'red'
        };
        $scope.CustomStyleText = {
           'border-color': 'red',
        };

        return;
      }
      var countLunch = items.split(',');

      console.log("size:"+countLunch.length);

      if (countLunch.length < 4) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }

      $scope.CustomStyle = {
         'color' : 'green'
      };
      $scope.CustomStyleText = {
         'border-color': 'green',
      };

    };
  }


})();
