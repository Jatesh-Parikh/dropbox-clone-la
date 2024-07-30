import { getAuth } from 'firebase-admin/auth';
import pkg from 'firebase-admin';
import {
	FB_CLIENT_EMAIL,
	FB_PRIVATE_KEY,
	NEXT_PUBLIC_FIREBASE_PROJECT_ID
} from '$env/static/private';

try {
	pkg.initializeApp({
		credential: pkg.credential.cert({
			projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			clientEmail: FB_CLIENT_EMAIL,
			privateKey: FB_PRIVATE_KEY
		})
	});
} catch (error) {
	const err = error as Error;
	if (!/already exists/u.test(err.message)) {
		console.error('Firebase admin initialization error', err.stack);
	}
}

export const adminAuth = getAuth();
