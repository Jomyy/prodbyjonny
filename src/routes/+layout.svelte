<script>
	import { page } from '$app/stores';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	// NProgress css
	import 'nprogress/nprogress.css';

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
</script>

<nav>
	<div>
		<li aria-current={$page.url.pathname == '/' ? 'page' : undefined}>
			<a href="/">Home</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/releases') ? 'page' : undefined}>
			<a href="/releases">Releases</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
			<a href="/contact">Contact</a>
		</li>
	</div>
</nav>
<main>
	<slot />
</main>
<footer>
	<a href="/about">Impressum</a>
</footer>

<style>
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
		background-color: darkslateblue;
	}
	main {
		margin-top: 70px;
		margin-bottom: 40px;
	}
	nav {
		position: fixed;
		top: 0px;
		width: 100vw;
		height: 70px;
		background-color: #1e1e1e;
		list-style: none;
		z-index: 100;
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

	@media only screen and (max-width: 600px) {
		nav {
			top: auto;
			bottom: 40px;
		}
		nav div {
			justify-content: space-around;
		}
		li {
			width: 100%;
		}
		main {
			margin-top: 0px;
			margin-bottom: 110px;
		}
	}
</style>
