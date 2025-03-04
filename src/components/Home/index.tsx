import MainBanner from '@src/components/Home/MainBanner';
import TextSection from '@src/components/Home/TextSection';
import Image from 'next/image';
import React from 'react';

const HomeView = () => {
  return (
    <>
      <div className="container relative mx-auto flex w-full flex-wrap items-start justify-start py-2.5 xs:space-y-10 xs:px-4 lg:space-y-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src="/images/gradient.png"
          alt="gradient"
          width={800}
          height={800}
          className="absolute -top-10 right-0 -translate-y-96"
        />
        <MainBanner />
        <Image
          src="/images/gradient.png"
          alt="gradient"
          width={500}
          height={500}
          className="absolute bottom-0 left-0 -translate-x-96"
        />
        <TextSection />
      </div>
    </>
  );
};

export default HomeView;
