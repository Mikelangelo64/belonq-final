import banner1 from '../assets/banner-1.png';
import about1 from '../assets/layer-about-1.png';
import footer0 from '../assets/layer-section-footer-0.png';
// import footer1 from '../assets/layer-section-footer-1.png';
// import layerHeader1 from '../assets/layer-header-1.png';
// import layerFooter1 from '../assets/layer-footer-1.png';

import banner2 from '../assets/banner-2.png';
import about2 from '../assets/layer-about-2.png';
// import footer2 from '../assets/layer-section-footer-2.png';
// import layerHeader2 from '../assets/layer-header-2.png';
// import layerFooter2 from '../assets/layer-footer-2.png';

import banner3 from '../assets/banner-3.png';
import about3 from '../assets/layer-about-3.png';
// import footer3 from '../assets/layer-section-footer-3.png';
// import layerHeader3 from '../assets/layer-header-3.png';
// import layerFooter3 from '../assets/layer-footer-3.png';

import banner4 from '../assets/banner-4.png';
import about4 from '../assets/layer-about-4.png';
// import footer4 from '../assets/layer-section-footer-4.png';
// import layerHeader4 from '../assets/layer-header-4.png';
// import layerFooter4 from '../assets/layer-footer-4.png';

import banner5 from '../assets/banner-5.png';

const changeTheme = (random = 1) => {
  const themes = {
    1: {
      number: 1,
      banner: banner1,
      about: about1,
      footer: footer0,
      // layerHeader: layerHeader4,
      // layerFooter: layerFooter4,
      color: '#A6F805',
    },
    2: {
      number: 2,
      banner: banner2,
      about: about2,
      footer: footer0,
      // layerHeader: layerHeader1,
      // layerFooter: layerFooter1,
      color: '#A6F805',
    },
    3: {
      number: 3,
      banner: banner3,
      about: about3,
      footer: footer0,
      // layerHeader: layerHeader2,
      // layerFooter: layerFooter2,
      color: '#A6F805',
    },
    4: {
      number: 4,
      banner: banner4,
      about: about4,
      footer: footer0,
      // layerHeader: layerHeader3,
      // layerFooter: layerFooter3,
      color: '#A6F805',
    },
    5: {
      number: 5,
      banner: banner5,
      about: about1,
      footer: footer0,
      // layerHeader: layerHeader4,
      // layerFooter: layerFooter4,
      color: '#A6F805',
    },
  };

  document.body.style.setProperty(
    '--color-current-theme',
    themes[random].color
  );

  const themeContainer = document.querySelectorAll(
    '.background__image, .section-info__bg, .section-additional__bg, .background__footer, .background__header'
  );

  if (themeContainer.length === 0) {
    return;
  }

  const srcArr = [];

  themeContainer.forEach((containerDom) => {
    const container = containerDom;
    const image = container.querySelector('img');
    if (!image) {
      return;
    }

    // console.log(container.classList[0]);
    switch (container.classList[0]) {
      case 'section-info__bg':
        image.src = themes[random].about;
        break;

      case 'section-additional__bg':
        image.src = themes[random].footer;
        // image.src = `./assets/layer-section-footer-${random}.png`;
        break;

      case 'background__image':
        image.src = themes[random].banner;
        container.style.background = `url(${themes[random].banner})`;
        // image.src = `./assets/banner-${random}.png`;
        break;

      // case 'background__header':
      //   image.src = themes[random].layerHeader;
      //   break;

      // case 'background__footer':
      //   image.src = themes[random].layerFooter;
      //   break;

      default:
        break;
    }
    srcArr.push(image.src);
  });

  // // console.dir(themeContainer);
  // console.log(srcArr);
};

export default changeTheme;
