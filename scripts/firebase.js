const firebaseConfig = {
  apiKey: "AIzaSyAH74ykz09yJfnQsm8GK5mWBbcTuvpbNQU",
  authDomain: "gerenciador-de-estoque-23c2b.firebaseapp.com",
  projectId: "gerenciador-de-estoque-23c2b",
  storageBucket: "gerenciador-de-estoque-23c2b.appspot.com",
  messagingSenderId: "1016068686698",
  appId: "1:1016068686698:web:2fab1a6345397f745d1b13"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
const dbRefUsers = database.ref('users')
//referencia para o nó users do firestore
const dbFirestore = firebase.firestore().collection('users')

