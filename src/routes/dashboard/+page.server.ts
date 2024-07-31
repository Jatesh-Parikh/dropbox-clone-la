import deleteFile from '$lib/mutations/deleteFile.server.js';
import editFileName from '$lib/mutations/editFileName.server.js';
import getFilesCount from '$lib/queries/getFilesCount.js';
import getUser from '$lib/queries/getUser.js';
import getUserFiles from '$lib/queries/getUserFiles.js';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const { userId } = locals;
	if (!userId) {
		redirect(307, '/');
	}
	return {
		user: await getUser(userId),
		files: await getUserFiles(userId),
		count: await getFilesCount(userId)
	};
};

export const actions = {
	editFileName: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') as string;
		const fileName = data.get('fileName') as string;

		try {
			await editFileName(id, fileName);
			return { editFileNameSuccess: 'File edited successfully' };
		} catch (error) {
			const errorMessage = (error as Error).message;
			return fail(422, { editFileNameError: errorMessage });
		}
	},
	deleteFile: async ({ locals, request }) => {
		const data = await request.formData();
		const id = data.get('id') as string;
		const { userId } = locals;
		try {
			await deleteFile(id, userId!);
			return { deleteFileSuccess: 'File deleted successfully!' };
		} catch (error) {
			const errorMessage = (error as Error).message;
			return fail(422, { deleteFileError: errorMessage });
		}
	}
};
