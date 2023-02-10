export function Card() {
  return (
    <div className="flex justify-center mx-24 my-20 bg-black h-90 rounded-2xl xs: w-80 ">
      <div className="mx-6 mt-4 mb-4 bg-black xs: w-30 h-90 ">
        <img
          className="object-cover w-screen h-full bg-contain rounded-2xl"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/595/331/small/20012019-05.jpg"
        />
      </div>
      <div className=" bg-black  h-30 top-79 left-217.5 items-center  pr-6 xs:w-20 text-sm mt-4">
        <h1 className="mb-2 font-nunito xs:text-base w-150 ">
          Dribbble Rusia VK Community officially launched!
        </h1>
        <p className="mb-10 font-nunito xs:text-lg w-100">
          Send your portfolio to our manager on e-mail and get a chance to be a
          part of our new big dribbblers group
        </p>
        <p className="text-sm text-gray-400">aug 14,2020</p>
      </div>
    </div>
  );
}
