'use strict';

describe('Service: pageLoadAnchor', function () {

  // load the service's module
  beforeEach(module('emeryturaDlaSportowcaApp'));

  // instantiate service
  var pageLoadAnchor;
  beforeEach(inject(function (_pageLoadAnchor_) {
    pageLoadAnchor = _pageLoadAnchor_;
  }));

  it('should do something', function () {
    expect(!!pageLoadAnchor).toBe(true);
  });

});
