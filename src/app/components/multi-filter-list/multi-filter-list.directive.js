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

  function MultiFilterListController(
    multiFilterListService,
    assetClasses,
    fundManagers,
    fundStructure,
    currencies
  ) {

    // purposely left as vm, while the controllerAs above is set to 'listCtrl'
    // we use vm = this here to avoid caveats of working with the this keyword in ES5
    // this name can be anything
    // but the value we define in controllerAs, is the value that we must use inside the
    //  html template
    var vm = this;

    vm.multiFilterListService = multiFilterListService;

    vm.assetClasses = assetClasses;
    vm.fundManagers = fundManagers; 
    vm.fundStructure = fundStructure;
    vm.currencies = currencies; 

    vm.filterList = function filterList() {
      multiFilterListService.filterList(vm.query); 
    };

  }

})();
