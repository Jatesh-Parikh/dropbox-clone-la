import { db } from '$lib/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

async function editFileName(id: string, fileName: string) {
	if (id == '') throw new Error('No file selected');
	if (fileName == '') throw new Error('Filename cannot be empty');

	const docRef = doc(db, 'files', id);
	await updateDoc(docRef, {
		fileName
	});
}

export default editFileName;
