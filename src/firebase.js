import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDOAsdSvrdxoMiEld2OlzhHH3Dv0KG6v88",
  authDomain: "expensetracker-1e4f9.firebaseapp.com",
  projectId: "expensetracker-1e4f9",
  storageBucket: "expensetracker-1e4f9.firebasestorage.app",
  messagingSenderId: "361750155684",
  appId: "1:361750155684:web:19dfd6c4b25e54f20cf131",
  databaseURL: "https://expensetracker-1e4f9-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);