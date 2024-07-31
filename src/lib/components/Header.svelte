<script lang="ts">
	import ToggleMode from './ToggleMode.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Button from './ui/button/button.svelte';
	import { signOut } from 'firebase/auth';
	import { auth } from '$lib/firebaseConfig';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Nav from './Nav.svelte';

	async function logOut() {
		await fetch('/', {
			method: 'DELETE'
		});

		await signOut(auth);
		goto('/');
	}
</script>

<header class="sticky left-0 top-0 flex items-center justify-between gap-4 bg-background px-8 py-4">
	<Nav />
	<div class="ml-auto flex items-center gap-4">
		<ToggleMode />
		{#if $page.data.user}
			<Avatar.Root>
				<Avatar.Image
					src={$page.data.user.profilePic}
					alt={`${$page.data.user.name}profile picture`}
					class="h-full w-full rounded-full p-1"
				/>
				<Avatar.Fallback>JP</Avatar.Fallback>
			</Avatar.Root>
			<Button on:click={logOut} variant="ghost" class="mx-4">Sign out</Button>
		{/if}
	</div>
</header>
