import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
export const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
};
!firebase.apps.length && firebase.initializeApp(firebaseConfig);
export const Firebase = firebase;
export const Auth = firebase.auth();
export const Store = firebase.firestore();
export const Storage = firebase.storage();
