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

    if (index === 4) {
      const svgContainer = document.createElement('span');
      svgContainer.classList.add('heading-svg');

      svgContainer.innerHTML = `
        <svg
          width="165"
          height="183"
          viewBox="0 0 165 183"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_521_3651)">
            <path
              d="M99.8297 115.864C100.789 116.972 101.782 118.188 102.742 119.296L103.53 119.189C97.9797 111.681 92.7382 103.959 87.805 96.5593C87.5994 96.6665 87.4966 96.881 87.2225 97.0598V96.5593L87.017 96.881L87.3938 97.3815L87.5994 97.2743C87.5994 97.2743 87.4966 97.3815 87.3938 97.4888L88.7642 99.4192C90.8197 102.672 92.9437 105.926 95.6502 110.18C96.2326 111.002 97.7057 113.004 99.8297 115.864ZM133.917 153.079C130.902 150.434 127.99 147.717 125.078 144.75L123.126 144.857L123.502 145.25L122.714 145.965C125.25 149.004 127.75 151.935 130.286 155.01C134.26 159.586 138.062 164.054 141.831 168.595L140.769 169.596L140.666 169.488C136.966 165.234 133.3 160.873 129.6 156.511L124.256 150.327C127.065 155.01 128.71 158.549 128.059 159.443C127.1 160.551 123.674 158.62 116.685 152.257C114.458 150.112 112.231 148.003 110.073 145.751L80.8505 147.574L62.2138 151.113H42.7893L42.5837 151.506C42.2069 151.9 41.8985 152.329 41.6245 152.722C41.3162 153.115 41.0421 153.651 40.7337 154.045C40.631 154.545 41.3161 155.975 41.2134 155.868C41.2134 155.868 39.843 155.367 39.6717 155.761C39.3634 156.154 38.9865 156.475 38.781 156.976C38.4727 157.298 38.1986 157.477 37.8903 157.906C37.6847 158.12 37.4107 158.513 37.1024 158.728C36.7255 159.049 36.2116 159.049 35.8348 158.835C35.3552 158.513 34.3617 157.905 33.608 158.12C31.8608 158.835 32.7172 158.62 30.1136 158.513C29.5312 159.514 29.1544 160.658 28.572 161.659C28.572 161.766 28.6747 163.268 28.4692 163.196C28.1609 162.982 27.4072 164.305 27.4072 164.519C27.3044 164.841 27.0989 165.02 27.0303 165.341C27.0303 165.341 27.0646 165.27 27.1331 165.127C26.7563 165.735 26.2424 167.057 26.2424 167.057C26.1396 166.664 25.8655 167.379 25.7627 167.451C25.8655 167.343 25.9683 167.236 25.9683 167.236C26.0711 167.629 26.0711 167.844 26.0711 167.236C26.1739 167.129 26.2766 167.129 26.3794 167.022C26.2766 167.236 26.2766 167.415 26.1739 167.629C26.1739 167.629 25.9683 167.629 25.9683 167.737C27.0304 168.058 32.3747 167.415 31.9978 169.059C31.9978 169.059 31.9636 169.131 31.895 169.274L31.7923 169.488C23.7415 166.95 25.0091 168.166 26.0711 166.557C26.0711 166.557 26.3794 165.949 26.1739 165.842C26.0711 165.842 26.0711 165.949 26.0711 165.842C25.9683 165.735 25.8656 165.949 25.9683 165.735C26.1739 165.341 26.6535 165.341 26.5507 164.912C26.5507 164.698 26.3452 164.519 26.5507 164.412C27.1331 163.911 26.9276 164.197 27.2359 163.697C27.2359 163.482 27.4415 163.196 27.5442 163.089C27.7498 162.875 27.5442 162.982 27.5442 162.696C27.5442 162.195 28.5035 161.588 28.6062 161.159C28.6062 160.837 28.4007 158.406 28.9146 158.406C28.8118 158.513 28.9146 158.728 29.0173 158.799C29.1201 158.692 29.1201 158.585 29.1201 158.406H28.9146C28.9146 158.406 29.0173 158.299 29.1201 158.299C29.0173 157.905 29.0173 157.369 28.7433 157.083C27.8525 155.546 28.0581 154.331 27.0989 152.936C27.0989 152.936 27.3044 152.722 27.5784 152.329L9.7983 154.259C8.63351 154.366 7.57148 153.937 6.68076 153.151C5.79004 152.329 5.41321 151.22 5.51599 150.005L6.68076 122.299V27.7414C6.68076 26.6332 7.05762 25.5964 7.94834 24.8099C8.83906 23.9877 9.7983 23.5945 10.9631 23.7017L20.1101 24.7027C18.0546 22.1645 16.0333 19.519 13.9093 16.8735C10.9973 13.3343 10.0381 10.6889 10.9974 8.15065C11.8881 5.71968 14.6973 3.5747 19.3564 0.857732L19.7333 0.750488C27.3044 1.25098 32.8543 3.5747 37.2051 6.93516C40.3226 8.25789 41.6587 9.08013 41.8643 9.58062C42.0698 10.1884 41.8643 10.5101 41.3847 10.6889C45.0846 14.6571 48.0994 19.4118 51.1826 24.3809C51.8678 25.5964 52.6557 26.8119 53.4094 28.0274L53.615 28.2419L121.207 35.4275C121.515 34.9271 121.892 34.4266 122.269 34.1048C123.16 33.4971 124.016 32.8893 124.907 32.2816C125.113 31.8883 125.215 31.5666 125.387 31.2806C124.599 31.6738 123.845 31.9956 122.954 32.3888C122.851 32.0671 123.742 31.3878 123.913 31.2806C123.811 31.1734 123.708 31.1734 123.605 31.1734C123.502 30.6729 123.228 30.9589 123.811 30.3511C124.599 29.5289 124.393 30.1366 124.393 30.7444C125.284 30.2439 126.037 29.8149 126.928 29.3144C127.237 28.9211 127.511 28.4921 127.819 28.0989C128.401 27.4912 129.087 26.4902 129.463 25.8824C129.84 25.2747 130.251 24.6669 130.628 24.1664C130.936 23.7732 131.313 23.237 131.69 22.8437C131.998 22.3432 132.273 21.8427 132.649 21.3065C132.752 20.806 131.759 19.09 131.759 19.1615C131.759 19.1615 133.609 19.8765 133.883 19.4832C134.191 18.9828 134.671 18.5538 134.945 18.1605C135.253 17.66 135.63 17.5528 136.007 17.1595C136.315 16.8378 136.692 16.3373 137.069 16.1585C137.446 15.8368 138.234 15.944 138.61 16.1585C139.296 16.659 140.666 17.4813 141.625 17.2668C143.852 16.5518 142.893 16.659 146.01 17.1595C146.798 15.9441 147.552 14.8358 148.34 13.6203C148.34 13.6203 148.237 11.4753 148.648 11.6898C149.128 12.0116 151.183 9.04438 151.457 8.75839C151.56 8.54389 151.663 8.43664 151.766 8.36514C151.971 7.97189 152.245 7.65015 152.451 7.36416C152.656 7.14966 152.759 6.97091 152.93 6.75641C153.033 6.75641 153.89 6.25592 153.616 6.64916C153.718 6.64916 153.513 6.86366 153.513 6.86366C153.307 7.2569 152.554 7.9719 152.554 7.9719C152.554 7.9719 152.074 8.79413 152.245 8.90138C152.348 8.90138 152.348 8.79413 152.348 8.90138C152.451 9.00863 152.554 8.79414 152.451 9.00863C151.971 9.61638 151.492 9.33038 151.56 10.0096V10.3314C151.663 10.7246 150.978 10.7246 150.601 11.0464C150.498 11.3681 150.224 11.7613 149.916 12.0473C149.607 12.2618 149.916 12.1546 149.916 12.4406C149.813 12.8338 149.71 12.8338 149.539 13.0483C149.23 13.2628 149.059 13.5488 148.751 13.7633C148.545 13.8706 148.443 13.9778 148.374 14.0851V13.9778C148.374 13.9778 148.271 14.1923 148.168 14.2996C148.271 14.2996 148.271 14.1923 148.374 14.0851C148.374 14.4068 148.477 17.4455 147.894 17.4455C148.203 17.1238 147.415 16.6233 147.209 16.4445C147.106 16.7663 147.004 17.0523 146.901 17.374C147.209 17.374 147.586 17.4813 147.86 17.4813C147.552 17.803 146.969 17.9818 147.175 18.4823C147.278 18.804 146.969 19.09 146.867 19.4118C146.867 19.7335 146.764 22.8437 146.969 22.8437C146.969 22.8437 145.428 24.6669 145.599 24.9887C145.976 25.4892 144.537 27.0264 144.229 27.5269C143.646 28.3491 143.064 29.0641 142.687 29.9579C142.379 30.5656 140.837 32.1028 140.255 32.8893C139.09 34.3193 137.925 35.7136 136.76 37.1435L155.226 39.1813C157.178 39.3958 158.72 41.1117 158.72 43.2567V138.815C158.72 140.96 157.076 142.676 155.02 142.891L140.632 143.82L142.584 145.965L141.694 146.787L145.394 151.256L145.599 151.363L144.537 152.472V152.364H144.434C143.27 151.042 142.002 149.433 140.46 147.681C139.57 146.573 138.508 145.357 137.446 144.035H137.069C139.193 146.466 141.351 149.004 143.475 151.435C148.922 157.727 154.266 163.911 159.2 169.882L158.138 170.883L157.932 170.561C154.129 166.199 150.361 161.838 146.558 157.476L145.599 158.406H145.496C142.687 155.153 139.775 151.721 136.863 148.253L136.555 148.468C138.302 151.614 139.261 153.937 138.782 154.652C138.096 155.582 136.658 155.153 133.917 153.115H133.814L133.917 153.079ZM73.9988 59.0222L78.6579 66.0291L82.5292 71.8206C83.6939 73.4293 84.8587 75.0738 86.1263 76.6825C87.1883 74.752 88.2503 72.9288 89.141 71.1056C89.141 70.8911 88.9355 71.2128 89.141 70.7838C89.6207 70.0688 89.8262 69.9616 90.5114 69.4611C90.6141 69.5684 90.6141 69.7829 90.7169 69.9616C90.8197 69.6399 91.0253 69.3539 91.0938 69.0321C90.991 68.9249 90.7854 68.8176 90.7169 68.7104C90.5114 68.8176 90.3401 68.9249 90.1346 69.1036C90.1346 68.8891 90.6142 68.1741 90.8197 68.1026C91.0253 67.8881 91.128 67.7809 91.2993 67.7094C91.2993 67.8166 91.4021 67.9239 91.5049 67.9239C91.9845 66.9944 92.2928 66.4939 93.0465 65.7074C93.1493 65.4929 93.3548 65.3142 93.4234 65.0997V65.8147C93.4234 65.8147 93.8002 65.3142 94.0058 64.9924C94.2113 64.5992 95.4788 63.0619 95.8557 62.6687C96.4381 62.1682 98.6649 61.1315 98.5621 61.1315C98.8705 61.1315 99.0418 61.1315 99.3501 61.0242L73.9988 58.9865V59.0222ZM112.677 114.112C113.465 115.113 114.321 116.257 115.315 117.544L115.623 117.437C114.664 116.329 113.67 115.221 112.711 114.077L112.677 114.112ZM54.3001 72.9288C51.765 69.1751 49.1614 65.4214 46.8318 61.8822C45.667 60.1662 44.5022 58.343 43.3374 56.5913L39.7403 56.2695L36.3487 58.4145V122.728C36.3487 123.05 36.4514 123.228 36.657 123.443C36.8625 123.657 37.1366 123.765 37.4449 123.765L47.928 123.05C48.3049 122.549 48.8188 122.12 49.1956 121.727C49.778 121.226 50.3604 120.797 50.9428 120.19C51.5252 119.689 52.0048 118.974 52.2104 118.259C52.2104 118.259 53.6835 116.543 54.2659 115.721C54.6427 115.113 55.8075 114.112 55.8075 114.112C56.8695 112.79 57.9315 111.467 59.0963 110.144C59.0963 110.144 59.7815 108.929 60.2611 108.428C62.3851 105.497 64.5434 102.637 66.7702 99.8125C67.5582 98.8115 69.785 96.5593 69.785 96.5593L70.1618 96.0588C64.7147 88.3369 59.4732 80.5435 54.3344 72.9288H54.3001ZM115.691 62.3827L115.486 62.5972C113.841 64.7422 112.094 66.7441 110.347 68.7819C109.662 69.6041 107.812 71.2128 107.812 71.2128C107.606 71.5346 107.435 71.8206 107.23 72.0351C106.168 73.1433 105.106 74.18 104.112 75.2883C104.112 75.2883 102.57 76.7183 102.468 77.2188C102.468 77.7192 102.159 78.041 101.782 78.5415C100.035 80.9725 99.8297 80.758 97.6029 82.7957C96.9177 83.6179 96.1298 84.5117 95.4789 85.3339H95.102L93.9373 87.0499L94.9992 88.4799C102.365 98.1322 109.97 107.57 118.124 117.187L129.977 115.578V64.5634C129.977 63.9557 129.6 63.5624 129.087 63.5624L115.691 62.4542V62.3827ZM88.7984 121.334C85.2013 116.758 81.6042 112.003 78.2126 107.32H78.1098C77.4246 107.32 76.1571 108.535 75.883 108.857C73.8275 111.002 71.3266 113.433 69.4766 115.542C67.935 117.58 66.5646 119.796 65.023 121.834L84.0708 120.619L86.6059 122.335L88.8327 121.334H88.7984ZM32.546 168.595C32.546 168.595 32.546 168.38 32.546 168.487V168.595C32.8543 168.273 32.6487 168.273 32.546 168.595ZM33.2311 167.272L32.9228 167.594C32.9228 167.451 32.9228 167.451 32.9228 167.594C32.9228 167.594 32.82 167.701 32.7173 167.701C32.82 167.594 32.9228 167.486 32.9228 167.379C32.9228 167.486 33.2311 167.165 33.2311 167.272ZM25.3517 166.95L25.5572 166.557C25.66 166.879 25.7628 166.95 25.66 166.557C25.66 166.557 25.7627 166.557 25.7627 166.45V166.771C25.7627 166.771 25.3859 167.093 25.3859 166.986L25.3517 166.95ZM152.896 7.2569C152.896 7.2569 152.999 7.14966 153.102 7.04241L152.896 7.14965C153.033 6.81599 152.999 6.85174 152.793 7.2569C152.793 7.2569 152.588 7.36415 152.485 7.4714C152.485 7.79315 152.862 7.36415 152.862 7.2569H152.896ZM26.8933 166.45C26.6878 166.128 26.9961 165.627 27.0989 165.341C27.2016 165.663 27.2016 165.842 27.3044 166.056C27.3044 166.056 27.0989 166.771 26.9276 166.45H26.8933ZM154.335 6.04142L154.129 6.14867V6.04142C154.129 6.04142 154.335 5.93417 154.335 6.04142ZM154.815 5.21918L154.609 5.43368C154.609 5.32643 154.609 5.21918 154.506 5.43368L154.404 5.54093C154.404 5.54093 154.506 5.32643 154.609 5.32643C154.609 5.32643 154.815 5.11193 154.815 5.21918ZM153.342 7.65016L152.965 7.9719C152.965 8.18639 152.965 7.36415 152.862 8.07914C152.862 8.07914 152.793 8.1149 152.656 8.1864C152.656 8.1864 152.862 7.86465 152.965 7.79315C152.862 7.79315 153.342 7.47141 153.342 7.6859V7.65016Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_521_3651"
              x="0.499512"
              y="0.750488"
              width="163.7"
              height="182.132"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="7" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_521_3651"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_521_3651"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      `;

      console.log(letter);
      // splitTextContainer.appendChild(svgContainer);
      letter.after(svgContainer);
    }
  });

  splitTextContainer.setAttribute('aria-label', 'crypto community');

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
