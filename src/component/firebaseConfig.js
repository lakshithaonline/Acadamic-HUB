import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyCllAkohnUtkogruWqnPhyvHdyV46kigO0",
        authDomain: "educationhub-55b49.firebaseapp.com",
        projectId: "educationhub-55b49",
        storageBucket: "educationhub-55b49.appspot.com",
        messagingSenderId: "707977122438",
        appId: "1:707977122438:web:e87beda5e89e427d733707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
export const firestore = getFirestore(app); 
