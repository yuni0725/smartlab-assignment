import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3gBdiE24L_tthp879ekwCSnxq9hMA0K8",
  authDomain: "smartlab-assignment.firebaseapp.com",
  projectId: "smartlab-assignment",
  storageBucket: "smartlab-assignment.appspot.com",
  messagingSenderId: "1076053933822",
  appId: "1:1076053933822:web:1739f989447092d4b2efaf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
