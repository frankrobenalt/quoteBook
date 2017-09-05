angular.module('myApp').controller('mainCtrl', function($scope, service){

    $scope.quotes = service.quotes;
    $scope.addQuote = function(obj){
        service.addQuote(obj);
        $scope.obj = {};
    };
    $scope.deleteMe = function(str){
        service.removeData(str);
    };
});