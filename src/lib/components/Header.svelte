<script>
	import Logo from './Logo.svelte';
	import ToggleMode from './ToggleMode.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Button from './ui/button/button.svelte';
</script>

<header class="sticky left-0 top-0 flex items-center justify-between bg-background px-8 py-4">
	<Logo />
	<div class="flex items-center gap-4">
		<ToggleMode />
		<Avatar.Root>
			<!-- <Avatar.Image src={'https://github.com/shadcn.png'} alt="profile picture" class="h-6 w-6" /> -->
			<Avatar.Fallback>JP</Avatar.Fallback>
		</Avatar.Root>
		<Button variant="ghost" class="mx-4">Sign out</Button>
	</div>
</header>
