import { StaticTimeline, Timeline } from 'vevet';
import splitTextInit from './splitText';

const initHeadingTimeline = () => {
  const splitTextContainer = document.querySelector('.section-main__title');
  if (!splitTextContainer) {
    return undefined;
  }

  const heading = splitTextInit(splitTextContainer);
  if (!heading) {
    return undefined;
  }

  const timeline = new Timeline({
    easing: [0.25, 0.1, 0.25, 1],
    duration: 1500,
  });

  const { letters } = heading;

  letters.forEach(({ el }, index) => {
    const letter = el;
    const scopeStart = (1 / letters.length) * index;
    const tm = new StaticTimeline({
      nestedScope: [scopeStart, 1],
      easing: [0.68, -0.6, 0.32, 1.6],
    });

    tm.addCallback('progress', ({ easing }) => {
      letter.style.transform = `translate(0, ${(1 - easing) * 100}%)`;
      letter.style.opacity = `${easing}`;
    });
    timeline.addNestedTimeline(tm);
  });

  timeline.addCallback('end', () => {
    splitTextContainer.classList.add('visible');

    letters.forEach(({ el }) => {
      const letter = el;
      letter.style = '';
    });
  });
  return timeline;
};

export const initAdditionalElementsTimeline = (domElements) => {
  if (domElements.length === 0) {
    return undefined;
  }

  const elements = domElements;
  const shift = 50;

  const timeline = new Timeline({
    easing: [0.25, 0.1, 0.25, 1],
    duration: 2000,
  });

  elements.forEach((item, index) => {
    const element = item;
    element.style.opacity = 0;
    const scopeStart = (1 / elements.length) * index;

    const tm = new StaticTimeline({
      nestedScope: [scopeStart, 1],
      easing: [0.25, 0.1, 0.25, 1],
    });

    tm.addCallback('progress', ({ easing }) => {
      element.style.transform = `translate(0, ${shift - shift * easing}px)`;
      element.style.opacity = `${easing}`;
    });

    timeline.addNestedTimeline(tm);
  });

  return timeline;
};

export default initHeadingTimeline;
