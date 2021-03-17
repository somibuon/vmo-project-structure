import React, { FC, InputHTMLAttributes } from 'react';

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const renderPrefix = () => {
    return <span>$</span>;
  };
  return (
    <div>
      {renderPrefix()}
      <input {...props} />
    </div>
  );
};

export default Input;
