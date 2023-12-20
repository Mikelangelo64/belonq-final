import vevet from './config/vevet';
import { footerItemAnimationHandler } from './footerItemsAnimation';

const changeMail = (trueMail = 'info@belonqclub.com') => {
  const elements = document.querySelectorAll('.footer-contacts__item.email');
  elements.forEach((el) => {
    const element = el;
    element.innerHTML = `${trueMail}`;
    element.href = `mailto:${trueMail}`;

    if (!vevet.isMobile) {
      footerItemAnimationHandler(element, 'crypto#');
    }
  });
};

export default changeMail;
