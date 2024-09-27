import images from "../assets/images";

const Banner = () => {
  return (
    <div className="relative mb-8 bg-cover bg-center h-96">
      <img
        src={images.Banner}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-around p-8">
        <div className="flex flex-col items-start">
          <img
            src={images.bannerRing}
            alt="Product Image"
            className="w-80 h-80 object-contain"
          />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-1xl uppercase font-bold text-white">
            Adorn Yourself with the Finest Diamond Jewelry
          </h2>
          <h1 className="text-5xl font-bold text-white mt-4">GET 2% OFF</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
