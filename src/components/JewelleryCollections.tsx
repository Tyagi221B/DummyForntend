import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import images from "../assets/images";

const collections = [
  { name: "Earrings", image: images.jew1 },
  { name: "Necklaces", image: images.jew2 },
  { name: "Rings", image: images.jew3 },
  { name: "Bracelets", image: images.jew4 },
];

const JewelleryCollections: React.FC = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle category click
  const handleCategoryClick = () => {
    navigate("/shop"); // Navigate to /shop page
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-semibold text-[#2993B5] tracking-widest text-center mb-2 uppercase">
        Get Ready to sparkle
      </h2>

      <h2 className="text-3xl font-normal tracking-wider text-center mb-8">
        Jewellery Collections
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer" // Add cursor-pointer for better UX
            onMouseEnter={() =>
              (document.querySelector(`#collection-${index}`).style.display =
                "block")
            }
            onMouseLeave={() =>
              (document.querySelector(`#collection-${index}`).style.display =
                "none")
            }
            onClick={handleCategoryClick} // Add onClick handler to navigate
          >
            <div className="overflow-hidden">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:opacity-80"
              />
            </div>
            <div
              id={`collection-${index}`}
              className="absolute inset-0 h-[10%] text-center top-[80%] pt-4 bg-opacity-40 flex items-center justify-center hidden"
            >
              <span className="text-white font-bold lg:text-5xl text-3xl">
                {collection.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JewelleryCollections;
