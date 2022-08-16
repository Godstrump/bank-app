app.controller('LoginController', function ($scope, customersService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }

    $scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        customersService.insertCustomer(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };

    loading = false;
message = '';
  onLogin({ email, password }: any) {
    if (!email && password!) return;
    this.loading = !this.loading;

    this.authService.signIn(email, password).catch((err) => {
      this.loading = !this.loading;
      this.message = 'Invalid email and password';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    });
  }
});