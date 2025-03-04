import Image from 'next/image';
import React from 'react';

const MainBanner = () => {
  return (
    <>
      <div className="flex w-full items-center justify-start gap-20">
        <div className="flex flex-wrap items-center justify-start space-y-10 text-left">
          <div className="flex w-full flex-col items-start justify-center text-left">
            <div className="mb-7 inline-flex text-4xl font-bold">
              <div className="relative flex items-center justify-start">
                <span className="text-yellow-400">#1 Adult Video</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/svg/line-vector.svg"
                  alt="line-vector"
                  className="absolute top-full -mt-2"
                />
              </div>
              &nbsp; Chat Platform
            </div>
            <div className="text-left text-xl font-normal leading-8">
              From Cam Sex Chats to Private 1v1 Video Calls -<br />
              Discover Pleasure Without Limits.
            </div>
          </div>
          <a className="rounded-md bg-nx-pink-100 px-6 py-2.5 font-bold text-nx-black-100 shadow-nx-btn-shadow">
            Explore Models
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
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
