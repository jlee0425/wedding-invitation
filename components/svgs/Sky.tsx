import React from 'react';

interface Props {
  offset: number;
}

function Sky({ offset }: Props) {
  return (
    <svg viewBox="0 0 1399 833" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1399 0.247803H-1V832.915H1399V0.247803Z" fill="url(#paint0_linear_2_184)" />
      <defs>
        <linearGradient id="paint0_linear_2_184" x1="699" y1="832.944" x2="699" y2="-322.164" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset={offset} stopColor="#FABFA0" />
          <stop offset="1" stopColor="#fa210d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Sky;
