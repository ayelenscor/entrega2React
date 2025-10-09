import { initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBuiVFUPJjUTc19024NMIHrz15UFKk9AIA",
  authDomain: "frutillaskin-db.firebaseapp.com",
  projectId: "frutillaskin-db",
  storageBucket: "frutillaskin-db.firebasestorage.app",
  messagingSenderId: "672756304317",
  appId: "1:672756304317:web:db7d21ac8d5c364b3a2ad4"
};


export const app = initializeApp(firebaseConfig)