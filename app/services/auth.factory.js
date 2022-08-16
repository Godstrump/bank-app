app.factory("authFactory", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://fidelity-db.firebaseapp.com/");
    return $firebaseAuth(ref);
  }
])