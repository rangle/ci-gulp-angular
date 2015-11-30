'use strict';

describe('timeNowController', function () {
  var timeNowController;
  var scope;

  beforeEach(module('time-now'));
  beforeEach(inject(initController));

  it('shold get instantiated', function() {
    expect(timeNowController).to.be.an('Object');
  });

  it('should have a date property of type Date', function () {
    expect(timeNowController.date).to.be.a('Date');
  });

  function initController($controller, $rootScope) {
    scope = $rootScope.$new();
    timeNowController = $controller('timeNowController', {
      $scope: scope
    });
  }
});
