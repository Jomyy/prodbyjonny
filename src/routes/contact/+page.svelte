<svelte:head>
	<title>Contact Me</title>
</svelte:head>
<img src="TheAftermathIcon.webp" alt="back" id="background" />
<img src="TheAftermathIcon.webp" alt="banner" id="banner" />
<div class="impressum">
	<section>
		<p>
			<strong>Contact:</strong> <br />
			Tel: 0176-16811564<br />
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
	}
	@font-face {
		font-family: 'PoppinsLight';
		src: url('/fonts/PoppinsLight.ttf') format('truetype');
	}
	.impressum {
		width: 100vw;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #f3f3f3;
		font-family: PoppinsLight;
		font-display: swap;
		text-align: start;
	}
</style>
