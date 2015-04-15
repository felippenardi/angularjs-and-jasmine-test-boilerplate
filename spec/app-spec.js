describe('Controller: MainCtrl', function() {
  var scope,
  MainCtrl,
  serviceMock;

  beforeEach(module('myApp'));

  serviceMock = {
    collection: [7, 9, 42],
    value: 42
  };

  beforeEach(inject(
    function ($controller, $rootScope) {
      scope = $rootScope.$new();

      MainCtrl = $controller('MainCtrl', {
        $scope: scope,
        myService: serviceMock
      });

      scope.$apply();
    }
  ));

  it('mocks the service used in the controller', function() {
    expect(MainCtrl.myObject).toEqual([7,9,42]);
    expect(MainCtrl.myFavoriteValue).toBe(42);
  });

});
