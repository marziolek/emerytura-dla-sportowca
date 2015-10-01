'use strict';

describe('Controller: HomeSectionCtrl', function () {

  // load the controller's module
  beforeEach(module('emeryturaDlaSportowcaApp'));

  var HomeSectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeSectionCtrl = $controller('HomeSectionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
