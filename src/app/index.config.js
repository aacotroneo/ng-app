(function() {
  'use strict';

  angular
    .module('ct')
    .config(config);

  /** @ngInject */
  function config($httpProvider) {


    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  }

})();
