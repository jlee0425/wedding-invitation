import React from 'react';

interface Props {
  offset: number;
}

function Sun({ offset }: Props) {
  return (
    <svg
      width="20%"
      viewBox="0 0 194 207"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M167.446 27.5634C246.246 137.832 129.347 262.604 25.8465 178.57C-52.9535 68.301 64.0465 -56.4711 167.446 27.5634Z" fill="url(#paint0_linear_2_197)" />
      <defs>
        <linearGradient id="paint0_linear_2_197" x1="96.6463" y1="209.796" x2="96.6463" y2="23.1944" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FABFA0" stopOpacity="0" />
          <stop offset={offset} stopColor="#FF6C5F" />
          <stop offset="0.9995" stopColor="#F0594B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Sun;
