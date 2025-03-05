import SignUp from '@src/components/Auth/SignUp';
import PrimaryBtn from '@src/components/common/PrimaryBtn';
import Modal from '@src/components/Modal';
import Image from 'next/image';
import React, { useState } from 'react';

const FreeCallButton = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <a
        onClick={() => setOpen(true)}
        className="nav-top-button flex cursor-pointer items-center justify-center space-x-2 px-3 py-1 text-center focus:outline-none lg:w-80 lg:rounded-lg"
      >
        <div className="w-full items-center justify-center space-x-2 text-center xs:hidden lg:flex">
          <Image src="/images/free-credit-icon.png" width={24} height={30} alt="free-credit-icon" />
          <p className="text-base font-bold text-nx-black-100">Get 1 minute of Free Call</p>
        </div>
        <div className="xs:flex lg:hidden">
          <PrimaryBtn
            className="text-bast inline-flex items-center justify-center space-x-1 bg-nx-pink-100 px-4 font-bold shadow-nx-btn-shadow"
            text={
              <>
                <p>Sign up Now</p>
                <img src="/images/signup-img.png" alt="sigup-img" className="h-5 w-5" />
              </>
            }
          />
        </div>
      </a>

      {isOpen && (
        <Modal
          closeModal={() => setOpen(false)}
          isOpen={isOpen}
          modalClass="lg:max-w-5xl"
          contentClass="w-full"
          content={<SignUp />}
          ModalTitle=""
        />
      )}
    </>
  );
};

export default FreeCallButton;
