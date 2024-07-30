<script lang="ts">
	import { cn } from '$lib/utils';

	let isDragging = false;
	let files: File[] = [];
	let fileInput: HTMLInputElement;
	const maxSize = 1024 * 1024 * 10;

	const handleDragEnter = () => {
		isDragging = true;
	};

	const handleDragLeave = () => {
		isDragging = false;
	};

	const handleDrop = (event: DragEvent) => {};

	const handleClick = (event: MouseEvent) => {
		fileInput.click();
	};

	async function checkFileSizeAndUpload(files: File[]) {
		const allFilesValid = files.every((file) => {
			if (file.size > maxSize) {
				alert(`Error: ${file.name} exceeds 10 MB`);
				return false;
			}
			return true;
		});

		if (allFilesValid) {
			//
		}
	}

	const handleFileSelect = () => {
		if (fileInput.files) {
			const selectedFiles = Array.from(fileInput.files);
			checkFileSizeAndUpload(selectedFiles);
		}
	};
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
