import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const { userId } = locals;
	if (userId) {
		redirect(307, '/dashboard');
	}
};
