const firebaseconfig1 = { 
    apiKey: "AIzaSyCpyGybkDzb8vg6CLrq94Obr_6ocNW3I48",
    authDomain: "postandearn-913e7.firebaseapp.com",
    databaseURL: "https://postandearn-913e7-default-rtdb.firebaseio.com",
    projectId: "postandearn-913e7",
    storageBucket: "postandearn-913e7.appspot.com",
    messagingSenderId: "516981459091",
    appId: "1:516981459091:web:252fa231f2b08c8a752566",
    measurementId: "G-4J5FET99CL"
  }
  const firebaseApp1 = firebase.initializeApp(firebaseconfig1, "app1");
  const Primarydatabase = firebaseApp1.database();
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig2 = {
  apiKey: "AIzaSyBzI5PP2zcvIHZmXb5rnWbEXazlw3e9SKM",
  authDomain: "chris-2eb7e.firebaseapp.com",
  databaseURL: "https://chris-2eb7e-default-rtdb.firebaseio.com",
  projectId: "chris-2eb7e",
  storageBucket: "chris-2eb7e.appspot.com",
  messagingSenderId: "260301856742",
  appId: "1:260301856742:web:8b053081a545453a7ec027",
  measurementId: "G-RZLV6NZW7W"
};
  const firebaseApp2 = firebase.initializeApp(firebaseConfig2, "app2");
  const Secondarydatabase = firebaseApp2.database();
  