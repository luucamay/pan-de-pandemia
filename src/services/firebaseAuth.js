const firebase = window.firebase;

// Sign in User
export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(console.log)
    .catch((error) => {console.log('errorcito con email', error.message)});
}

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(console.log)
    .catch((error) => { console.log('errorcito google sign in', error.message) });
}