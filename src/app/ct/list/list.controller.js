(function () {
  'use strict';

  angular
    .module('ct')
    .controller('CtListController', CtController);

  /** @ngInject */
  function CtController(ctApi, $state) {
    var vm = this;

    vm.list = [];
    vm.edit = edit;
    vm.remove = remove;

    activate();

    function activate() {
      ctApi.getList().then(function (data) {
        vm.list = data;
      });
    }

    function edit(obj) {
      $state.go('ct.edit', {id: obj.id});
    }

    function remove(obj) {
      ctApi.remove(obj.id).then(function () {
        var idx = vm.list.indexOf(obj);
        if (idx !== -1) {
          vm.list.splice(idx, 1);
        }
      });
    }
  }
})();
