// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { browser } from '$app/environment';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB7inY5Fzdug1IVoVb9Cv74Gl9P1wCov1M',
	authDomain: 'dropbox-clone-c6613.firebaseapp.com',
	projectId: 'dropbox-clone-c6613',
	storageBucket: 'dropbox-clone-c6613.appspot.com',
	messagingSenderId: '485881666525',
	appId: '1:485881666525:web:b1eac05f5f8adca7b2b434',
	measurementId: 'G-QVFCS65Y56'
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
if (browser) {
	getAnalytics(app);
}

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
