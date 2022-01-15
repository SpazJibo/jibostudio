<script type="javascript">
    import { onMount } from 'svelte';

    onMount(() => {
        const btn = document.querySelector('button');
        const menu = document.querySelector('.mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    });
</script>

<nav class="bg-jibo-light">
    <div class="class=max-w-xl mx-auto">
        <div class="flex items-center justify-between">
            <div class="flex items-center text-2xl font-bold m-3">
                <span class="text-jibo-purple-dark"> &lt;Jibo Stud</span><span
                    class="text-jibo-red">
                    io&nbsp;/&gt;
                </span>
            </div>

            <div class="hidden md:block flex items-center space-x-3 m-3">
                <a
                    class="text-jibo-purple-dark font-bold hover:text-jibo-purple-light"
                    href="/"
                    alt="Home">Home</a>
                <a
                    class="text-jibo-purple-dark font-bold hover:text-jibo-purple-light"
                    href="/about"
                    alt="About">About</a>
                <a
                    class="text-jibo-purple-dark font-bold hover:text-jibo-purple-light"
                    href="/contact"
                    alt="Contact">Contact</a>
            </div>

            <div class="md:hidden flex items-center space-x-3 m-3">
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="mobile-menu hidden md:hidden">
            <a
                href="/"
                alt="Home"
                class="block py-2 px-4 text-sm text-jibo-purple-dark font-bold hover:bg-gray-200">
                Home
            </a>
            <a
                href="/about"
                alt="About"
                class="block py-2 px-4 text-sm text-jibo-purple-dark font-bold hover:bg-gray-200">
                About
            </a>
            <a
                href="/contact"
                alt="Contact"
                class="block py-2 px-4 text-sm text-jibo-purple-dark font-bold hover:bg-gray-200">
                Contact
            </a>
        </div>
    </div>
</nav>
