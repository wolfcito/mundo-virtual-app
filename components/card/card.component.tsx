export function Card() {
  return (
    <div className="flex justify-center mx-12 bg-black w-300 h-80 rounded-2xl my-20 ">
      <div className="bg-black w-250 h-65 mt-4 mr-4 mb-4 ml-4">
        <img
          className="bg-contain w-screen h-full object-cover rounded-2xl"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/595/331/small/20012019-05.jpg"
        />
      </div>
      <div className=" bg-black w-50 h-30 top-63.8 left-217.5 items-center mt-14">
        <h1 className="text-4xlfont-nunito w-125 text-4xl mb-4">
          Dribbble Rusia VK Community officially launched!
        </h1>
        <p className="text-lg font-nunito w-100 text-lg mb-8">
          Send your portfolio to our manager on e-mail and get a chance to be a
          part of our new big dribbblers group
        </p>
        <p className="text-sm text-gray-400">aug 14,2020</p>
      </div>
    </div>
  );
}
