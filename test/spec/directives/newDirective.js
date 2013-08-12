'use strict';

describe('Directive: newDirective', function () {
  beforeEach(module('angularTestApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<new-directive></new-directive>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the newDirective directive');
  }));
});
