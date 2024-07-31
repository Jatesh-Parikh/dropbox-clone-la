<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { Trash } from 'lucide-svelte';
	import Button from './ui/button/button.svelte';
	import type { TFiles } from '$lib/types';
	import { idStore } from '$lib/stores/idStore';
	import { deleteModalStore, renameFileModalStore } from '$lib/stores/modalStore';
	import prettyBytes from 'pretty-bytes';
	import RenameModal from './modals/RenameModal.svelte';
	import DeleteModal from './modals/DeleteModal.svelte';

	export let files: TFiles[];
	export let count: number;
	function getFileType(mime: string) {
		const type = mime.split('/')[1];
		return type;
	}
</script>

<div class="my-10 rounded-md border shadow-md">
	<h1 class="py-5 pl-5 text-xl font-medium capitalize">files({count})</h1>
	{#if count === 0}
		<div class="flex h-[200px] items-center justify-center">No files found</div>
	{:else}
		<Table.Root>
			<Table.Header>
				<Table.Row class="overflow-hidden">
					<Table.Head class="w-[75px]">Type</Table.Head>
					<Table.Head>File Name</Table.Head>
					<Table.Head>File Size</Table.Head>
					<Table.Head>Date Added</Table.Head>
					<Table.Head>Link</Table.Head>
					<Table.Head class="sr-only">Delete</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each files as file, i (i)}
					<Table.Row>
						<Table.Cell class="font-medium">{getFileType(file.type)}</Table.Cell>
						<Table.Cell>
							<Button
								variant="link"
								on:click={() => {
									idStore.set(file.id);
									renameFileModalStore.setTrue();
								}}
								class="text-gray-700 dark:text-gray-100"
							>
								{file.fileName}
							</Button>
						</Table.Cell>
						<Table.Cell>{prettyBytes(file.size)}</Table.Cell>
						<Table.Cell>{file.timestamp}</Table.Cell>
						<Table.Cell>
							<Button
								download
								variant="link"
								target="_blank"
								href={file.downloadUrl}
								class="text-gray-700 dark:text-gray-100"
							>
								Download
							</Button>
						</Table.Cell>
						<Table.Cell>
							<Button
								size="icon"
								variant="outline"
								on:click={() => {
									idStore.set(file.id);
									deleteModalStore.setTrue();
								}}
							>
								<Trash />
							</Button>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	{/if}
</div>

<RenameModal />
<DeleteModal />
