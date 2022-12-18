import {
  animated, useChain, useSpring, useSpringRef, useSprings,
} from '@react-spring/web';
import React from 'react';

const INVITATION_LETTER = [
  ['신랑 이정규',
    '신부 후지타루나입니다.',
  ],
  [
    '인생에서 한번 뿐인 즐겁고 행복한 날,',
    '이 기쁨을 많은 분들과 함께 나누고싶지만, 어려운 시기를 보내고 있는 요즘,',
    '늦었지만 양가 친지분들만이라도 모시고 간소하게 식을 올리게 되었습니다.',
  ],
  [
    '많은 분들을 초대하지 못하는 점 깊은 양해를 구합니다.',
    '멀리서나마 저희를 축복해주시길 바랍니다.',
    '서로 아껴주고 배려하며, 사랑을 베푸는 부부가 되겠습니다.',
  ],
];
const INVITATION_ANIMATION = {
  from: { opacity: 0, y: 20 },
  to: { opacity: 1, y: 0 },
  config: {
    duration: 1000,
  },
};

function Invitation() {
  const greetingsRef = useSpringRef();
  const letterRef = useSpringRef();
  const closingRef = useSpringRef();

  const greetAnimation = useSpring({
    ref: greetingsRef,
    ...INVITATION_ANIMATION,
  });
  const [letterAnimation] = useSprings(INVITATION_LETTER.length, (i) => ({
    ref: letterRef,
    ...INVITATION_ANIMATION,
    delay: i * 1000 + 1000,
  }));
  const closingAnimation = useSpring({
    ref: closingRef,
    ...INVITATION_ANIMATION,
    delay: 2000,
  });

  useChain([greetingsRef, letterRef, closingRef], [0, 0.1, 1], 1000);

  return (
    <section className="section items-start font-notoSans p-[10%]">
      <animated.h2 className="text-lg font-bold mb-8" style={greetAnimation}>안녕하세요.</animated.h2>
      {letterAnimation.map((animation, i) => (
        <animated.p style={animation} className="mb-4 text-base">
          {INVITATION_LETTER[i].map((words) => (
            <>
              {words}
              <br />
            </>
          ))}
        </animated.p>
      ))}
      <br />
      <animated.p className="font-bold text-lg" style={closingAnimation}>신랑 이정규, 신부 후지타루나 드림.</animated.p>
    </section>
  );
}

export default Invitation;