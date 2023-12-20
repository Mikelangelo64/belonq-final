import { AnimationFrame, StaticTimeline, Timeline } from 'vevet';
import splitTextInit from './splitText';
import vevet from './config/vevet';

const randomLetterHandler = (element, possible, letters, index, timeline) => {
  const { el, content } = element;
  const scopeStart = (1 / letters.length) * index;

  const tm = new StaticTimeline({
    nestedScope: [0, scopeStart],
    easing: [0.25, 0.1, 0.25, 1],
  });

  const frame = new AnimationFrame({ fps: 10 }, false);
  frame.addCallback('frame', () => {
    el.innerHTML = possible.charAt(Math.floor(Math.random() * possible.length));
  });

  // setTimeout(() => {
  //   frame.pause();
  //   el.innerHTML = content;
  // }, 100 * index);

  tm.addCallback('progress', ({ easing }) => {
    if (easing === 1) {
      frame.pause();
      el.innerHTML = content;
    } else if (easing === 0) {
      frame.play();
    }
  });

  timeline.addNestedTimeline(tm);
};

export const footerItemAnimationHandler = (element, possible) => {
  const { letters } = splitTextInit(element);
  if (letters.length === 0) {
    return;
  }

  const timeline = new Timeline({
    easing: [0.25, 0.1, 0.25, 1],
    duration: 1200,
  });

  letters.forEach((letter, index) => {
    randomLetterHandler(letter, possible, letters, index, timeline);
  });

  element.addEventListener('mouseenter', () => {
    // console.log(timeline);
    timeline.progress = 0;
    timeline.play();
  });
};

const footerItemsAnimationInit = () => {
  const elements = [...document.querySelectorAll('.footer-contacts__item')];
  const possible = 'crypto#';

  if (elements.length === 0 || vevet.isMobile) {
    return undefined;
  }

  elements.forEach((element) => {
    if (element.classList.contains('email')) {
      return;
    }

    footerItemAnimationHandler(element, possible);
  });

  return elements;
};

export default footerItemsAnimationInit;
