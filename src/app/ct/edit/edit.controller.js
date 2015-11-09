(function () {
  'use strict';

  angular
    .module('ct.ct')
    .controller('CtEditController', CtController);

  /** @ngInject */
  function CtController(ctApi, toastr, $state, DATA) {
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
          .then(function (resp) {
            //scope.form.$setPristine();
            //angular.copy(scope.saml, scope.ctSamlModel);
            toastr.info('Updated settings successfully!');
            $state.go('ct.list');
          },
          function (err) {
            toastr.error('Something went wrong. Please try again.');
          });
      }
    }
  }
})();
