(function() {

  angular
    .module('multi-filter-list')
    .directive('multiFilterList', function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/multi-filter-list/multi-filter-list.html',
        controllerAs: 'listCtrl',
        controller: MultiFilterListController
      };
    });

  function MultiFilterListController(multiFilterListService) {

    // purposely left as vm, while the controllerAs above is set to 'listCtrl'
    // we use vm = this here to avoid caveats of working with the this keyword in ES5
    // this name can be anything
    // but the value we define in controllerAs, is the value that we must use inside the
    //  html template
    var vm = this;

    vm.multiFilterListService = multiFilterListService;

    vm.assetClasses = [
      'US Equity',
      'CA Equity',
      'EU Equity'
    ];

    vm.fundManagers = [
      'Hans',
      'Tetrem'
    ];

    vm.fundStructure = [
      'SEG'
    ];

    vm.currencies = [
      'USD',
      'CDN',
      'EUR'
    ];

    vm.filterList = function filterList() {
      multiFilterListService.filterList(vm.query); 
    };

  }

})();
