<script>
	import '../app.css';
</script>

<div class="flex flex-col bg-gray-300 h-screen justify-between">
    <header class="bg-white p-4"> 
           <h1 class="text-3xl font-bold">
               <span class="text-jibo-red">
                   &lt;Jibo Stud</span><span class="text-jibo-gray">
                   io&nbsp;/&gt;
               </span>           
           </h1>
    </header>
    <main class="mb-auto p-4">
        <slot />
    </main> 
    <footer class="text-center bg-gray-200 text-jibo-red p-4">
        Copyright &copy; 2022 Jibo Studio LLC 
    </footer>
</div>
