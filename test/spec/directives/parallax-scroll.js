'use strict';

describe('Directive: parallaxScroll', function () {

  // load the directive's module
  beforeEach(module('emeryturaDlaSportowcaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<parallax-scroll></parallax-scroll>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the parallaxScroll directive');
  }));
});
