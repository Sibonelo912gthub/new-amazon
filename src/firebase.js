import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-5V1d0enIPg6KpwMgKaLEhIyb_NPN1fo",
  authDomain: "zaio-amazn-clone.firebaseapp.com",
  projectId: "zaio-amazn-clone",
  storageBucket: "zaio-amazn-clone.appspot.com",
  messagingSenderId: "697888601292",
  appId: "1:697888601292:web:48a45da65425607f803e69",
  measurementId: "G-TGRS8W5EZ1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
