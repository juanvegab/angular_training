'use strict';

describe('Controller: ElementslistCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestApp'));

  var ElementslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ElementslistCtrl = $controller('ElementslistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
