import React, { useState } from 'react';
import { FaGift, FaMapMarkerAlt } from 'react-icons/fa';
import images from '../../assets/images';

interface AddressDetails {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  pincode: string;
  city: string;
  state: string;
  address: string;
  locality: string;
}

const CartSelectAddress: React.FC = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [savedAddress, setSavedAddress] = useState<AddressDetails | null>(null);
  const [addressDetails, setAddressDetails] = useState<AddressDetails>({
    fullName: '',
    email: '',
    phone: '',
    country: 'IN',
    pincode: '',
    city: '',
    state: '',
    address: '',
    locality: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAddressDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedAddress(addressDetails);
    setShowAddressModal(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F3]">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-2/3">
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-500 text-2xl mr-2" />
                <h2 className="text-xl font-semibold">Deliver To</h2>
              </div>
              <div className="bg-white border rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  {savedAddress ? (
                    <div>
                      <p className="font-semibold">{savedAddress.fullName}</p>
                      <p>{savedAddress.address}, {savedAddress.locality}</p>
                      <p>{savedAddress.city}, {savedAddress.state} - {savedAddress.pincode}</p>
                      <p>Phone: {savedAddress.phone}</p>
                    </div>
                  ) : (
                    <p className="text-gray-500">No Saved Address</p>
                  )}
                </div>
                <button
                  onClick={() => setShowAddressModal(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  + New Address
                </button>
              </div>
            </div>

            
            <div>
              <div className="flex items-center mb-4">
                <FaGift className="text-blue-500 text-2xl mr-2" />
                <h2 className="text-xl font-semibold">Gift Cards And Vouchers</h2>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <p className="text-gray-600 mb-4">Apply Gift Card Or Voucher Code</p>
                <button className="text-blue-500 hover:underline flex items-center">
                  <span className="mr-2">▸</span> Coupons And Vouchers
                </button>
              </div>
            </div>
          </div>


          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
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
                <hr />
              </div>
              <div className="flex justify-between font-bold mb-4">
                <span>TOTAL (Incl.Of All Taxes)</span>
                <span>₹ 55329</span>
              </div>
              <div className="flex justify-between text-green-500 font-bold mb-4">
                <span>YOU SAVE</span>
                <span>+₹ 2156</span>
              </div>
              
              <div className="flex justify-between font-bold mb-4">
                <span>AMOUNT PAYABLE (Incl.Of All Taxes)</span>
                <span>₹ 55329</span>
              </div>
              <div className="bg-gray-100 p-4 flex rounded-md">
                <img className="w-20" src={images.ring1_1} alt="" />
                <div className="ml-4">

                <h3 className="font-semibold mb-2">Captivating Floral Design Diamond Bracelet</h3>
                <p>Qty: 1</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

     
      
      {showAddressModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">

              <h2 className="text-2xl font-semibold mb-4">Add Shipping Details</h2>
            <img className='rounded-md h-32 w-full mb-10' src={images.Ring5} alt="" />
              
              <form onSubmit={handleAddAddress}>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter Full Name"
                      className="w-full p-2 border rounded"
                      value={addressDetails.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full p-2 border rounded"
                      value={addressDetails.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <select className="w-1/4 p-2 border rounded">
                      <option value="+91">+91</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Your Mobile no."
                      className="w-3/4 p-2 border rounded"
                      value={addressDetails.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <select
                      name="country"
                      className="w-1/4 p-2 border rounded"
                      value={addressDetails.country}
                      onChange={handleInputChange}
                    >
                      <option value="IN">IN</option>
                    </select>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Pincode"
                      className="w-3/4 p-2 border rounded"
                      value={addressDetails.pincode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="w-full p-2 border rounded"
                    value={addressDetails.city}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    className="w-full p-2 border rounded"
                    value={addressDetails.state}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address (House No, Building, Area)"
                    className="w-full p-2 border rounded"
                    value={addressDetails.address}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="locality"
                    placeholder="Locality/Town"
                    className="w-full p-2 border rounded"
                    value={addressDetails.locality}
                    onChange={handleInputChange}
                    required
                  />
                  <div>
                    <p className="mb-2">Save Address As</p>
                    <div className="flex gap-4">
                      <button type="button" className="px-4 py-2 border rounded">Home</button>
                      <button type="button" className="px-4 py-2 border rounded">Work</button>
                      <button type="button" className="px-4 py-2 border rounded">Other</button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setShowAddressModal(false)}
                    className="px-4 py-2 border rounded"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    USE THIS ADDRESS
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSelectAddress;
