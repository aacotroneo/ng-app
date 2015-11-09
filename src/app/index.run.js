(function() {
  'use strict';

  angular
    .module('ct')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
