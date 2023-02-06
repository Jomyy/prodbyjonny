<svelte:head>
	<title>Home</title>
	<meta property="og:title" content={'About Me'} />
	<meta property="og:image" content={'portrait.webp'} />
</svelte:head>

<img src="portrait.webp" alt="back" id="background" draggable="false" />
<main>
	<div id="left">
		<img src="portrait.webp" alt="Portrtait" id="portrait" draggable="false" />
	</div>

	<div id="right">
		<section>
			Jonny is a self-produced artist from Münster, Germany with heavy influences from the 80s New
			Wave and the German "Neue Deutsche Welle" movement. He also uses elements from various more
			modern styles. In his music, Jonny merges these styles to create a mix between old and new.
			His first single was released in early 2022 and he has released numerous singles since then.
		</section>
		<div id="links">
			<a
				href="https://open.spotify.com/artist/6sP4WzEXeQ8vifuUgr3tZu?si=m-xXvsUYRb-vp7gCRw2T_g"
				draggable="false"
			>
				<img src="SpotifyLogoHR.webp" alt="spotify" class="icon" draggable="false" />
			</a>
			<a
				href="https://music.youtube.com/channel/UCkxj6IUOxepqs6tOEYAIvBg?feature=share"
				draggable="false"
			>
				<img src="YTMusicLogoHr.webp" alt="spotify" class="icon" draggable="false" />
			</a>
			<a href="https://music.apple.com/de/artist/jonny/1643013637" draggable="false">
				<img src="AppleMusicLogoHR.webp" alt="spotify" class="icon" draggable="false" />
			</a>
			<a href="https://youtube.com/@prodbyjonny" draggable="false">
				<img src="YoutubeLogoHR.webp" alt="spotify" class="icon" draggable="false" />
			</a>
			<a href="https://www.instagram.com/jonathanzverbot/" draggable="false">
				<img src="InstagramIcon.webp" alt="spotify" class="icon" draggable="false" />
			</a>
		</div>
	</div>
</main>

<style>
	.icon {
		width: 50px;
	}
	#left {
		background-size: contain;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#background {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		position: fixed;
		left: -10vw;

		z-index: -2;
		top: 0px;
		filter: blur(120px) brightness(0.5);
		transform: scale(1);
		animation: infinite 100s warble ease-in-out;
		-webkit-animation: infinite 100s warble ease-in-out;
		-moz-animation: infinite 100s warble ease-in-out;
		-o-animation: infinite 100s warble ease-in-out;
	}
	#right {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	@font-face {
		font-family: 'Poppins';
		src: url('/fonts/PoppinsSemiBold.ttf') format('truetype');
	}
	@font-face {
		font-family: 'PoppinsLight';
		src: url('/fonts/PoppinsLight.ttf') format('truetype');
	}
	#links a {
		margin-left: 10px;
		margin-right: 10px;
		user-select: none;
	}
	#links a img {
		user-select: none;
	}

	#links {
		user-select: none;
		margin-top: 40px;
		margin-bottom: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		-webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
		-moz-animation: fadein 1s; /* Firefox < 16 */
		-ms-animation: fadein 1s; /* Internet Explorer */
		-o-animation: fadein 1s; /* Opera < 12.1 */
		animation: fadein 1s;
		background-color: #0f0f0d53;
		padding: 15px;
		border-radius: 15px;
		border-width: 0.5px;
		border-color: #1d1b19;
		border-style: solid;
	}
	section {
		font-family: PoppinsLight;
		font-display: swap;
		color: #f3f3f3;
		width: 30vw;
		text-align: center;
		-webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
		-moz-animation: fadein 1s; /* Firefox < 16 */
		-ms-animation: fadein 1s; /* Internet Explorer */
		-o-animation: fadein 1s; /* Opera < 12.1 */
		animation: fadein 1s;
	}
	#portrait {
		max-width: 30vw;
		max-height: 60vh;
		aspect-ratio: 3/4;
		z-index: 2;
		border-radius: 10px;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.321);
		-webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
		-moz-animation: fadein 1s; /* Firefox < 16 */
		-ms-animation: fadein 1s; /* Internet Explorer */
		-o-animation: fadein 1s; /* Opera < 12.1 */
		animation: fadein 1s;
	}

	main {
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		left: 0px;
		align-items: center;

		margin-bottom: 40px;
		height: calc(100vh - 110px);
	}

	@media only screen and (max-width: 870px) {
		main {
			width: 100vw;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			height: fit-content;
			margin-top: 100px;
			margin-bottom: 40px;
		}

		section {
			margin-top: 40px;
			width: 70vw;
		}
		#portrait {
			max-width: none;
			max-height: none;
			height: 50vh;
			width: auto;

			margin: 0px;
		}
	}
	@keyframes warble {
		0% {
			transform: translateY(0px) translateX(0px) scale(1);
		}
		25% {
			transform: translateY(210px) translateX(-240px) scale(1.3);
		}
		35% {
			transform: translateX(10px);
		}
		50% {
			transform: translateY(-150px) scale(0.4);
		}
		75% {
			transform: translateY(310px) translateX(400px) scale(1.9);
		}
		100% {
			transform: translateY(0px) translateX(0px);
		}
	}
	@-webkit-keyframes warble {
		0% {
			transform: translateY(0px) translateX(0px) scale(1);
		}
		25% {
			transform: translateY(210px) translateX(-240px) scale(1.3);
		}
		35% {
			transform: translateX(10px);
		}
		50% {
			transform: translateY(-150px) scale(0.4);
		}
		75% {
			transform: translateY(310px) translateX(400px) scale(1.9);
		}
		100% {
			transform: translateY(0px) translateX(0px);
		}
	}
	@-moz-keyframes warble {
		0% {
			transform: translateY(0px) translateX(0px) scale(1);
		}
		25% {
			transform: translateY(210px) translateX(-240px) scale(1.3);
		}
		35% {
			transform: translateX(10px);
		}
		50% {
			transform: translateY(-150px) scale(0.4);
		}
		75% {
			transform: translateY(310px) translateX(400px) scale(1.9);
		}
		100% {
			transform: translateY(0px) translateX(0px);
		}
	}
	@-o-keyframes warble {
		0% {
			transform: translateY(0px) translateX(0px) scale(1);
		}
		25% {
			transform: translateY(210px) translateX(-240px) scale(1.3);
		}
		35% {
			transform: translateX(10px);
		}
		50% {
			transform: translateY(-150px) scale(0.4);
		}
		75% {
			transform: translateY(310px) translateX(400px) scale(1.9);
		}
		100% {
			transform: translateY(0px) translateX(0px);
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
