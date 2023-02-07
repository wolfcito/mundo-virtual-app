export function Card() {
  return (
    <div className="flex justify-center mx-12 bg-black w-300 h-80 rounded-2xl my-20 ">
      <div className="bg-black w-250 h-60 mt-4 mr-4 mb-4 ml-4">
        <img
          className="bg-contain w-screen h-50 object-cover"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/595/331/small/20012019-05.jpg"
        />
      </div>
      <div className=" bg-black w-50 h-30 top-63.8 left-217.5">
        <h1 className="text-4xlfont-nunito w-125">
          Dribbble Rusia VK Community officially launched!
        </h1>
        <p className="text-lg font-nunito w-100">
          Send your portfolio to our manager on e-mail and get a chance to be a
          part of our new big dribbblers group
        </p>
        <p>aug 14,2020</p>
      </div>
    </div>
  );
}
