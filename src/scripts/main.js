import swipersInit from './sliders';
import scrollBarInit from './scrollbar';
import fancyboxInit from './fancybox';
import initHeadingTimeline, {
  initAdditionalElementsTimeline,
} from './headingAnimtaion';
import footerItemsAnimationInit from './footerItemsAnimation';
import vevet from './config/vevet';
import initCursorHover from './cursorSettings';
import changeMail from './changeMail';
import backgroundParallax, {
  backgroundParallaxInit,
} from './backgroundParallax';
// import bublesAnimationInit from './bubblesAnimation';

const init = () => {
  if (!vevet.isMobile) {
    // eslint-disable-next-line no-new
    initCursorHover();
  }
  backgroundParallax(window);
  backgroundParallaxInit();
  scrollBarInit();
  swipersInit();
  fancyboxInit();

  footerItemsAnimationInit();

  // bubbles
  // const bubblesFooter = document.querySelector('.background__footer');
  // const bubblesHeader = document.querySelector('.background__header');
  // bublesAnimationInit(bubblesFooter);
  // bublesAnimationInit(bubblesHeader, true);

  setTimeout(() => {
    changeMail('info@belonqcommunity.com');
  }, 1000);

  const headingTimeline = initHeadingTimeline();
  headingTimeline.play();

  const additionalElements = document.querySelectorAll(
    '.section-main__img, .section-subtitle, .section-info, .section-additional'
  );
  const additionalElementsTimeline =
    initAdditionalElementsTimeline(additionalElements);

  headingTimeline.addCallback('end', () => {
    additionalElementsTimeline.play();
  });
};

export default init;
