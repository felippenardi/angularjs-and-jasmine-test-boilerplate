describe('Controller: MainCtrl', function() {
  var scope,
  MainCtrl,
  serviceMock,
  q;

  beforeEach(module('myApp'));

  beforeEach(inject(
      function ($controller, $rootScope, $q) {
        q = $q;
        scope = $rootScope.$new();

        MainCtrl = $controller('MainCtrl', {
          $scope: scope,
          myService: serviceMock
        });

        scope.$apply();
      }
      ));

  serviceMock = {
    get: function() {
      var answer = q.defer();
      frases.resolve(["A","B","C"]);
      return answer.promise;
    }

  };

  it('tests something', function() {
  });

});
