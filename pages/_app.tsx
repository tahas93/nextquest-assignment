import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react';

import '../styles/index.css';

export default function MyApp({ Component, pageProps }: any): JSX.Element {
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(
    <>
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}
