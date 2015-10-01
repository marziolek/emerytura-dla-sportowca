'use strict';

describe('Controller: ContactSectionCtrl', function () {

  // load the controller's module
  beforeEach(module('emeryturaDlaSportowcaApp'));

  var ContactSectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactSectionCtrl = $controller('ContactSectionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
