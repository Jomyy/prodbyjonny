<svelte:head>
	<title>About This Site</title>
</svelte:head>
<img src="TheAftermathIcon.webp" alt="back" id="background" />
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
		filter: blur(100px) brightness(0.5);
		transform: scale(1);
	}
	@font-face {
		font-family: 'PoppinsLight';
		src: url('/fonts/PoppinsLight.ttf') format('truetype');
	}
	.impressum {
		width: 100vw;
		height: calc(100vh - 110px);
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
