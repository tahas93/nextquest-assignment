import Modal from '@src/components/Modal';
import Image from 'next/image';
import React, { useState } from 'react';

const FreeCallButton = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <a
        onClick={() => setOpen(true)}
        className="nav-top-button flex cursor-pointer items-center justify-center space-x-2 rounded-lg px-3 py-1 text-center focus:outline-none lg:w-80"
      >
        <Image src="/images/free-credit-icon.png" width={24} height={30} alt="free-credit-icon" />
        <p className="text-base font-bold text-nx-black-100">Get 1 minute of Free Call</p>
      </a>

      {isOpen && (
        <Modal
          closeModal={() => setOpen(false)}
          isOpen={isOpen}
          modalClass="lg:max-w-4xl p-7"
          contentClass="w-full"
          content=""
          ModalTitle=""
        />
      )}
    </>
  );
};

export default FreeCallButton;
