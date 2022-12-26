import Image from 'next/image';
import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'span'>{

}
function LineBreaker({ className, ...props }: Props) {
  return (
    <span className={`relative block w-full h-14 opacity-60 ${className || ''}`} {...props}>
      <Image src="/heart_line.png" fill alt="hr" className="object-contain" />
    </span>
  );
}

export default LineBreaker;
