import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import LineBreaker from './LineBreaker';

const IMAGES = [...new Array(6).keys()];
function Album() {
  return (
    <section className="section px-0 justify-center gap-8">
      <LineBreaker />
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        slidesPerView={1}
        autoplay={{
          delay: 2000,
        }}
        loop
        pagination={{
          clickable: true,
        }}
        className="w-full h-[70%]"
        preloadImages
      >
        {IMAGES.map((imgIdx) => (
          <SwiperSlide key={imgIdx} className="w-full h-auto bg-amber-50">
            <Image
              src={`/swiper_images/${imgIdx + 1}.jpg`}
              fill
              className="object-contain"
              alt={`couple-image-${imgIdx}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <LineBreaker className="mt-6" />
    </section>
  );
}

export default Album;
