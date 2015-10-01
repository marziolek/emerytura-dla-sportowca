'use strict';

describe('Controller: WhatSectionCtrl', function () {

  // load the controller's module
  beforeEach(module('emeryturaDlaSportowcaApp'));

  var WhatSectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhatSectionCtrl = $controller('WhatSectionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
