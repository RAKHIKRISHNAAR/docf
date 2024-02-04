import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //Your config data
    apiKey: "AIzaSyAv_PFCLcflPPO5NYtXkz5r-H9J2IEQzUQ", 
    authDomain: "login-demo-a03bf.firebaseapp.com", 
    projectId: "login-demo-a03bf", 
    storageBucket: "login-demo-a03bf.appspot.com", 
    messagingSenderId: "831896060677", 
    appId: "1:831896060677:web:a0616c95abc1bcdedf6d6c", 
    measurementId: "G-XWHF8K6XSV", 
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

