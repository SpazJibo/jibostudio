<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
</script>

<div
	class="flex flex-col bg-gradient-to-b from-jibo-purple-dark to-jibo-red 
    h-screen"
>
	<Nav />
	<main class="mb-auto p-4">
		<slot />
	</main>
	<footer class="text-center bg-gray-200 text-jibo-red p-4">
		Copyright &copy; 2022 Jibo Studio LLC
	</footer>
</div>
