<script>
	import { MetaTags } from 'svelte-meta-tags';
	/** @type {import('./$types').PageData} */
	export let data;
	let infoClass = '0';
</script>

<svelte:head>
	<meta property="twitter:title" content={data.post.releaseData.name} />
	<meta property="og:image" content={data.post.imageUrl} />
	<title>{data.post.releaseData.name}</title>
</svelte:head>

<img src={data.post.imageUrl} id="background" alt="Background" />

<div id="container">
	<div id="releaseData">
		<img src={data.post.imageUrl} id="cover" alt="SongCover" />
		<div>
			<h2>{data.post.releaseData.name}</h2>
		</div>
	</div>
	<ul id="links">
		{#if data.post.releaseData.spotifyurl != ''}
			<div class="link">
				<div class="streamingName">
					<img src="$lib/images/SpotifyIcon.png" alt="SpotifyIcon" class="StreamingIcon" />
					<p>Spotify</p>
				</div>
				<div class="linkDiv">
					<a href={data.post.releaseData.spotifyurl}>Play</a>
				</div>
			</div>
		{/if}
		{#if data.post.releaseData.applemusicurl != ''}
			<div class="link">
				<div class="streamingName">
					<img src="$lib/images//AppleMusicIcon.png" alt="AppleMusicIcon" class="StreamingIcon" />
					<p>Apple Music</p>
				</div>
				<div class="linkDiv">
					<a href={data.post.releaseData.applemusicurl}>Play</a>
				</div>
			</div>
		{/if}

		{#if data.post.releaseData.youtubemusicurl != ''}
			<div class="link">
				<div class="streamingName">
					<img
						src="$lib/images//YoutubeMusicIcon.png"
						alt="YoutubeMusicIcon"
						class="StreamingIcon"
					/>
					<p>Youtube Music</p>
				</div>
				<div class="linkDiv">
					<a href={data.post.releaseData.youtubemusicurl}>Play</a>
				</div>
			</div>
		{/if}

		{#if data.post.releaseData.deezerurl != ''}
			<div class="link">
				<div class="streamingName">
					<img src="$lib/images//DeezerIcon.png" alt="DeezerIcon" class="StreamingIcon" />
					<p>Deezer</p>
				</div>
				<div class="linkDiv">
					<a href={data.post.releaseData.deezerurl}>Play</a>
				</div>
			</div>
		{/if}
	</ul>
</div>

<style>
	#releaseData div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 0px;
	}
	#releaseData div a {
		align-self: auto;
		margin-left: 20px;
	}
	.StreamingIcon {
		width: 40px;
		margin-right: 15px;
	}
	.streamingName {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 30px;
	}

	@font-face {
		font-family: 'PoppinsLight';
		src: url('/fonts/PoppinsLight.ttf') format('truetype');
		font-display: swap;
	}
	#links {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 40px;
	}
	.link:nth-child(odd) {
		height: 80px;
		display: flex;
		width: 100%;
		font-family: PoppinsLight;
		font-display: swap;
		align-items: center;
		justify-content: space-between;
	}
	.link:nth-child(even) {
		display: flex;
		width: 100%;
		height: 80px;
		font-family: PoppinsLight;
		font-display: swap;
		align-items: center;
		justify-content: space-between;
		background-color: #181818;
	}

	a {
		color: #f3f3f3;
		text-decoration: none;
		background-color: darkslateblue;
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		font-size: large;
		font-family: PoppinsLight;
		font-display: swap;
		border-radius: 6px;
		text-align: center;
		align-self: center;
	}
	.linkDiv {
		margin-right: 30px;
	}
	#container {
		margin-top: 20vh;
		margin-left: 15vw;
		margin-right: 15vw;
		max-width: 700px;
		display: flex;
		flex-direction: column;
		color: #f3f3f3;
	}
	#cover {
		box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.685);
		border-radius: 15px;
		width: 300px;
	}
	h2 {
		margin: 0;
		margin-left: 20px;
		font-size: 40px;
		line-height: normal;
		font-family: PoppinsLight;
		font-display: swap;
		text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.173);
	}
	#releaseData {
		transition: margin-left 1s;
		display: flex;
		align-items: flex-end;

		margin: 0px;
	}
	#background {
		width: 100vw;
		height: 30vh;
		object-fit: cover;
		position: absolute;
		z-index: -2;
		top: 0px;
		filter: blur(50px);
		transform: scale(1);
	}
	@media only screen and (max-width: 600px) {
		#container {
			margin-top: 12vh;
			width: 100%;
			height: 100%;
			display: flex;
			margin-left: 0;
			justify-items: center;
		}
		#releaseData {
			display: flex;

			justify-content: center;
			flex-direction: column;
			align-items: center;
		}
		h2 {
			margin-left: 0;
			margin-top: 10px;
		}
		#releaseData div {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		#releaseData div a {
			align-self: auto;
			margin-left: 0px;
		}
	}
</style>
