import Swiper, { Navigation } from 'swiper';
import vevet from './config/vevet';

const swipersInit = () => {
  const sliders = {};

  const swiperGallery = new Swiper('.gallery-slider.swiper', {
    modules: [Navigation],

    navigation: {
      nextEl: '.gallery-slider__controls .gallery-slider-next',
      prevEl: '.gallery-slider__controls .gallery-slider-previous',
    },

    slidesPerView: 4,
    spaceBetween: 6,
    allowTouchMove: vevet.isMobile,
    breakpoints: {
      660: {
        slidesPerView: 6,
      },
      900: {
        slidesPerView: 4,
      },
    },
  });
  sliders.catalog = swiperGallery;
  return sliders;
};

export default swipersInit;
