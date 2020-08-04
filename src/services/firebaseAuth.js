const firebase = window.firebase;

/* firebase.auth().createUserWithEmailAndPassword("hola@pandemia.com", "pancito").catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
 */

  export const signIn = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);