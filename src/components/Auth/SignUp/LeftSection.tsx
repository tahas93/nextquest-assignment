import React from 'react';

const LeftSection = () => {
  return (
    <div className="auth-img-2 lg:realtive block h-auto w-full max-w-[420px] rounded-xl bg-gradient-auth-2 bg-cover bg-no-repeat xs:absolute xs:-z-1 xs:h-full lg:z-auto lg:h-auto">
      <div className="flex h-full w-full flex-wrap content-center items-center justify-center space-y-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gitftsecond.png" alt="gift" />
        <div className="flex w-full flex-row items-start justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/coin-1.webp" alt="coin" className="mr-5 mt-4" />
          <p className="bg-gradient-text bg-clip-text text-center text-[32px] font-extrabold text-transparent">
            Get 1 minute of Free
            <br />
            Call
          </p>
        </div>
        <p className="font-medium text-nx-white-100">
          Join now and enjoy a FREE video call with
          <br />
          any model of your choice.
        </p>
        <div className="flex flex-row items-center justify-between gap-3">
          <div className="relative flex w-16 flex-col items-center justify-start gap-8">
            <div className="flex w-full flex-col space-y-2">
              <div className="text-shadow-nx relative flex h-16 w-full items-center justify-center bg-nx-pink-100 text-center text-white shadow-nx-timer-shadow">
                <p className="z-1 text-3xl font-extrabold leading-10">12</p>
                <hr className="absolute top-1/2 m-0 w-full flex-shrink-0 border-[2px] border-solid border-nx-border-200" />
              </div>
              <p className="text-xs uppercase text-white">minutes</p>
            </div>
          </div>

          <div className="relative -top-[10px] flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/timeDots.svg" alt="devider" />
          </div>

          <div className="relative flex w-16 flex-col items-center justify-start gap-8">
            <div className="flex w-full flex-col space-y-2">
              <div className="text-shadow-nx relative flex h-16 w-full items-center justify-center bg-nx-pink-100 text-center text-white shadow-nx-timer-shadow">
                <p className="z-1 text-3xl font-extrabold leading-10">45</p>
                <hr className="absolute top-1/2 m-0 w-full flex-shrink-0 border-[2px] border-solid border-nx-border-200" />
              </div>
              <p className="text-xs uppercase text-white">seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
