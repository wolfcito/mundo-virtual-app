import React, { useState } from "react";

export function Card({ isExpanded }: { isExpanded?: boolean }) {
  // LSXC => allow conditional option in classnames
  return (
    <div className="flex flex-col mx-10 my-10 bg-black rounded-2xl w-72 h-80 md:w-80 md:h-auto lg:w-96 lg:h-96">
      <div className="w-64 mx-4 mt-4 mb-2 h-52 rounded-xl md:w-72 md:h-60 lg:h-46 lg:mx-8 lg:mt-8 lg:mb-2 lg:w-80 lg:h-70">
        <img
          className="object-cover w-screen h-full bg-contain rounded-xl"
          src="https://thumbs.dreamstime.com/z/ciudad-logo-vector-art-template-y-ejemplo-106960346.jpg"
        />
      </div>
      <div className="items-center mx-4 my-2 h-28 w-72 lg:mx-8 lg:h-40">
        <h1 className="mb-1 text-base font-medium leading-6 text-white font-nunito md:text-lg md:mb-4 lg:mb-1 lg:text-xl">
          Incredible 3D illustrations of famous fictional places
        </h1>
        <p className="text-xs font-normal font-nunito text-[#A6ADB1] leading-5 md:text-base lg:">
          Aug 14, 2020
        </p>
      </div>
    </div>
  );
}
