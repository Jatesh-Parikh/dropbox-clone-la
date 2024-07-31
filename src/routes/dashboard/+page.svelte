<script lang="ts">
	import DataGrid from '$lib/components/DataGrid.svelte';
	import DropZone from '$lib/components/DropZone.svelte';
	export let data;
</script>

<div class="mx-auto max-w-5xl">
	<DropZone />
	<DataGrid files={[]} />
</div>
