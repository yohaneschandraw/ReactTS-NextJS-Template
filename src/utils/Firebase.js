import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

// Config
const config = {
    apiKey: "AIzaSyB2RgnT_XT2DOhVLBmZBZsr3zlrJb0Poks",
    authDomain: "packaginghouseid.firebaseapp.com",
    databaseURL: "https://packaginghouseid.firebaseio.com",
    projectId: "packaginghouseid",
    storageBucket: "packaginghouseid.appspot.com",
    messagingSenderId: "650701340137",
    appId: "1:650701340137:web:366236d109d3a1f6359f78",
    measurementId: "G-HRWPNVVJK7"
};

let firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
let secondaryApp = firebase.apps.length < 2 ?firebase.initializeApp(config, "Secondary") : firebase.app("Secondary");

export { firebaseApp, secondaryApp };