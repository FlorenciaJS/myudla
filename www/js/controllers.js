app.controller('HomeController', function ($scope, $chairaOauth2) {

  $scope.Login = function() {

        $chairaOauth2.authorize("CLIENT_ID_HERE").then(function(result) {
            alert("You are login, your access_token is:" + result.access_token);
        }, function(error) {
            console.log(JSON.stringify(error));
        });
  }

});