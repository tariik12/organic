import React from 'react';

const CartStatus = ({ title, total, rate, levelUp, levelDown, children }) => {
  return (
    <div className="rounded-md  border-4 border-lime-500 border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark text-center">
      <div className="flex h-11.5 w-11.5 Products-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 mb-4">
        {children}
      </div>

      <div className="justify-between">
        <div>
          <h4 className="text-title-md font-bold text-[#800000] dark:text-white">
            {total}
          </h4>
          <span className="text-[#006A4D] font-bold">  ▲ {title}</span>
        </div>

        {/* <div className="mt-2">
          {levelUp && (
            <span className="text-green-500 font-bold">
              ▲ {rate}
            </span>
          )}
          {levelDown && (
            <span className="text-red-500 font-bold">
              ▼ {rate}
            </span>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default CartStatus;
