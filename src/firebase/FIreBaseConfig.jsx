import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCU-zIc6fbzjz2DsAX4_CY8tpX_4RN8XPU",
  authDomain: "swetaecommerce.firebaseapp.com",
  projectId: "swetaecommerce",
  storageBucket: "swetaecommerce.appspot.com",
  messagingSenderId: "793066676991",
  appId: "1:793066676991:web:f7bffa6d91787f337662ca",
  measurementId: "G-6D3ZH8JTF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)

// const analytics = getAnalytics(app);
export {fireDB,auth}