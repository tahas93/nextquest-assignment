import FreeCallButton from '@src/components/Header/FreeCallButton';
import HeaderSearch from '@src/components/Header/HeaderSearch';
import LanguageDropbox from '@src/components/Header/LanugageDropbox';
import LoginButton from '@src/components/Header/LoginButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 z-99 flex w-full items-center justify-start bg-nx-nav-color-100">
        <div className="container mx-auto flex w-full items-center justify-start py-2.5 xs:px-4 lg:space-x-6">
          <Link href="/">
            <Image src="/images/new-logo.png" alt="logo" width={182} height={30} />
          </Link>
          <HeaderSearch />
          <LanguageDropbox />
          <LoginButton />
          <FreeCallButton />
        </div>
      </div>
    </>
  );
};

export default Header;
