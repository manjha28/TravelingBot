import firebase from "firebase/app";
import firebase from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBowozH_O7pMaZP1v4byDQQVMXnT9x_Xyo",
  authDomain: "bounties-of-life.firebaseapp.com",
  databaseURL: "https://bounties-of-life.firebaseio.com",
  projectId: "bounties-of-life",
  storageBucket: "bounties-of-life.appspot.com",
  messagingSenderId: "298377293983",
  appId: "1:298377293983:web:96f5591601bf98902832aa",
  measurementId: "G-L42WDDGPSP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
