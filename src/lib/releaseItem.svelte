<script>
	/**
	 * @type {{ camelcaseName: string; imageUrl: any; }}
	 */
	export let data;
</script>

<head />
<div id="container">
	<a href={'/release/' + data.camelcaseName}
		><div class="overlay">
			<img src="linkIcon.svg" alt="icon" id="icon" />
		</div>
	</a>

	<img src={data.imageUrl} alt="cover" id="cover" />
</div>

<style>
	#container {
		width: fit-content;
		height: fit-content;
		aspect-ratio: 1/1;
		object-fit: cover;
		margin: 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
		transition: opacity 0.3s;
		z-index: 10;

		margin: 0px;
	}
	#container:hover .overlay {
		opacity: 1;
	}
	#container:hover #cover {
		filter: brightness(0.5);
	}
	#cover {
		transition: filter 0.5s;
		width: 100%;
	}

	#icon {
		color: white;
		font-size: 80px;
		fill: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
	}

	div {
		position: relative;
		width: 100%;
		aspect-ratio: 1/1;
		margin: 0px;
	}
</style>
