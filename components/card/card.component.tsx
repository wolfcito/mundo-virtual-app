export function Card() {
  return (
    <div className="flex flex-col justify-center mx-8 my-2 bg-black rounded-2xl w-300 h-90 md:flex-col mx-20 my-24 lg:flex-row mx-20 my-24 ">
      <div className="m-6 bg-black w-250 h-80 md:mx-8 mt-8 mb-4 lg:m-5">
        <img
          className="object-cover w-screen h-full bg-contain rounded-2xl"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/595/331/small/20012019-05.jpg"
        />
      </div>
      <div className="bg-[#0D0D0D] w-50 h-30 top-63.8 left-217.5 m-6 md:m-8 lg:mt-14 ml-2 mr-8">
        <h1 className="mb-4 text-xl font-nunito w-125 md:text-3xl lg:text-4xl">
          Dribbble Rusia VK Community officially launched!
        </h1>
        <p className="mb-8 text-base font-nunito w-100 md:text-xl lg:text-lg">
          Send your portfolio to our manager on e-mail and get a chance to be a
          part of our new big Dribbblers group
        </p>
        <p className="text-xs text-gray-400 md:text-sm lg:text-base ">
          aug 14,2020
        </p>
      </div>
    </div>
  );
}
