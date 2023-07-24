import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB5xlA-9fXtrNW1V_W_81JXmvH1ag-lQtQ",
    authDomain: "disneyplus-clone-1e38e.firebaseapp.com",
    projectId: "disneyplus-clone-1e38e",
    storageBucket: "disneyplus-clone-1e38e.appspot.com",
    messagingSenderId: "504390484350",
    appId: "1:504390484350:web:5559f349c7e9f7d050b32f",
    measurementId: "G-W4T3PR4E5R"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db=firebaseapp.firestore();

const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();

const storage=firebase.storage();

export { auth, provider, storage };
export default db;

