<svelte:head>
	<title>About This Site</title>
</svelte:head>
<div class="impressum">
	<section>
		<h1>Impressum</h1>
		<p>Angaben gemäß § 5 TMG</p>
		<p>
			Jonathan Enking <br />
			Amelsbürener Straße 19<br />
			48165 Münster <br />
		</p>
		<p>
			<strong>Vertreten durch: </strong><br />
			Jonathan Enking<br />
		</p>
		<p>
			<strong>Kontakt:</strong> <br />
			Telefon: 0176-16811564<br />
			E-Mail: <a href="mailto:joniamhandy@gmail.com">joniamhandy@gmail.com</a>
			<br />
		</p>
		<br />
	</section>
</div>

<style>
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
		text-align: start;
	}
</style>
