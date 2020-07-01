import React from 'react';

interface Svg {
  width: number;
  height: number;
}

export const CollectionSVG = (props: Svg): JSX.Element => {
  const { width, height } = props;
  return (
    <svg
      style={{ width: `${width}px`, height: `${height}px` }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30 30'
    >
      <defs>
        <linearGradient id='a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#B4EC51'></stop>
          <stop offset='100%' stopColor='#429321'></stop>
        </linearGradient>
      </defs>
      <path
        fill='#FFF'
        fillRule='evenodd'
        d='M6.465 11.4c-.956 0-1.733.769-1.733 1.714v10.457c0 .946.777 1.715 1.733 1.715h17.07c.956 0 1.733-.77 1.733-1.715V13.114c0-.945-.777-1.714-1.733-1.714H6.465zm0 15.6C4.554 27 3 25.462 3 23.571V13.114c0-1.89 1.554-3.428 3.465-3.428h17.07c1.911 0 3.465 1.537 3.465 3.428v10.457C27 25.462 25.446 27 23.535 27H6.465zM9.496 4.714a.86.86 0 01-.866-.857A.86.86 0 019.496 3h11.008c.478 0 .866.383.866.857a.861.861 0 01-.866.857H9.496zM7.244 8.058a.861.861 0 01-.866-.858c0-.474.388-.857.866-.857h15.512c.478 0 .866.383.866.857a.861.861 0 01-.866.858H7.244z'
      ></path>
    </svg>
  );
};

export const GamesSvg = (props: Svg): JSX.Element => {
  const { width, height } = props;
  return (
    <svg
      style={{ width: `${width}px`, height: `${height}px` }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30 30'
    >
      <path
        fill='#FFF'
        fillRule='evenodd'
        d='M22.15 24.425H8.657V11.953c0-.131.105-.237.236-.237h16.536v10.426a2.284 2.284 0 01-2.279 2.283M4.571 5.81c0-.13.106-.235.236-.235h6.727a.23.23 0 01.167.07l1.444 1.447c.337.337.803.53 1.278.53h8.727a2.284 2.284 0 012.279 2.284v.235H8.893c-.996 0-1.807.813-1.807 1.812v12.472H6.85a2.284 2.284 0 01-2.279-2.283V5.81zm9.852.237a.237.237 0 01-.167-.069l-1.443-1.447A1.793 1.793 0 0011.533 4H4.808A1.81 1.81 0 003 5.81v16.332A3.858 3.858 0 006.85 26h16.3c2.123 0 3.85-1.73 3.85-3.858V9.906a3.858 3.858 0 00-3.85-3.859h-8.727z'
      ></path>
    </svg>
  );
};
