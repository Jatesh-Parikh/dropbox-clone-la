<script>
	import Header from '$lib/components/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
</script>

<ModeWatcher />
<Header />
<slot />
