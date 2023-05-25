<script>
	import Header from "$lib/components/header.svelte";
</script>

<Header />

<div class="w-full h-full flex-grow flex flex-col items-center justify-center">
	<slot />
</div>
