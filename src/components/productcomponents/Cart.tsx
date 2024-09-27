import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/images';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  height: number;
  width: number;
}

const Cart: React.FC = () => {
  const [cartItem] = useState<CartItem>({
    id: 1,
    name: 'Captivating Floral Design Diamond Bracelet',
    price: 55329,
    originalPrice: 222311,
    image: images.Ring1,
    height: 30,
    width: 40,
  });

  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    
    console.log('Applying coupon:', couponCode);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      
      <div className="flex flex-col md:flex-row gap-8">
        
        
        
        <div className="md:w-2/3">
      <h1 className="text-2xl font-bold ">MY SHOPPING CART (1 ITEM)</h1>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <img src={cartItem.image} alt={cartItem.name} className="w-full sm:w-1/3 h-64 rounded-lg" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{cartItem.name}</h2>
                <div className="flex items-center mb-2">
                  <span className="text-xl font-bold text-[#CBB090]">RS. {cartItem.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">RS. {cartItem.originalPrice.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Height: {cartItem.height}mm | Width: {cartItem.width}mm</p>
                <div className="flex items-center gap-4 mb-2">
                  <button className="text-[#CBB090]">Remove</button>
                  <button className="text-blue-600">❤️Move to Wishlist</button>
                </div>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Add Gift Message</span>
                </label>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2  gap-4">
              <div className="border-2 p-4">
                <h3 className="font-semibold mb-2">Shipping</h3>
                <ul className="text-sm">
                  <li>• Free Shipping Available</li>
                  <li>• Overnight Shipping</li>
                  <li>• Order Tracking Every Step Of The Way</li>
                </ul>
              </div>
              <div className="border-2 p-4">
                <h3 className="font-semibold mb-2">Returns</h3>
                <ul className="text-sm">
                  <li>• Free Returns Available</li>
                  <li>• Overnight Returns</li>
                  <li>• Order Tracking Every Step Of The Way</li>
                </ul>
              </div>
            </div>
      <h2 className="text-1xl p-4 text-right font-bold ">TOTAL (1 Item) :  ₹ 55329 </h2>
          </div>

        </div>

        
        <div className="md:w-1/3">
        <h2 className="text-xl font-semibold mb-4">ORDER SUMMARY</h2>
          
          <div className="bg-[#FFFAF4] p-6 rounded-lg shadow-md">
            <div className="mb-4">
        <h2 className="text-xl font-semibold mb-4">Enter Code</h2>

              <div className="flex items-center">
                
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="flex-1 p-2 border rounded-l-md"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button
                  className="bg-yellow-400 text-black px-4 m-2 py-2 rounded-r-md"
                  onClick={handleApplyCoupon}
                >
                  Apply
                </button>
              </div>
              <a href="#" className="text-sm text-blue-600 mt-1 inline-block">View Promo Codes</a>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>₹ 57485</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>2156</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>FREE</span>
              </div>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>TOTAL (Incl.Of All Taxes)</span>
              <span>₹ 55329</span>
            </div>
            <div className="text-green-600 mb-4">YOU SAVE ₹ 2156</div>
            <Link to="/cart/address" className="bg-yellow-400 text-black px-4 py-2 rounded-md block text-center">Proceed to Checkout</Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;
