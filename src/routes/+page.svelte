<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from 'lucide-svelte';
</script>

<div class="bg-[#1e1919]">
	<div class="mx-auto flex max-w-[777px] flex-col items-center pt-[72px] text-center text-white">
		<h1 class="text-5xl">Securely collaborate on your content anywhere, anytime</h1>
		<p class="mt-8 text-lg">
			With Dropbox, you get a full suite of tools designed to help you create, share, manage, and
			track content more efficiently. Plus, proven cloud storage you can trust.
		</p>
		<Button class="mt-10 p-6 font-semibold capitalize text-white">
			Get Started Now <ArrowRight class="ml-2 h-5 w-5" />
		</Button>
	</div>
	<video class="mt-10" autoplay playsinline muted loop>
		<track kind="captions" />
		<source
			src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4"
			type="video/mp4"
		/>
	</video>
</div>
