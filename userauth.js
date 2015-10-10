<script src="https://cdn.firebase.com/js/simple-login/1.6.4/firebase-simple-login.js"></script>

var myRef = new Firebase("https://dazzling-heat-5064.firebaseapp.com");
var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log("User ID: " + user.uid + ", Provider: " + user.provider);
  } else {
    // user is logged out
  }
});






var authRef = new Firebase("https://dazzling-heat-5064.firebaseapp.com");
authRef.on("value", function(snap) {
  if (snap.val() === true) {
    alert("authenticated");
  } else {
    alert("not authenticated");
  }
});






authClient.login("<provider>");
authClient.logout();





var isNewUser = true;
var myRef = new Firebase("https://dazzling-heat-5064.firebaseapp.com");
var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
  if (error) { ... }
  else if (user) {
    if( isNewUser ) {
      // save new user's profile into Firebase so we can
      // list users, use them in security rules, and show profiles
      myRef.child('users').child(user.uid).set({
        displayName: user.displayName,
        provider: user.provider,
        provider_id: user.id
      });
    }
  }
  else { ... }
}






{
  code: 'INVALID_PASSWORD',
  message: 'The specified password is incorrect.'
}






var myRef = new Firebase("https://dazzling-heat-5064.firebaseapp.com");
var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    switch(error.code) {
      case "INVALID_EMAIL":
      // handle an invalid email
      case "INVALID_PASSWORD":
      // handle an invalid password
      default:
    }
  } else if (user) {
    // user authenticated with Firebase
    console.log("User ID: " + user.uid + ", Provider: " + user.provider);
  } else {
    // user is logged out
  }
});




var authClient = new FirebaseSimpleLogin(myRef, function(error, user) { ... });
authClient.createUser(email, password, function(error, user) {
  if (error === null) {
    console.log("User created successfully:", user);
  } else {
    console.log("Error creating user:", error);
  }
});

var authClient = new FirebaseSimpleLogin(myRef, function(error, user) { ... });
authClient.login('password', {
  email: '<email@domain.com>',
  password: '<password>'
});