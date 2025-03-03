import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeView = () => {
  return (
    <>
      <div className='relative flex h-screen w-full flex-wrap justify-end'>
        <div className='z-99 fixed left-0 top-0 flex w-full items-start justify-end px-6 py-6'>
          <div className='flex w-full items-center justify-between'>
            <Link href='/' className='flex items-center justify-center'>
              <Image
                src='/images/logos/main-logo.svg'
                alt='safely-logo'
                width={240}
                height={83}
              />
            </Link>
          </div>
        </div>
        <div className='flex flex-1 flex-col items-start justify-center space-y-5 px-6'>
          <div className='-z-1 absolute right-0 top-0 flex h-full items-center justify-end'>
            <Image
              src='/images/home-img.png'
              alt='welcome-main'
              width={2000}
              height={500}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex w-1/3 flex-col space-y-5'>
            <h1 className='font-gilroy-bold text-5xl'>Welcome to Safely!</h1>
            <p className='text-safely-placeholder-300 text-lg'>
              You have been selected as a Safely Champion for this safety
              program, please login to start contributing to a safer work
              environment.
            </p>
            <p className='text-safely-placeholder-200 text-lg'>
              With a renewed mission to reduce incidents, we developed Safely.
              Safely is a fleet safety product that provides a comprehensive
              solution to improve the safety of their drivers and reduce
              accidents.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
