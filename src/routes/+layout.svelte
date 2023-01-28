<script>
	import { page } from '$app/stores';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import * as styleManager from '../styleManager';
	let navbarExpanded = false;
	let mobileInterfaceOn = false;
	let scrnWidth = 0;
	// NProgress css

	import 'nprogress/nprogress.css';
	$: {
		if (mobileInterfaceOn && navbarExpanded) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}
	$: {
		if (scrnWidth > 600) {
			mobileInterfaceOn = false;
		} else {
			mobileInterfaceOn = true;
		}
	}
	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16,
		showSpinner: false
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
	function changeNavBarState() {
		navbarExpanded = !navbarExpanded;
	}
</script>

<svelte:window bind:outerWidth={scrnWidth} />

<nav data-nav-open={navbarExpanded} style="">
	<p id="navname" data-expanded={navbarExpanded}>prodbyjonny</p>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<img
		src="menuicon.png"
		alt="menuiocon"
		draggable="false"
		class="menu-icon"
		data-expanded={!navbarExpanded}
		on:click={changeNavBarState}
	/>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<img
		src="menuIconClose.png"
		alt="menuiocon"
		draggable="false"
		class="menu-icon menu-icon-close"
		data-expanded={navbarExpanded}
		on:click={changeNavBarState}
	/>
	{#if (navbarExpanded && mobileInterfaceOn) || !mobileInterfaceOn}
		<div class="navbar" transition:fade={{ delay: 0, duration: 400 }}>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li
				aria-current={$page.url.pathname == '/' ? 'page' : undefined}
				on:click={changeNavBarState}
			>
				<a href="/">Home</a>
			</li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li
				aria-current={$page.url.pathname.startsWith('/releases') ? 'page' : undefined}
				on:click={changeNavBarState}
			>
				<a href="/releases">Releases</a>
			</li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li
				aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}
				on:click={changeNavBarState}
			>
				<a href="/contact">Contact</a>
			</li>
		</div>
	{/if}
</nav>
<main>
	<slot />
</main>
<footer>
	<a href="/about">About This Site</a>
</footer>

<style>
	.menu-icon {
		display: none;
	}

	@font-face {
		font-family: 'Poppins';
		src: url('/fonts/PoppinsSemiBold.ttf') format('truetype');
	}
	@font-face {
		font-family: 'PoppinsLight';
		src: url('/fonts/PoppinsLight.ttf') format('truetype');
	}
	footer {
		width: 100vw;
		height: 40px;
		background-color: #1e1e1e;
		position: fixed;
		bottom: 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
	}
	footer a {
		font-family: PoppinsLight;
		font-display: swap;
		color: #f3f3f3;
		font-size: small;
		text-decoration: none;

		text-align: center;
	}
	footer a:hover {
		text-decoration: underline;
	}
	li[aria-current='page'] {
		background-color: rgba(83, 65, 201, 0.724);
	}
	li {
		transition: background-color 100ms ease-in-out;
	}
	li:hover:not([aria-current='page']) {
		background-color: rgba(83, 65, 201, 0.173);
	}
	main {
		margin-top: 70px;
		margin-bottom: 40px;
		z-index: 5;
	}
	nav {
		position: fixed;
		top: 0px;
		width: 100vw;
		height: 70px;
		background-color: #1e1e1e77;
		backdrop-filter: blur(40px) brightness(0.7);
		-webkit-backdrop-filter: blur(40px) brightness(0.7);

		list-style: none;
		z-index: 10;
		overflow: hidden;
	}
	li {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 140px;
	}
	nav div {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		justify-content: start;
		align-items: center;
	}
	nav a {
		font-family: PoppinsLight;
		font-display: swap;
		text-decoration: none;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;

		color: #f3f3f3;
		height: 100%;
		width: 100%;
	}
	nav p {
		display: none;
	}
	@media only screen and (max-width: 600px) {
		main[data-nav-open='true'] {
			overflow-y: hidden;
			pointer-events: none;
		}

		nav p {
			font-family: 'PoppinsLight';
			color: #f3f3f3;
			margin: 0px;
			height: 70px;
			text-align: center;
			cursor: pointer;
			position: fixed;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			left: 15px;
			opacity: 1;
			transition: opacity 150ms ease-in-out;
		}
		p[data-expanded='true'] {
			opacity: 0;
		}
		.menu-icon {
			display: block;
			filter: invert();
			height: 70px;
			width: 70px;
			cursor: pointer;
			position: fixed;
			padding: 20px;
			box-sizing: border-box;
			right: 0px;

			opacity: 1;

			transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
		}
		.menu-icon[data-expanded='false'] {
			opacity: 0;
			transform: rotate(-200deg);
		}
		.menu-icon-close[data-expanded='false'] {
			opacity: 0;
			transform: rotate(200deg);
		}

		.navbar {
			bottom: 40px;
			flex-direction: column;
			justify-content: center;
			height: 100%;
		}
		nav {
			display: flex;
			flex-direction: column;
			transition: height 400ms ease-in-out;
		}
		nav[data-nav-open='true'] {
			height: 100vh;
			bottom: 0px;
			z-index: 10000;
			overflow: hidden;
		}
		li {
			width: 100%;
			height: 80px;
		}
	}
</style>
