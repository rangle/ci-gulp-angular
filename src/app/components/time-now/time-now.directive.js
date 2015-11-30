// imediatelly invoked function expression
// wrapping the code in this prevents poluting the
//   global name space with variables declared in this file
(function() {

  angular
    .module('time-now')
    .controller('timeNowController', TimeNowController)
    .directive('timeNow', function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/time-now/time-now.html',
        controllerAs: 'vm',
        controller: TimeNowController
      };
    });

  function TimeNowController() {

    var vm = this;

    vm.date = new Date();

    /**
     * @method updateDate
     *
     * Updates the vm.date object
     */
    vm.updateDate = function updateDate () {
      vm.date = new Date();
    };

  }


})();
