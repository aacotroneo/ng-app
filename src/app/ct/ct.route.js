(function() {
  'use strict';

  angular
    .module('ct.ct')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('ct', {
        url: '/ct',
        abstract: true,
        templateUrl: 'app/ct/ct.html',
        controller: 'CtController',
        controllerAs: 'ct'
      })
      .state('ct.list', {
        url: '/list',
        templateUrl: 'app/ct/list/List.html',
        controller: 'CtListController',
        controllerAs: 'ctlist'
      })
      .state('ct.new', {
        url: '/new',
        templateUrl: 'app/ct/edit/edit.html',
        controller: 'CtEditController',
        controllerAs: 'ctform',
        resolve: {
          DATA: function() {return {}; }
        }
      })
      .state('ct.edit', {
        url: '/:id/edit',
        templateUrl: 'app/ct/edit/edit.html',
        controller: 'CtEditController',
        controllerAs: 'ctform',
        resolve: {
          DATA: function (ctApi, $stateParams){
            return ctApi.get($stateParams.id);
          }
        }
      })

    ;

    $urlRouterProvider.otherwise('/');
  }

})();
