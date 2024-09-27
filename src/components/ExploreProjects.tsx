import React, { useState, useRef } from "react";
import images from "../assets/images";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  details: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ring Diamond",
    image: images.product1,
    price: 999.99,
    description: "Lorem ipsum dolor sit amet.",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Mitchelle Earrings",
    image: images.product2,
    price: 799.99,
    description: "Lorem ipsum dolor sit amet.",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Diamond Bracelet",
    image: images.product3,
    price: 1299.99,
    description: "Lorem ipsum dolor sit amet.",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Earrings Twirls",
    image: images.product4,
    price: 599.99,
    description: "Lorem ipsum dolor sit amet.",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "Pendant Classic",
    image: images.product5,
    price: 899.99,
    description: "Lorem ipsum dolor sit amet.",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    name: "Pendant Classic",
    image: images.product1,
    price: 899.99,
    description: "Lorem ipsum dolor sit amet.",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    name: "Pendant Classic",
    image: images.product2,
    price: 899.99,
    description: "Lorem ipsum dolor sit amet.",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ExploreProducts: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  // Function to navigate to /shop when any product, button, or action is clicked
  const handleNavigation = () => {
    navigate("/shop");
  };

  return (
    <section className="container mx-auto px-4 py-12 relative">
      <div className="text-center items-center flex flex-col justify-center">
        <h2 className="text-1xl font-md text-center uppercase text-[#2993B5]">
          The Most Popular
        </h2>
        <h2 className="text-2xl font-lg text-center uppercase mb-4">
          Explore Our Products
        </h2>
        <hr className="border border-[#6F6F6F]  text-center items-center justify-center flex w-16 mb-8" />
      </div>
      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4"
          onScroll={handleScroll}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="flex-shrink-0 text-center w-64"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
            >
              <div className="relative group">
                <div
                  className="overflow-hidden"
                  onClick={handleNavigation} // Trigger navigation on product click
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover mb-2 transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
                  />
                </div>
                <div className="absolute inset-0 bg-[#dcf5f6] h-[20%] top-[75%] m-2 bottom-0 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-14 text-gray-500">
                    <button onClick={handleNavigation}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.3}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </button>
                    <button onClick={handleNavigation}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.3}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <button onClick={handleNavigation}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.3}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.3}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-400">₹{product.price.toFixed(2)}</p>
              <p className="text-gray-500">Description & Details</p>
              <p className="text-gray-400">{product.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;
