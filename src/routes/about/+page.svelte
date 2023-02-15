<svelte:head>
	<title>About This Site</title>
</svelte:head>
<img src="$lib/images/TheAftermathIcon.webp" alt="back" id="background" />
<div class="impressum">
	<section>
		<h1>About this site</h1>
		<p>Angaben gemäß § 5 TMG</p>
		<p>
			Jonathan Enking <br />
			Amelsbürener Straße 19<br />
			48165 Münster <br />
		</p>
		<p>
			<strong>Represented by: </strong><br />
			Jonathan Enking<br />
		</p>
		<p>
			<strong>Contact:</strong>

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
		filter: blur(100px) brightness(0.5);
		transform: scale(1);
	}

	.impressum {
		width: 100vw;
		height: calc(100vh - 110px);
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
	@media only screen and (max-width: 870px) {
		main {
			width: 100vw;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			height: fit-content;
			margin-top: 40px;
			margin-bottom: 40px;
		}

		section {
			margin-top: 10px;
			width: 70vw;
		}
		#portrait {
			max-width: none;
			max-height: none;
			height: 50vh;
			width: auto;
			margin-top: 0px;
			margin: 0px;
		}
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
