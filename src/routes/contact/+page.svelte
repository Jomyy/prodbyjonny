<svelte:head>
	<title>Contact Me</title>
</svelte:head>
<img src="$lib/images/TheAftermathIcon.webp" alt="back" id="background" />
<img src="$lib/images/TheAftermathIcon.webp" alt="banner" id="banner" />
<div class="impressum">
	<section>
		<p>
			<strong>Contact:</strong> <br />

			E-Mail: <a href="mailto:contact@prodbyjonny.de">contact@prodbyjonny.de</a>
			<br />
		</p>
		<br />
	</section>
</div>

<style>
	a {
		color: #f3f3f3;
	}
	#background {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		position: fixed;
		left: -10vw;

		z-index: -2;
		top: 0px;
		filter: blur(100px) brightness(0.2);
		transform: scale(1);
	}
	#banner {
		width: 100vw;
		-webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
		-moz-animation: fadein 1s; /* Firefox < 16 */
		-ms-animation: fadein 1s; /* Internet Explorer */
		-o-animation: fadein 1s; /* Opera < 12.1 */
		animation: fadein 1s;
	}

	.impressum {
		width: 100vw;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #f3f3f3;
		font-family: 'Poppins', sans-serif;
		font-weight: lighter;
		text-align: start;
		-webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
		-moz-animation: fadein 1s; /* Firefox < 16 */
		-ms-animation: fadein 1s; /* Internet Explorer */
		-o-animation: fadein 1s; /* Opera < 12.1 */
		animation: fadein 1s;
	}
	@keyframes fadein {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}

	/* Firefox < 16 */
	@-moz-keyframes fadein {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}

	/* Safari, Chrome and Opera > 12.1 */
	@-webkit-keyframes fadein {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}

	/* Internet Explorer */
	@-ms-keyframes fadein {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}

	/* Opera < 12.1 */
	@-o-keyframes fadein {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}
</style>
