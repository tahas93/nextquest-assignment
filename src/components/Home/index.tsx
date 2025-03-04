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
          width={500}
          height={500}
          className="absolute right-0 top-0 -translate-y-10 translate-x-28 opacity-70"
        />
        <MainBanner />
        <Image
          src="/images/gradient.png"
          alt="gradient"
          width={500}
          height={500}
          className="absolute bottom-0 left-0 -translate-x-96 translate-y-36 opacity-70"
        />
        <TextSection />
      </div>
    </>
  );
};

export default HomeView;
