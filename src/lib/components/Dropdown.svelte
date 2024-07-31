<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { ChevronDown } from 'lucide-svelte';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="flex items-center gap-1 font-semibold text-gray-700 duration-200 hover:text-primary dark:text-gray-100 dark:hover:text-[#0000f0]"
	>
		Products <ChevronDown class="mt-[4px] h-4 w-4" />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Label>Dropbox</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>Replay</DropdownMenu.Item>
			<DropdownMenu.Item>Backup</DropdownMenu.Item>
			<DropdownMenu.Item>Capture</DropdownMenu.Item>
			<DropdownMenu.Item>Dash (Beta)</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
