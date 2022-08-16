app.controller('LoginController', ['$scope', '$state', '$http', 'authFactory',
function ($scope, authService) {
  //I like to have an init() for controllers that need to perform some initialization. Keeps things in
  //one place...not required though especially in the simple example below
  
  const email = $scope.email;
  const password = $scope.password;

  $scope.message = '';
  onLogin = () => {
    if (!email && !password) return;
    $scope.loading = !$scope.loading;

    authFactory.signInWithEmailAndPassword(email, password).catch((err) => {
      $scope.loading = !this.loading;
      $scope.message = 'Invalid email and password';
      setTimeout(() => {
        $scope.message = '';
      }, 3000);
    });
  }
}]);