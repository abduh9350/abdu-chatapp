import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBGuMakWbHSFdftn5iKz1a0apYmX3AD_ks",
  authDomain: "abdu-chatapp.firebaseapp.com",
  databaseURL: "https://abdu-chatapp.firebaseio.com",
  projectId: "abdu-chatapp",
  storageBucket: "abdu-chatapp.appspot.com",
  messagingSenderId: "205149561226",
  appId: "1:205149561226:web:baaa466501e2d39b432873",
  measurementId: "G-19Q4PMESQQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
