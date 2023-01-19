<script>
	/**
	 * @type {any}
	 */
	let scrollPositionY;
	/**
	 * @type {number}
	 */
	let scrollPercentageY;
	/**
	 * @type {any}
	 */
	let clientHeightY;
	$: {
		scrollPercentageY = (scrollPositionY / clientHeightY) * 100;
		console.log(scrollPercentageY);
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<svelte:window bind:scrollY={scrollPositionY} bind:innerHeight={clientHeightY} />
<img src="portrait.webp" alt="back" id="background" />
<main>
	<div id="left">
		<img src="portrait.webp" alt="Portrtait" id="portrait" />
	</div>

	<div id="right">
		<section>
			Jonny is a self-produced artist from Münster, Germany with heavy influences from the 80s New
			Wave and the German "Neue Deutsche Welle" movement. He also uses elements from various more
			modern styles. In his music, Jonny merges these styles to create a mix between old and new.
			His first single was released in early 2022 and he has released numerous singles since then.
		</section>
		<div id="links">
			<a href="https://open.spotify.com/artist/6sP4WzEXeQ8vifuUgr3tZu?si=m-xXvsUYRb-vp7gCRw2T_g">
				<img src="SpotifyIcon.png" alt="spotify" class="icon" />
			</a>
			<a href="https://open.spotify.com/artist/6sP4WzEXeQ8vifuUgr3tZu?si=m-xXvsUYRb-vp7gCRw2T_g">
				<img src="YoutubeMusicIcon.png" alt="spotify" class="icon" />
			</a>
			<a href="https://open.spotify.com/artist/6sP4WzEXeQ8vifuUgr3tZu?si=m-xXvsUYRb-vp7gCRw2T_g">
				<img src="AppleMusicIcon.png" alt="spotify" class="icon" />
			</a>
			<a href="https://open.spotify.com/artist/6sP4WzEXeQ8vifuUgr3tZu?si=m-xXvsUYRb-vp7gCRw2T_g">
				<img src="DeezerIcon.png" alt="spotify" class="icon" />
			</a>
			<a href="https://open.spotify.com/artist/6sP4WzEXeQ8vifuUgr3tZu?si=m-xXvsUYRb-vp7gCRw2T_g">
				<img src="YoutubeIcon.png" alt="spotify" class="icon" />
			</a>
		</div>
	</div>
</main>

<style>
	.icon {
		width: 60px;
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
		filter: blur(100px) brightness(0.5);
		transform: scale(1);
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
	}
	#links {
		margin-top: 40px;
		margin-bottom: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	section {
		font-family: PoppinsLight;
		font-display: swap;
		color: #f3f3f3;
		width: 30vw;
		text-align: center;
	}
	#portrait {
		max-width: 30vw;
		max-height: 60vh;
		aspect-ratio: 3/4;
		z-index: 2;
		border-radius: 10px;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.321);
	}

	main {
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		left: 0px;
		align-items: center;
		margin-top: 40px;
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
</style>
