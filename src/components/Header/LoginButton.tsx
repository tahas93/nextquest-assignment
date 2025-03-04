import SignIn from '@src/components/Auth/SignIn';
import Modal from '@src/components/Modal';
import React, { useState } from 'react';

const LoginButton = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <a
        onClick={() => setOpen(true)}
        className="flex cursor-pointer items-center justify-center space-x-2 px-3 py-2.5 focus:outline-none lg:rounded-lg lg:border lg:border-nx-border-100 lg:text-center"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="login-circle-line">
            <path
              id="Vector"
              d="M8.33337 9.16667V6.66667L12.5 10L8.33337 13.3333V10.8333H0.833374V9.16667H8.33337ZM2.04821 12.5H3.81797C4.80695 14.9432 7.20222 16.6667 10 16.6667C13.682 16.6667 16.6667 13.6819 16.6667 10C16.6667 6.31811 13.682 3.33334 10 3.33334C7.20222 3.33334 4.80695 5.05681 3.81797 7.50001H2.04821C3.1101 4.11908 6.26867 1.66667 10 1.66667C14.6024 1.66667 18.3334 5.39763 18.3334 10C18.3334 14.6023 14.6024 18.3333 10 18.3333C6.26867 18.3333 3.1101 15.8809 2.04821 12.5Z"
              fill="#B7B5B9"
            />
          </g>
        </svg>
        <p className="text-nx-white-100">Login</p>
      </a>

      {isOpen && (
        <Modal
          closeModal={() => setOpen(false)}
          isOpen={isOpen}
          modalClass="lg:max-w-4xl"
          contentClass="w-full"
          content={<SignIn />}
          ModalTitle=""
        />
      )}
    </>
  );
};

export default LoginButton;
