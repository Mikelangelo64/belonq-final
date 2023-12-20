const bublesAnimationInit = (container, isReversed = false) => {
  if (!container) {
    return;
  }
  const count = 100;
  const bubblesContainer = document.createElement('div');
  bubblesContainer.classList.add('bubbles');

  if (isReversed) {
    bubblesContainer.classList.add('reversed');
  }

  if (!isReversed) {
    bubblesContainer.innerHTML = `
      <svg>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
          </filter>
        </defs>
      </svg>
    `;
  }

  container.appendChild(bubblesContainer);

  for (let i = 0; i < count; i += 1) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    bubble.style.setProperty('--size', `${2 + Math.random() * 2}rem`);
    bubble.style.setProperty('--distance', `${1 + Math.random() * 4}rem`);
    bubble.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
    bubble.style.setProperty('--time', `${4 + Math.random() * 2}s`);
    bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);

    bubblesContainer.appendChild(bubble);
  }
};

export default bublesAnimationInit;
