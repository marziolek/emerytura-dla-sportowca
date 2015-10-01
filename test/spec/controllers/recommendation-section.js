'use strict';

describe('Controller: RecommendationSectionCtrl', function () {

  // load the controller's module
  beforeEach(module('emeryturaDlaSportowcaApp'));

  var RecommendationSectionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecommendationSectionCtrl = $controller('RecommendationSectionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
