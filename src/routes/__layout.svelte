<script>
	import '../app.css';
</script>

<header class="bg-gray-300 text-jibo-red p-5">
    <div class="container">
        <h1 class="text-3xl font-bold ">
            Jibo Stud<span class="text-jibo-gray">io</span>
        </h1>
    </div>
</header>

<div class="m-5">
    <slot />
</div>

<div class="text-center absolute inset-x-0 bottom-0 h-16 bg-gray-300 
    text-jibo-red p-5">
    Copyright &copy; 2022 Jibo Studio LLC 
</div>
