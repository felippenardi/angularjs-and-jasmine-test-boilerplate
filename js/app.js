var myApp = angular.module('myApp',[]);


myApp.factory('myService', function () {
  var service = {};

  service.collection = ["A","B","C"];

  service.value = "A";

  return service;
});

myApp.controller('MainCtrl', function (myService) {
  var controller = {};

  controller.myObject = myService.collection;
  controller.myFavoriteValue = myService.value;

  return controller;;
});
