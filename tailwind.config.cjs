const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
        extend: {
            colors: {
                'jibo-red': '#740024',
                'jibo-gray': '#4D4D4D',
            },
            container: {
                center: true,
            }
        }
	},

	plugins: []
};

module.exports = config;
