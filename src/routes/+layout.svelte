<script>
	import Header from '$lib/components/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from 'svelte-french-toast';
	import '../app.css';
</script>

<ModeWatcher />
<Toaster />
<Header />
<slot />
