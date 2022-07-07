import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbOw8p5esjeCI0o2LDtd8gv8vgozCohLU",
  authDomain: "auth-development-4b1b4.firebaseapp.com",
  projectId: "auth-development-4b1b4",
  storageBucket: "auth-development-4b1b4.appspot.com",
  messagingSenderId: "332295721305",
  appId: "1:332295721305:web:6e8017e42a093edfa2fc48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
