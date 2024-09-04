import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBtIDwjG32dO16JdDxTHHv6EC_PvFn_caE",
  authDomain: "fuckless-life.firebaseapp.com",
  databaseURL:
    "https://fuckless-life-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fuckless-life",
  storageBucket: "fuckless-life.appspot.com",
  messagingSenderId: "1073027836694",
  appId: "1:1073027836694:web:293d5a6efc15c1405cfe37",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
