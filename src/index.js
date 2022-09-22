import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import focus from '@alpinejs/focus';
import WebFont from 'webfontloader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
	faFacebook,
	faLinkedin,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { tns } from 'tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import './styles/main.scss';

library.add(faFacebook, faLinkedin, faInstagram);
dom.watch();

WebFont.load({
	google: {
		families: ['Raleway'],
	},
});

/** Load Events */
jQuery(function () {
	window.tns = tns;
	Alpine.plugin(collapse);
	Alpine.plugin(focus);
	Alpine.start();
	window.Alpine = Alpine;
	AOS.init();
});
