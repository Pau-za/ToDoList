import firebase from 'firebase';
import firestore from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD6C1E8MyHPW1pdL0-872UmMulGW3xMXlA",
  authDomain: "todo-list-vue-c19.firebaseapp.com",
  databaseURL: "https://todo-list-vue-c19.firebaseio.com",
  projectId: "todo-list-vue-c19",
  storageBucket: "",
  messagingSenderId: "1004892161319",
  appId: "1:1004892161319:web:12d1026b9a3e6229"
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(fb);

export default db;
