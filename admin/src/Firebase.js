
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_EU0J4MTkIE7855JQUTr5aW6gVB1vdCg",
  authDomain: "netflix-e6635.firebaseapp.com",
  projectId: "netflix-e6635",
  storageBucket: "netflix-e6635.appspot.com",
  messagingSenderId: "675066728226",
  appId: "1:675066728226:web:e8012a312416a86e045f7b",
  measurementId: "G-4GCYH17EBE"
};

const app=initializeApp(firebaseConfig);
const storage=getStorage(app);

export default storage;

