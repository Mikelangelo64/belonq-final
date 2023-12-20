const initCursorHover = () => {
  const actionObjects = document.querySelectorAll('a, button');
  const cursor = document.querySelector('.v-custom-cursor');
  if (actionObjects.length === 0 || !cursor) {
    return;
  }
  const cursorInner = cursor.querySelector('.v-custom-cursor__inner');

  actionObjects.forEach((actionObject) => {
    // console.log(actionObject);
    actionObject.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorInner.classList.add('hover');
    });
    actionObject.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorInner.classList.remove('hover');
    });
  });
};

export default initCursorHover;
