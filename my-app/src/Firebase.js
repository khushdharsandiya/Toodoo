import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyATmpfq9T4zyhxP6WyAf6XJ1uDJ3RuT7YU",
  authDomain: "react-project-d4dc0.firebaseapp.com",
  projectId: "react-project-d4dc0",
  storageBucket: "react-project-d4dc0.appspot.com",
  messagingSenderId: "197637647227",
  appId: "1:197637647227:web:e3f0bbb43f9cac9b7e2bde",
  databaseURL: "https://react-project-d4dc0-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);