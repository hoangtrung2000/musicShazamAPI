import React from 'react';

const style = {
  wrapper: 'w-full flex justify-center items-center flex-col',
  text: 'font-bold text-2xl text-white mt-2',
};
const Error = () => (
  <div className={style.wrapper}>
    <h1 className={style.text}>Something went wrong. Please try again</h1>
  </div>
);

export default Error;
