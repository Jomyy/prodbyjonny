<script>
	// @ts-nocheck

	import ReleaseItem from '../../lib/releaseItem.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<img src="$lib/images/portrait.webp" alt="back" id="background" />
<svelte:head>
	<title>Releases</title>
</svelte:head>
<div>
	{#each data.releases as release}
		<ReleaseItem data={release} />
	{/each}
</div>

<style>
	#background {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		position: fixed;
		left: -10vw;

		z-index: -2;
		top: 0px;
		filter: blur(100px) brightness(0.5);
		transform: scale(1);
	}
	div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
	@media only screen and (max-width: 1600px) {
		div {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media only screen and (max-width: 1200px) {
		div {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	@media only screen and (max-width: 800px) {
		div {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media only screen and (max-width: 600px) {
		div {
			grid-template-columns: 1fr;
		}
	}
</style>
