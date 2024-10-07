import 'virtual:svg-icons-register';
import '../css/tailwind.css';
import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

new Splide('.splide', {
    height: 705,
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 5000,
    breakpoints: {
        640: {
            height: 300,
        },
    },
}).mount();

const splidePartners = new Splide('.splide-partners', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    autoWidth: true,
    arrows: false,
    pagination: false,
    gap: '30px',
    autoScroll: {
        speed: 1,
    },
});

splidePartners.mount({ AutoScroll });
