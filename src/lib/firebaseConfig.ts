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
	apiKey: import.meta.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: import.meta.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.NEXT_PUBLIC_FIREBASE_APP_ID,
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
