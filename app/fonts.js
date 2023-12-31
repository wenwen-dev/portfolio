import {
  Sacramento,
  Roboto_Slab,
  League_Spartan,
  Dancing_Script,
  Montserrat,
} from 'next/font/google';

export const fontLogo = Sacramento({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const fontScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
});

export const fontBody = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
});

export const fontHeading = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  // weight: ['100', '400'],
});
