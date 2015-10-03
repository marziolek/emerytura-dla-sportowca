'use strict';

describe('Directive: personOpacityScroll', function () {

  // load the directive's module
  beforeEach(module('emeryturaDlaSportowcaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<person-opacity-scroll></person-opacity-scroll>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the personOpacityScroll directive');
  }));
});
