import Image from 'next/image';
import React from 'react';

const MainBanner = () => {
  return (
    <>
      <div className="flex w-full items-center justify-start gap-20 xs:flex-wrap lg:flex-nowrap">
        <div className="flex flex-wrap items-center space-y-10 text-left xs:w-full xs:justify-center lg:w-auto lg:justify-start">
          <div className="flex w-full flex-col justify-center text-left xs:items-center lg:items-start">
            <div className="mb-7 inline-flex text-4xl font-bold xs:flex-wrap xs:justify-center lg:flex-nowrap lg:justify-start">
              <div className="relative flex items-center xs:w-full xs:justify-center lg:w-auto lg:justify-start">
                <span className="text-yellow-400">#1 Adult Video</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/svg/line-vector.svg"
                  alt="line-vector"
                  className="absolute top-full -mt-2 xs:w-40 lg:w-auto"
                />
              </div>
              <p className="xs:text-center lg:text-left">&nbsp; Chat Platform</p>
            </div>
            <div className="text-xl font-normal leading-8 xs:text-center lg:text-left">
              From Cam Sex Chats to Private 1v1 Video Calls -<br />
              Discover Pleasure Without Limits.
            </div>
          </div>
          <a className="rounded-md bg-nx-pink-100 px-6 py-2.5 font-bold text-nx-black-100 shadow-nx-btn-shadow">
            Explore Models
          </a>
        </div>
        <div className="flex items-center justify-center xs:w-full lg:flex-1">
          <Image
            src="/images/home-banner-model1.webp"
            alt="home-banner-model1"
            className="z-9"
            width={462}
            height={451}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
