(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://marat-course.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
