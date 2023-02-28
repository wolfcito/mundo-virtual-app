import clsx from "clsx";
export function Card({ isExpanded = false }: { isExpanded?: boolean }) {
  return (
    <div
      className={clsx(
        "flex flex-col mx-auto my-2 bg-black rounded-3xl w-[390px] max-w-md h-[573px]",
        isExpanded
          ? "md:w-[372px] md:max-w-screen-md md:h-[620px] md:my-px lg:w-[320px] lg:max-w-screen-lg lg:h-[573px] lg:my-3 lg:flex-col"
          : "md:w-[750px] md:max-w-screen-md md:mx-auto md:my-20 lg:h-[360px] lg:w-[990px] lg:max-w-screen-lg lg:mx-auto lg:my-18 lg:flex-row"
      )}
    >
      <div
        className={clsx(
          "mx-2 mt-2 mb-4 bg-black w-[400px] max-w-sm h-80 md:mx-10",
          isExpanded
            ? "md:w-[355px] md:max-w-screen-md md:h-72 lg:m-2 lg:w-[305px] lg:max-w-screen-lg"
            : "md:w-[740px] md:max-w-screen-md md:h-80 lg:w-[800px] lg:max-w-screen-lg lg:my-5 lg:ml-5 lg:mr-3"
        )}
      >
        <img
          className="object-cover w-screen h-full bg-contain rounded-2xl"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/595/331/small/20012019-05.jpg"
        />
      </div>
      <div
        className={clsx(
          "mx-2 mt-4 mb-6 bg-black w-[374px] h-80",
          isExpanded
            ? "md:w-[340px] md:max-w-screen-md lg:w-[300px] lg:max-w-screen-lg lg:m-2"
            : "md:my-6 md:mx-2 md:w-[740px] md:max-w-screen-md  lg:ml-4 lg:mt-14 lg:mr-2"
        )}
      >
        <h1
          className={clsx(
            "mb-4 text-base font-extrabold w-125",
            isExpanded ? "md:text-lg " : "md:text-2xl lg:text-4xl"
          )}
        >
          Dribbble Rusia VK Community officially launched!
        </h1>
        <p
          className={clsx(
            "mb-10 text-base font-nunito w-100",
            isExpanded ? "" : "md:text-xl lg:text-lg lg:mb-8"
          )}
        >
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
2020;
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
