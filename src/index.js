import './assets/banner-1.png';
import './assets/layer-about-1.png';
import './assets/layer-section-footer-1.png';
import './assets/banner-2.png';
import './assets/layer-about-2.png';
import './assets/layer-section-footer-2.png';
import './assets/banner-3.png';
import './assets/layer-about-3.png';
import './assets/layer-section-footer-3.png';
import './assets/banner-4.png';
import './assets/layer-about-4.png';
import './assets/layer-section-footer-4.png';
import './assets/banner-5.png';

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import 'swiper/swiper-bundle.css';
import './styles/styles.scss';
import { CustomCursor, Preloader } from 'vevet';
import init from './scripts/main';
import vevet from './scripts/config/vevet';
import changeTheme from './scripts/changeTheme';
import randomInteger from './scripts/config/random';

// document.addEventListener('DOMContentLoaded', () => {
//   init();
// });

// eslint-disable-next-line no-new
new Preloader({
  container: '#v-preloader',
  hide: 3000,
});

// preloader.container.style.transitionDelay = '3000s';

if (!vevet.isMobile) {
  // eslint-disable-next-line no-new
  new CustomCursor({
    container: 'body',
    render: {
      lerpToFixed: 2,
    },
    hideNativeCursor: true,
  });
}

if (!window.sessionStorage.theme) {
  window.sessionStorage.theme = randomInteger(1, 5);
}
changeTheme(window.sessionStorage.theme);

vevet.pageLoad.onLoaded(() => {
  init();
});
