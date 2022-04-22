import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfUdX6QjfoqNa4m3oM-fA25RR5yx2uv-Q",
  authDomain: "clone-1a485.firebaseapp.com",
  projectId: "clone-1a485",
  storageBucket: "clone-1a485.appspot.com",
  messagingSenderId: "1090106270770",
  appId: "1:1090106270770:web:bb1e0ad9de93d02c70482b",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
