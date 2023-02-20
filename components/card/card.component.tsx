const row = "true";
export function Card({ isExpanded }: { isExpanded?: boolean }) {
  // LSXC => allow conditional option in classnames

  return (
    <div {...Card(row ≠ "true" ? {className:"flex flex-col justify-center mx-8 my-2 bg-black rounded-2xl w-300 h-90 md:flex-col md:mx-18 md:my-24 lg:flex lg:mx-20 lg:my-20"}: [])}>
      <div className="m-6 mt-8 mb-4 bg-black w-250 h-80 md:mx-8 lg:m-5">
        <img
          className="object-cover w-screen h-full bg-contain rounded-2xl"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/595/331/small/20012019-05.jpg"
        />
      </div>
      <div className="m-6 bg-black w-50 h-30 md:m-8 lg:ml-4 lg:mt-14 lg:mr-2">
        <h1 className="mb-4 text-xl font-bold w-125 md:text-3xl lg:text-4xl">
          Dribbble Rusia VK Community officially launched!
        </h1>
        <p className="mb-8 text-base font-nunito w-100 md:text-xl lg:text-lg lg:mb-6">
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
