import {
  animated, useChain, useSpring, useSpringRef, useSprings,
} from '@react-spring/web';
import Image from 'next/image';
import LineBreaker from './LineBreaker';

const NAMES = ['루나와', '정규,'];
const DESCRIPTION = ['2023년 1월 6일, 오후 3시.', '치바, 카모가와칸'];

function Greetings() {
  const titleRef = useSpringRef();
  const nameRef = useSpringRef();
  const descRef = useSpringRef();

  const titleAnimation = useSpring({
    ref: titleRef,
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: {
      duration: 1000,
    },
  });

  const [nameAnimations] = useSprings(2, (i) => ({
    ref: nameRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: i * 500,
    config: {
      duration: 1000,
    },
  }));

  const [descAnimations] = useSprings(2, (i) => ({
    ref: descRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: i * 500,
    config: {
      duration: 1000,
    },
  }));

  useChain([nameRef, titleRef, descRef], [0, 0.5, 1], 1000);

  return (
    <section className="section font-dokdo drop-shadow-md relative pb-4">
      <div className="flex gap-3 mb-4">
        {nameAnimations.map((animation, i) => (
          <animated.p key={NAMES[i]} style={animation}>{NAMES[i]}</animated.p>
        ))}
      </div>
      <animated.h1 style={titleAnimation}>결혼합니다.</animated.h1>
      <div className="flex flex-col mt-4 text-2xl text-center mb-4">
        {descAnimations.map((animation, i) => (
          <animated.p key={DESCRIPTION[i]} style={animation}>{DESCRIPTION[i]}</animated.p>
        ))}
      </div>
      <LineBreaker />
      <span className="relative w-full flex-1">
        <Image src="/wedding_image.png" alt="couple_image" className="object-contain" fill />
      </span>
    </section>
  );
}

export default Greetings;
