import React from 'react';

const PrimaryBtn = ({
  text,
  handler,
  isDisabled,
  fullWidth,
  className,
}: {
  text: string | React.JSX.Element;
  handler?: () => void;
  isDisabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}) => {
  return (
    <button
      className={
        `h-[48px] ${
          fullWidth ? 'w-[100%]' : ''
        } bg-safely-green rounded-lg bg-nx-pink-200 font-bold text-nx-black-100 duration-500 hover:shadow-lg focus:outline-none ` +
        className
      }
      type="submit"
      onClick={handler}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
