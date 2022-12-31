import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Album from '../components/Album';
import Greetings from '../components/Greetings';
import Invitation from '../components/Invitation';

import 'swiper/css';
import 'swiper/css/scrollbar';

export default function Home() {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      className="w-full h-full"
      modules={[Scrollbar]}
      scrollbar={{
        draggable: true,
        snapOnRelease: true,
      }}
    >
      <SwiperSlide>
        <Greetings />
      </SwiperSlide>
      <SwiperSlide>
        <Album />
      </SwiperSlide>
      <SwiperSlide>
        <Invitation />
      </SwiperSlide>
    </Swiper>
  );
}
