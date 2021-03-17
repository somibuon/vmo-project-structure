import React, { ComponentType, FC } from 'react';

export default function exampleHoc<P>(Component: ComponentType<P>) {
  const WithExample: FC<P> = (props) => {
    return (
      <div>
        Example
        <Component {...props} />
      </div>
    );
  };
  return WithExample;
}
