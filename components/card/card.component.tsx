import clsx from "clsx";
export function Card({ isExpanded = false }: { isExpanded?: boolean }) {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center my-2 bg-black rounded-2xl w-[390px] h-[600px] max-w-[390px] md:flex-col",
        isExpanded
          ? "md:my-18 md:mx-4 lg:mx-3 lg:my-3 lg:flex-col"
          : "lg:flex-row md:mx-20 md:my-20 lg:h-[360px] lg:w-[1100px] lg:mx-16 lg:my-18"
      )}
    >
      <div className="mx-2 mt-2 mb-4 bg-black w-250 h-80 md:mx-8 lg:m-5">
        <img
          className="object-cover w-screen h-full bg-contain rounded-2xl"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/595/331/small/20012019-05.jpg"
        />
      </div>
      <div className="mx-2 mt-4 mb-6 bg-black w-50 h-30 md:m-8 lg:ml-4 lg:mt-14 lg:mr-2">
        <h1 className="mb-4 text-base font-extrabold w-125 md:text-3xl lg:text-4xl">
          Dribbble Rusia VK Community officially launched!
        </h1>
        <p className="mb-4 text-base font-nunito w-100 md:text-xl lg:text-lg lg:mb-6">
          Send your portfolio to our manager on e-mail and get a chance to be a
          part of our new big Dribbblers group!
        </p>

        <p className="text-xs text-gray-400 font-nunito md:text-sm lg:text-base">
          Aug 14,2020
        </p>
      </div>
    </div>
  );
}

export function Card2() {
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
  // );
}
