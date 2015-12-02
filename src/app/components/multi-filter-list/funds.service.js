(function() {
'use strict';

angular.module('multi-filter-list')
  .factory('ciFundsService', function($http) {
    var fundService = this;

    fundService.getFunds = function() {
      return $http.get('/mock.json')
        .then(function(response) {
          return response.data;
        });
    }

    return fundService;
  });

})();
