const firebase = window.firebase;

// Sign in User
export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(console.log)
    .catch(console.log);
}

export default signIn;