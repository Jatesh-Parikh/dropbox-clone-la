<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { db, storage } from '$lib/firebaseConfig';
	import { cn } from '$lib/utils';
	import { addDoc, collection, serverTimestamp, updateDoc } from 'firebase/firestore';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
	import toast from 'svelte-french-toast';

	let isDragging = false;
	let files: File[] = [];
	let fileInput: HTMLInputElement;
	const maxSize = 1024 * 1024 * 10;
	let uid = $page.data.user.uid;

	function handleDragEnter() {
		isDragging = true;
	}

	function handleDragLeave() {
		isDragging = false;
	}

	function handleDrop(event: DragEvent) {
		isDragging = false;
		if (event.dataTransfer?.files) {
			const droppedFiles = Array.from(event.dataTransfer?.files);
			checkFileSizeAndUpload(droppedFiles);
		}
	}

	function handleClick(event: MouseEvent) {
		fileInput.click();
	}

	function handleFileSelect() {
		if (fileInput.files) {
			const selectedFiles = Array.from(fileInput.files);
			checkFileSizeAndUpload(selectedFiles);
		}
	}

	async function checkFileSizeAndUpload(files: File[]) {
		const allFilesValid = files.every((file) => {
			if (file.size > maxSize) {
				toast.error(`Error: ${file.name} exceeds 10 MB`);
				return false;
			}
			return true;
		});

		if (allFilesValid) {
			await toast.promise(Promise.all(files.map((file) => handleUpload(file))), {
				loading: 'Uploading...',
				success: 'Uploaded successfully!',
				error: 'Could not upload'
			});
			await invalidateAll();
		}
	}

	async function handleUpload(file: File) {
		const docRef = await addDoc(collection(db, 'files'), {
			uid,
			fileName: file.name,
			size: file.size,
			type: file.type,
			timestamp: serverTimestamp()
		});

		const fileRef = ref(storage, `user/${uid}/files/${docRef.id}`);
		await uploadBytes(fileRef, file);
		const downloadUrl = await getDownloadURL(fileRef);
		await updateDoc(docRef, {
			downloadUrl
		});
	}
</script>

<button
	class={cn('h-44 w-full rounded-lg border-4 border-dashed bg-border/50', {
		'border-primary bg-primary/50': isDragging
	})}
	on:dragenter|preventDefault={handleDragEnter}
	on:dragleave|preventDefault={handleDragLeave}
	on:dragover|preventDefault
	on:drop|preventDefault={handleDrop}
	on:click={handleClick}
>
	{#if isDragging}
		Drop the file here.
	{:else}
		Drag and drop a file here or click to add file(s)
	{/if}

	<input type="file" multiple hidden bind:this={fileInput} on:change={handleFileSelect} />
</button>
