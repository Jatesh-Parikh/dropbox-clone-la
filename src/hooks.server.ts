import { adminAuth } from '$lib/server/firebaseAdmin';

export const handle = async ({ event, resolve }) => {
	const { cookies, locals } = event;
	const sessionCookie = cookies.get('__session');

	try {
		const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!);
		locals.userId = decodedClaims.uid;
	} catch (e) {
		locals.userId = null;
		return resolve(event);
	}
	return resolve(event);
};
