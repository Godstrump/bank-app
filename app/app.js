/// <reference path="../Scripts/angular-1.1.4.js" />

/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

var app = angular.module('BankApp', ['ngRoute', 'firebase']);

const firebaseConfig = {
    apiKey: 'AIzaSyBxsjWrXX8RZi_vGmIl6p8GoxrDAlQKfeQ',
    authDomain: 'fidelity-db.firebaseapp.com',
    projectId: 'fidelity-db',
    storageBucket: 'fidelity-db.appspot.com',
    messagingSenderId: '344988091090',
    appId: '1:344988091090:web:b87504c359e3e12d0c230b',
    measurementId: 'G-FL00CH86KX',
}

firebase.initializeApp(firebaseConfig)

app.controller('FirebaseCtrl', function ($firebaseObject) {
    const ref = firebase.database().child('angular')
    this.object = $firebaseObject(ref)
})

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'CustomersController',
                templateUrl: '/app/partials/login/login.component.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/register/',
            {
                controller: 'CustomerOrdersController',
                templateUrl: '/app/partials/register/register.component.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/dashboard',
            {
                controller: 'OrdersController',
                templateUrl: '/app/partials/dashboard/dashboard.component.html'
            })
        .otherwise({ redirectTo: '/' });
});




