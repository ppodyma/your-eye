import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyA0dwcAjKtHBoGk6rxVtpWmM83W_sM2Ztk",
  authDomain: "your-eye-bb64c.firebaseapp.com",
  databaseURL: "https://your-eye-bb64c.firebaseio.com",
  projectId: "your-eye-bb64c",
  storageBucket: "your-eye-bb64c.appspot.com",
  messagingSenderId: "142442814764",
  appId: "1:142442814764:web:99cd1600d4720cde926089"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp, app }