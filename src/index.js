import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import focus from '@alpinejs/focus';
import WebFont from 'webfontloader';

// https://fontawesome.com/docs/web/dig-deeper/svg-core#comparing-the-basic-packages-and-svg-core
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
	faFacebook,
	faLinkedin,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebook, faLinkedin, faInstagram);
dom.watch();

import { tns } from 'tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';

import './styles/main.scss';

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
});
