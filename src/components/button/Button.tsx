import React, { FC, HTMLAttributes } from 'react';

const Button: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button type={'button'} {...props} />;
};

export default Button;
