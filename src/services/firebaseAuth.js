const firebase = window.firebase;

firebase.auth().createUserWithEmailAndPassword("hola@pandemia.com", "pancito").catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

