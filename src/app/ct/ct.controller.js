(function() {
  'use strict';

  angular
    .module('ct.ct')
    .controller('CtController', CtController);

  /** @ngInject */
  function CtController(ctApi) {
    var vm = this;

    vm.list = [];

    activate();

    function activate() {
      ctApi.getList().then(function(data){
        vm.list = data;
      });
    }
  }
})();
