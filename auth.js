import app from './firebaseConfig';

export const signUp = (email, password) => {
  return app.auth().createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
  return app.auth().signInWithEmailAndPassword(email, password);
};