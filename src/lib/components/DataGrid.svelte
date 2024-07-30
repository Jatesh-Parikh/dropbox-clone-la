<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { Trash } from 'lucide-svelte';
	import Button from './ui/button/button.svelte';
	import type { TFiles } from '$lib/types';

	export let files: TFiles[];
</script>

<div class="my-10 rounded-md border shadow-md">
	<h1 class="py-5 pl-5 text-xl font-medium capitalize">files(5)</h1>
	{#if files.length === 0}
		<div class="flex h-[200px] items-center justify-center">No files found</div>
	{:else}
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">Type</Table.Head>
					<Table.Head>File Name</Table.Head>
					<Table.Head>File Size</Table.Head>
					<Table.Head>Date Added</Table.Head>
					<Table.Head>Link</Table.Head>
					<Table.Head class="sr-only">Delete</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body></Table.Body>
		</Table.Root>
	{/if}
</div>
