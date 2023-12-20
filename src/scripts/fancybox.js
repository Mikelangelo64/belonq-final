import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm';

const fancyboxInit = () => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    ...Fancybox.defaults,
    dragToClose: false,
    backdropClick: 'close',
    compact: false,

    Toolbar: {
      absolute: true,
      display: {
        left: [],
        middle: [],
        right: ['close'],
      },
    },

    Thumbs: {
      type: 'classic',
    },

    Carousel: {
      transition: 'crossfade',
      breakpoints: {
        '(max-width: 900px)': {
          Navigation: false,
        },
      },
    },
  });
};

export default fancyboxInit;
