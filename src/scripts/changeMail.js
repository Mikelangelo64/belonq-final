import vevet from './config/vevet';
import { footerItemAnimationHandler } from './footerItemsAnimation';

const changeMail = (trueMail = 'info@belonqcommunity.com') => {
  const elements = document.querySelectorAll('.footer-contacts__item.email');
  elements.forEach((el) => {
    const element = el;
    element.innerHTML = 'E-mail';
    element.href = `mailto:${trueMail}`;

    if (!vevet.isMobile) {
      footerItemAnimationHandler(element, 'crypto#');
    }
  });
};

export default changeMail;
