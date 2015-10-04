'use strict';

describe('Controller: AboutAfterhoursSectionCtrl', function () {

  // load the controller's module
  beforeEach(module('emeryturaDlaSportowcaApp'));

  var AboutAfterhoursSectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutAfterhoursSectionCtrl = $controller('AboutAfterhoursSectionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
