/* eslint-disable camelcase */
import { Noto_Sans_KR } from '@next/font/google';

const notoSansKr = Noto_Sans_KR({
  weight: '400',
  subsets: ['korean', 'latin'],
  variable: '--font-noto-sans-kr',
  preload: true,
  display: 'block',
});

export default notoSansKr;
