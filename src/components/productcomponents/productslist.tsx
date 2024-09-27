import React, { useState } from "react";
import images from "../../assets/images";
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductsList: React.FC = () => {
  const [priceRange, setPriceRange] = useState(20000);
  const [sortBy, setSortBy] = useState("popular");

  const products: Product[] = [
    { id: 1, name: "MEDIOCRE LEATHER HAT", price: 250, image: images.product5 },
    { id: 2, name: "DIAMOND BRACELET", price: 350, image: images.product6 },
    { id: 3, name: "EARRINGS PRODUCTS", price: 250, image: images.product7 },
    { id: 4, name: "MEDIOCRE LEATHER HAT", price: 250, image: images.product8 },
    { id: 5, name: "DIAMOND BRACELET", price: 350, image: images.product9 },
    { id: 6, name: "EARRINGS PRODUCTS", price: 250, image: images.product10 },
    {
      id: 7,
      name: "MEDIOCRE LEATHER HAT",
      price: 250,
      image: images.product11,
    },
    { id: 8, name: "DIAMOND BRACELET", price: 350, image: images.product3 },
    { id: 9, name: "EARRINGS PRODUCTS", price: 250, image: images.product4 },
  ];

  return (
    <div className=" min-h-screen">
      <div className="relative bg-cover bg-center h-40">
        <img
          src={images.shopbanner}
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Filters Panel */}
        <div className="w-full md:w-1/4 pr-8 border p-10 me-4">
          <div className="items-center text-center justify-center mb-10 flex flex-col">
            
            <h2 className="text-lg font-semibold  tracking-widest text-gray-500 mb-1">FILTERS</h2>
            <hr className=" w-[30%] border border-gray-400" />
          </div>
          <div className="mb-6">
            <div className="flex flex-row justify-between mb-2"><h3 className="font-medium mb-2">PRICE</h3>
            <p className="text-gray-500">₹ {priceRange}</p></div>
            <input
              type="range"
              min="0"
              max="50000"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full"
            />
           
          </div>

          <div className="mb-6">
          <hr className="  border mb-6 border-gray-300" />
            <h3 className="font-medium tracking-widest mb-2">TYPE</h3>
            {[
              "Earrings",
              "Rings",
              "Pendants",
              "Necklaces",
              "Bangles",
              "Bracelets",
              "Nosepins",
            ].map((type) => (
              <div key={type} className="flex items-center text-gray-500 mb-2">
                <input type="checkbox" id={type} className="mr-2" />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>

          <div className="mb-6">
          <hr className="  border mb-6 border-gray-300" />
            <h3 className="font-medium  tracking-widest mb-2">STONES</h3>
            {["Diamond", "Ruby", "Gemstone", "Emerald", "Tourmaline"].map(
              (stone) => (
                <div key={stone} className="flex items-center text-gray-500  mb-2">
                  <input type="checkbox" id={stone} className="mr-2" />
                  <label htmlFor={stone}>{stone}</label>
                </div>
              )
            )}
          </div>

          <div className="mb-6">
          <hr className="  border mb-6 border-gray-300" />
            <h3 className="font-medium tracking-widest mb-2">OFFERS</h3>
            {[
              "10% Making Charge Off",
              "20% Making Charge Off",
              "30% Making Charge Off",
              "40% Making Charge Off",
              "Upto 70% Off",
            ].map((offer) => (
              <div key={offer} className="flex items-center text-gray-500 mb-2">
                <input type="checkbox" id={offer} className="mr-2" />
                <label htmlFor={offer}>{offer}</label>
              </div>
            ))}
          </div>

          <div className="mb-6">
          <hr className="  border mb-6 border-gray-300" />
            <h3 className="font-medium mb-2 tracking-widest">OCCASSION</h3>
            {[
              "Anniversary",
              "Engagement",
              "Birthday",
              "Wedding",
              "New Year's Eve",
              "Valentine's Day",
              "Diwali",
            ].map((occasion) => (
              <div key={occasion} className="flex items-center text-gray-500 mb-2">
                <input type="checkbox" id={occasion} className="mr-2" />
                <label htmlFor={occasion}>{occasion}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-end bg-gradient-to-r from-[#FFF9F3] to-[#FFEDD5] p-3 mb-10 shadow-lg rounded-lg">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border text-gray-500 border-gray-300 p-2  bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 hover:shadow-md transition-shadow duration-200"
            >
              <option value="popular" className="text-gray-500 bg-transparent">
                Sort: Popular
              </option>
              <option
                value="price_low_high"
                className="text-gray-500 bg-transparent"
              >
                Price: Low to High
              </option>
              <option
                value="price_high_low"
                className="text-gray-500 bg-transparent"
              >
                Price: High to Low
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="flex-shrink-0 text-center w-">
                <div className="relative group">
                  <div className="overflow-hidden border ">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-96 object-cover mb-2 transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#dcf5f6] h-[20%]  top-[75%] m-2 bottom-0 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-24 text-gray-500">
                      <button className=" ">
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
                      <button className="">
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
                      <button className="">
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
                <h3 className="text-lg mt-4 font-display ">{product.name}</h3>
                <p className="text-blue-300 mt-1">
                ₹{product.price.toFixed(2)}
                </p>
                <p className="text-gray-500 mb-6">Description & Details</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
