(function () {
  'use strict';

  angular
    .module('ct')
    .factory('ctApi', ctApi);

  /** @ngInject */
  function ctApi($http) {
    var apiHost = 'http://104.131.117.210:3001';
    //var apiHost = 'http://localhost:3000';

    return {
      getList: getList,
      get: get,
      update: update,
      remove: remove
    };
    //
    //Prefix Verb   URI Pattern              Controller#Action
    //  cts GET    /cts(.:format)           cts#index
    //  POST   /cts(.:format)           cts#create
    //  new_ct GET    /cts/new(.:format)       cts#new
    //  edit_ct GET    /cts/:id/edit(.:format)  cts#edit
    //  ct GET    /cts/:id(.:format)       cts#show
    //  PATCH  /cts/:id(.:format)       cts#update
    //  PUT    /cts/:id(.:format)       cts#update
    //  DELETE /cts/:id(.:format)       cts#destroy
    //  welcome_index GET    /welcome/index(.:format) welcome#index
    //  root GET    /                        welcome#index
    //
    function getList() {
      return $http.get(apiHost + '/cts.json').then(function (res) {
        return res.data;
      });
    }

    function get(id) {
      return $http.get(apiHost + '/cts/' + id + '.json').then(function (res) {
        return res.data;
      });
    }

    function update(model) {
      if (model.id) {
        //update
        return $http.put(apiHost + '/cts/' + model.id + '.json', model);
      } else {
        //create
        return $http.post(apiHost + '/cts.json', model);
      }
    }

    function remove(id) {
      return $http.delete(apiHost + '/cts/' + id);
    }
  }
})();
