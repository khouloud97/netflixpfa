import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyANah4AXgvfFsP0X9MKT4ygWMsdMC4HdrA",
  authDomain: "netflixpfa.firebaseapp.com",
  projectId: "netflixpfa",
  storageBucket: "netflixpfa.appspot.com",
  messagingSenderId: "288126390256",
  appId: "1:288126390256:web:f1aa74827931da4427d735",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db; //we just have one export default but export khw barchaa  :p
