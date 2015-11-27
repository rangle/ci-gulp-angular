(function() {
  'use strict';

  angular
    .module('time-now')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('time-now', {
        url: '/time-now',
        templateUrl: 'app/components/time-now/time-now.html',
        controller: 'timeNowController',
        controllerAs: 'vm'
      });
  }

})();
