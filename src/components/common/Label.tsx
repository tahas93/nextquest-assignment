import React from 'react';

const Label = ({
  htmlFor,
  text,
  className,
}: {
  htmlFor: string;
  text: any;
  className?: string;
}) => {
  return (
    <label htmlFor={htmlFor} className={`text-left leading-4 ${className}`}>
      {text}
    </label>
  );
};

export default Label;
