const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
        extend: {
            colors: {
                'jibo-red': '#520400',
                'jibo-dark': '#404535',
                'jibo-light': '#F6F4F5',
                'jibo-purple-dark': '#5A189A',
                'jibo-purple-light': '#E4D6FF'
            },
            container: {
                center: true,
            },
        }
	},

	plugins: []
};

module.exports = config;
