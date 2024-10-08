import forms from '@tailwindcss/forms';
import hamburgers from 'tailwind-hamburgers';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        container: {
            center: true,
            padding: '15px',
            screens: {
                sm: '375px',
                md: '575px',
                lg: '767px',
                xl: '1200px',
            },
        },
        colors: {
            primary: '#481f53',
            secondary: '#696969',
            white: '#FFFFFF',
            black: '#1c1c1c',
            dark: '#27173b',
        },
        extend: {
            fontSize: {
                '4xl': ['45px', '1.2'],
                '3xl': ['35px', '1.2'],
            },
        },
    },
    plugins: [forms, hamburgers],
};
