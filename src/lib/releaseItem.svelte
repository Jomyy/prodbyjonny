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
			<img src="$lib/images/linkIcon.svg" alt="icon" id="icon" />
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
		-webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
		-moz-animation: fadein 1s; /* Firefox < 16 */
		-ms-animation: fadein 1s; /* Internet Explorer */
		-o-animation: fadein 1s; /* Opera < 12.1 */
		animation: fadein 1s;
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
		z-index: 9;

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
	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Firefox < 16 */
	@-moz-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Safari, Chrome and Opera > 12.1 */
	@-webkit-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Internet Explorer */
	@-ms-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Opera < 12.1 */
	@-o-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
