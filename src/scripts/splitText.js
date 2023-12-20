import { SplitText } from 'vevet';

const splitTextInit = (container) => {
  if (!container) {
    return undefined;
  }

  // if (!vevet.isMobile) {
  const splitText = new SplitText({
    container,
    appendLines: true,
    appendLetters: true,
  });
  // }

  return splitText;
};

export default splitTextInit;
