export function Card() {
  return (
    <div className="flex flex-wrap justify-center mx-12 my-20 ml-2 ml-4 bg-black xs:justify-center w-70 h-200 sm: w-105 h-300 md:w-300 bg-blacklg:w-30 xl:w-400 rounded-2xl">
      <div className="h-40 mt-4 mb-4 ml-4 mr-4 bg-black xs:w-50 sm: w-80 md:w-100 lg:w-250 xl=w-300">
        <img
          className="object-cover w-screen h-full bg-contain rounded-2xl"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/595/331/small/20012019-05.jpg"
        />
      </div>
      <div className=" bg-black w-50 h-30 top-63.8 left-217.5 items-center mt-14">
        <h1 className="mb-2 text-4xl text-4xlfont-nunito w-125">
          Dribbble Rusia VK Community officially launched!
        </h1>
        <p className="mb-4 text-lg font-nunito w-100">
          Send your portfolio to our manager on e-mail and get a chance to be a
          part of our new big dribbblers group
        </p>
        <p className="text-sm text-gray-400">aug 14,2020</p>
      </div>
    </div>
  );
}
