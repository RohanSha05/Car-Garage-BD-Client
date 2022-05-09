import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/* // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};
 */
// Initialize Firebase
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVQERce5Fi9oaUnJ_GDZUkNozLVg4wlQg",
    authDomain: "car-garage-bd-ef64a.firebaseapp.com",
    projectId: "car-garage-bd-ef64a",
    storageBucket: "car-garage-bd-ef64a.appspot.com",
    messagingSenderId: "482042048605",
    appId: "1:482042048605:web:7f961949f7e9f316e05db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;