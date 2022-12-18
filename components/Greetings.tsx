import React from 'react';
import {
  useSpring, animated, useSpringRef, useSprings, useChain,
} from '@react-spring/web';

const NAMES = ['루나', '정규'];
function Greetings() {
  const titleRef = useSpringRef();
  const nameRef = useSpringRef();

  const titleAnimation = useSpring({
    ref: titleRef,
    from: { opacity: 0, y: -100 },
    to: { opacity: 1, y: 0 },
    config: {
      duration: 1000,
    },
  });

  const [nameAnimations] = useSprings(2, (i) => ({
    ref: nameRef,
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: i * 500,
    config: {
      duration: 1000,
    },
  }));

  useChain([titleRef, nameRef], [0, 1], 500);

  return (
    <section className="section">
      <animated.h1 className="justify-self-start mb-20" style={titleAnimation}>결혼합니다.</animated.h1>
      <div className="grid place-items-center grid-cols-2 w-full">
        {nameAnimations.map((animation, i) => (
          <animated.p key={NAMES[i]} style={animation}>{NAMES[i]}</animated.p>
        ))}
      </div>
    </section>
  );
}

export default Greetings;
