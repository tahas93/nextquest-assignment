import { Field } from 'formik';
import React, { useState } from 'react';

const InputTextField = ({
  type,
  id,
  placeholder,
  name,
  readOnly,
  disabled,
  className,
  focusHandler,
  blurHandler,
}: {
  type: string;
  id: string;
  placeholder: string;
  name: string;
  readOnly?: boolean;
  disabled?: boolean;
  className?: string;
  focusHandler?: (x: any) => void;
  blurHandler: (x: any) => void;
}) => {
  const [, setValue] = useState(false);
  return (
    <Field
      onBlur={(e: any) => {
        if (e.target.value === '') {
          setValue(false);
        } else {
          setValue(true);
        }
        blurHandler;
      }}
      onClick={focusHandler}
      readOnly={readOnly}
      disabled={disabled}
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      className={`flex h-14 w-full items-center justify-between rounded-[8px] border-[2px] border-solid border-nx-black-200 bg-transparent px-6 py-4 hover:border-nx-pink-100 focus:border-nx-pink-100 focus:outline-none focus:ring-0 ${className}`}
    />
  );
};

export default InputTextField;
