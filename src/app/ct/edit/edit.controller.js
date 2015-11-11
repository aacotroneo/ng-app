(function () {
  'use strict';

  angular
    .module('ct')
    .controller('CtEditController', CtController);

  /** @ngInject */
  function CtController(ctApi,$state, $log, DATA) {
    var vm = this;

    vm.onFormSubmit = onFormSubmit;
    vm.title = 'Create';
    vm.actionText = 'Save';

    activate();

    function activate() {
      if(DATA.id){
        vm.model = DATA;
        vm.title = 'Edit'; //simple stuff to detect update vs create.
      }
    }

    function onFormSubmit() {

      if (vm.form.$valid) {

        ctApi.update(vm.model)
          .then(function () {
            $state.go('ct.list');
          },
          function (err) {
            $log.error('Something went wrong. Please try again.', err);
          });
      }
    }
  }
})();
