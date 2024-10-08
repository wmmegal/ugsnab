import 'virtual:svg-icons-register';
import '../css/tailwind.css';
import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Alpine from 'alpinejs';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

window.Alpine = Alpine;

Alpine.data('app', () => ({
    showFixedHeader: false,
    rule: true,
    showMenu: window.matchMedia('(min-width: 1200px)').matches,
    init() {
        document.addEventListener('scroll', () => {
            this.showFixedHeader = window.scrollY > 300;
        });
    },
}));

Alpine.start();

// sliders
const splideCta = document.querySelector('.splide-cta');

if (splideCta) {
    new Splide('.splide-cta', {
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
}

const splidePartners = document.querySelector('.splide-partners');

if (splidePartners) {
    new Splide('.splide-partners', {
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
    }).mount({ AutoScroll });
}

//
Fancybox.bind('[data-fancybox]');
