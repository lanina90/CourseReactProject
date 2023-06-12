import React from 'react';

export const iconsDefs = {
  film: {
    className: 'icon icon-film',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<path
      d="M0 4v24h32v-24h-32zM6 26h-4v-4h4v4zM6 18h-4v-4h4v4zM6 10h-4v-4h4v4zM24 26h-16v-20h16v20zM30 26h-4v-4h4v4zM30 18h-4v-4h4v4zM30 10h-4v-4h4v4zM12 10v12l8-6z"></path>),
  },
  home: {
    className: 'icon icon-home2',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<path
      d="M16 1l-16 16 3 3 3-3v13h8v-6h4v6h8v-13l3 3 3-3-16-16zM16 14c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path>)  //<g fill="red" stroke="none">
  },
  compass: {
    className: 'icon icon-compass2',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<path
      d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM3 16c0-7.18 5.82-13 13-13 3.424 0 6.538 1.325 8.86 3.488l-12.86 5.512-5.512 12.86c-2.164-2.322-3.488-5.436-3.488-8.86zM18.286 18.286l-8.003 3.43 3.43-8.003 4.573 4.573zM16 29c-3.424 0-6.539-1.325-8.86-3.488l12.86-5.512 5.512-12.86c2.164 2.322 3.488 5.436 3.488 8.86 0 7.18-5.82 13-13 13z"></path>),
  },
  spinner: {
    className: 'icon icon-spinner11',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<path
      d="M32 12h-12l4.485-4.485c-2.267-2.266-5.28-3.515-8.485-3.515s-6.219 1.248-8.485 3.515c-2.266 2.267-3.515 5.28-3.515 8.485s1.248 6.219 3.515 8.485c2.267 2.266 5.28 3.515 8.485 3.515s6.219-1.248 8.485-3.515c0.189-0.189 0.371-0.384 0.546-0.583l3.010 2.634c-2.933 3.349-7.239 5.464-12.041 5.464-8.837 0-16-7.163-16-16s7.163-16 16-16c4.418 0 8.418 1.791 11.313 4.687l4.687-4.687v12z"></path>),
  },
  fire: {
    className: 'icon icon-fire',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<path
      d="M10.031 32c-2.133-4.438-0.997-6.981 0.642-9.376 1.795-2.624 2.258-5.221 2.258-5.221s1.411 1.834 0.847 4.703c2.493-2.775 2.963-7.196 2.587-8.889 5.635 3.938 8.043 12.464 4.798 18.783 17.262-9.767 4.294-24.38 2.036-26.027 0.753 1.646 0.895 4.433-0.625 5.785-2.573-9.759-8.937-11.759-8.937-11.759 0.753 5.033-2.728 10.536-6.084 14.648-0.118-2.007-0.243-3.392-1.298-5.312-0.237 3.646-3.023 6.617-3.777 10.27-1.022 4.946 0.765 8.568 7.555 12.394z"></path>),
  },
  happy: {
    className: 'icon icon-happy',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<path
      d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16 18.711c3.623 0 7.070-0.963 10-2.654-0.455 5.576-4.785 9.942-10 9.942s-9.544-4.371-10-9.947c2.93 1.691 6.377 2.658 10 2.658zM8 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3z"></path>),
  },
  happy2: {
    className: 'icon icon-happy2',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<path
      d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM22 8c1.105 0 2 1.343 2 3s-0.895 3-2 3-2-1.343-2-3 0.895-3 2-3zM10 8c1.105 0 2 1.343 2 3s-0.895 3-2 3-2-1.343-2-3 0.895-3 2-3zM16 28c-5.215 0-9.544-4.371-10-9.947 2.93 1.691 6.377 2.658 10 2.658s7.070-0.963 10-2.654c-0.455 5.576-4.785 9.942-10 9.942z"></path>),
  },
  manWomen: {
    className: 'icon icon-man-women',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<g>
      <path d="M8 3c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
      <path d="M26 3c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
      <path d="M8 8h-6c-1.105 0-2 0.895-2 2v10h2v12h2.5v-12h1v12h2.5v-12h2v-10c0-1.105-0.895-2-2-2z"></path>
      <path
        d="M30.469 16l1.531-1.109-4.165-6.441c-0.185-0.281-0.499-0.45-0.835-0.45h-8c-0.336 0-0.65 0.169-0.835 0.45l-4.165 6.441 1.531 1.109 3.458-4.487 1.202 2.804-4.191 7.683h3.833l0.667 10h2v-10h1v10h2l0.667-10h3.833l-4.191-7.683 1.202-2.804 3.458 4.487z"></path>
    </g>),
  },
  magicWand: {
    className: 'icon icon-magic-wand',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<g>
      <path
        d="M8 6l-4-4h-2v2l4 4zM10 0h2v4h-2zM18 10h4v2h-4zM20 4v-2h-2l-4 4 2 2zM0 10h4v2h-4zM10 18h2v4h-2zM2 18v2h2l4-4-2-2zM31.563 27.563l-19.879-19.879c-0.583-0.583-1.538-0.583-2.121 0l-1.879 1.879c-0.583 0.583-0.583 1.538 0 2.121l19.879 19.879c0.583 0.583 1.538 0.583 2.121 0l1.879-1.879c0.583-0.583 0.583-1.538 0-2.121zM15 17l-6-6 2-2 6 6-2 2z"></path>
    </g>),
  },
  hipster: {
    className: 'icon icon-hipster',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<g>
      <path
        d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2-0.895 2-2 2-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2-0.895 2-2 2-2-0.895-2-2z"></path>
      <path
        d="M21.121 16.879c-1.172-1.172-3.071-1.172-4.243 0s-1.172 3.071 0 4.243c0.038 0.038 0.076 0.074 0.115 0.109 2.704 2.453 9.006-0.058 9.006-3.23-1.938 1.25-3.452 0.306-4.879-1.121z"></path>
      <path
        d="M10.879 16.879c1.172-1.172 3.071-1.172 4.243 0s1.172 3.071 0 4.243c-0.038 0.038-0.076 0.074-0.115 0.109-2.704 2.453-9.006-0.058-9.006-3.23 1.938 1.25 3.452 0.306 4.879-1.121z"></path>
    </g>),
  },
  hipster2: {
    className: 'icon icon-hipster2',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (
      <path
        d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM22 8c1.105 0 2 0.895 2 2s-0.895 2-2 2-2-0.895-2-2 0.895-2 2-2zM10 8c1.105 0 2 0.895 2 2s-0.895 2-2 2-2-0.895-2-2 0.895-2 2-2zM16.994 21.23c-0.039-0.035-0.078-0.072-0.115-0.109-0.586-0.586-0.878-1.353-0.879-2.121-0 0.768-0.293 1.535-0.879 2.121-0.038 0.038-0.076 0.074-0.115 0.109-2.704 2.453-9.006-0.058-9.006-3.23 1.938 1.25 3.452 0.306 4.879-1.121 1.172-1.172 3.071-1.172 4.243 0 0.586 0.586 0.879 1.353 0.879 2.121 0-0.768 0.293-1.535 0.879-2.121 1.172-1.172 3.071-1.172 4.243 0 1.427 1.427 2.941 2.371 4.879 1.121 0 3.173-6.302 5.684-9.006 3.23z"></path>),
  },
  enter: {
    className: 'icon icon-enter',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<path d="M12 16h-10v-4h10v-4l6 6-6 6zM32 0v26l-12 6v-6h-12v-8h2v6h10v-18l8-4h-18v8h-2v-10z"></path>),
  },
  exit: {
    className: 'icon icon-exit',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<path d="M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"></path>),
  },
  star: {
    className: 'icon icon-star',
    viewBox: '0 0 32 32',
    width: '1em',
    height: '1em',
    body: (<path d="M31.998,2.478c0.279,0,0.463,0.509,0.463,0.509l8.806,18.759l20.729,3.167l-14.999,15.38l3.541,21.701
		l-18.54-10.254l-18.54,10.254l3.541-21.701L2,24.912l20.729-3.167l8.798-18.743C31.527,3.002,31.719,2.478,31.998,2.478 M31.998,0
		c-0.775,0-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343
		c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957
		c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719
		c0.302,0.166,0.636,0.25,0.968,0.25c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704
		l14.294-14.657c0.523-0.537,0.703-1.321,0.465-2.031c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15
		C33.479,0.448,32.773,0,31.998,0L31.998,0z"/>),
  }

}
