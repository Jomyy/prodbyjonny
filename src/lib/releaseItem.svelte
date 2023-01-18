<script>
	/**
	 * @type {{ camelcaseName: string; imageUrl: any; }}
	 */
	export let data;
</script>

<head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0"
	/>
</head>
<div id="container">
	<a href={'/release/' + data.camelcaseName}
		><div class="overlay">
			<img src="linkIcon.svg" />
			<span class="material-symbols-outlined"> link </span>
		</div>
	</a>

	<img src={data.imageUrl} alt="cover" />
</div>

<style>
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
	}
	#container:hover .overlay {
		opacity: 1;
	}
	#container:hover img {
		filter: brightness(0.5);
	}

	img {
		transition: filter 0.5s;
		width: 100%;
	}

	span {
		color: white;
		font-size: 80px;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
	}

	div {
		position: relative;
		width: 100%;
	}
</style>
