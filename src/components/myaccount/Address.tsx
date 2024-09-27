
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "../Header";
import Navigation from "../Navigation";

const Address: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      name: "Bhushan Khanam",
      phone: "+91 9592992539",
      line1: "SCO 20 21sector 19 chandigarh,",
      line2: "CHANDIGARH - 160019",
      line3: "CHANDIGARH",
      country: "India",
    },
  ]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedAddresses = addresses.map((address, index) =>
      index === selectedAddressIndex ? { ...address, [name]: value } : address
    );
    setAddresses(updatedAddresses);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    localStorage.setItem("userAddresses", JSON.stringify(addresses));
  };

  const handleAddAddressClick = () => {
    const newAddress = {
      name: "",
      phone: "",
      line1: "",
      line2: "",
      line3: "",
      country: "",
    };
    setAddresses([...addresses, newAddress]);
    setSelectedAddressIndex(addresses.length);
    setIsEditing(true);
  };

  // const handleAddressSelect = (index : any) => {
  //   setSelectedAddressIndex(index);
  //   setIsEditing(false);
  // };

  return (
    <div>
    <div className="App font-Montaga One">
  <Header />
  <div className="hidden md:block">
    <Navigation />
  </div>
</div>
    <div className="container gap-[3%] mt-10 flex  md:flex-row flex-col mx-auto px-4">
    <div className="sidebar md:w-1/3 ">
    <Sidebar/>
    </div>
      <div className="hidden md:block rounded-xl bg-[#FFF9F3] px-16 w-[97%] pb-24 mx-auto">
        <div className="pt-12 pl-16 text-2xl text-gray-700 font-normal">
          ADDRESS BOOK
        </div>
        <div className="border border-blue-300 mx-18 mt-6">
          <div className="bg-gray-200 flex justify-between items-center">
            <div className="text-xl text-gray-700 py-4 pl-6 font-medium">
              Default Address
            </div>
            <div className="mr-5">
              <button
                className="text-gray-600 text-sm font-semibold border rounded-lg bg-blue-100 py-1 px-2 mr-3 tracking-wide"
                onClick={isEditing ? handleSaveClick : handleEditClick}
              >
                {isEditing ? "SAVE" : "EDIT ADDRESS"}
              </button>
              <button
                className="text-gray-600 text-sm font-semibold border rounded-lg bg-blue-100 py-1 px-2 tracking-wide"
                onClick={handleAddAddressClick}
              >
                ADD ANOTHER ADDRESS
              </button>
            </div>
          </div>
          <div className="flex flex-col p-6">
            <div className="mb-4">
              <label className="block text-gray-500 mb-5 text-sm font-medium">
                Address:
              </label>
              {isEditing ? (
                <div className="flex flex-col  space-y-2">
                  {["name", "phone", "line1", "line2", "line3", "country"].map(
                    (field, index) => (
                      <input
                        key={index}
                        name={field}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      />
                    )
                  )}
                </div>
              ) : (
                <div className="flex flex-col space-y-1 text-gray-500 font-light">
                  {Object.values(addresses[selectedAddressIndex]).map(
                    (value, index) => (
                      <span key={index}>{value}</span>
                    )
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              {/* {addresses.map((index) => (
                <button
                  key={index}
                  className={`py-2 px-4 rounded ${
                    index === selectedAddressIndex
                      ? "bg-blue-200 text-blue-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handleAddressSelect(index)}
                >
                  Address {index + 1}
                </button>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full pb-24">
        <div className="mt-6 bg-orange-50">
          <div className="bg-gray-200 flex justify-between items-center p-4">
            <div className="text-lg text-gray-500 font-medium">ADDRESS BOOK</div>
            <button
              className="text-gray-600 text-sm font-semibold border rounded-lg bg-blue-100 py-1 px-6 tracking-wide"
              onClick={isEditing ? handleSaveClick : handleEditClick}
            >
              {isEditing ? "SAVE" : "EDIT ADDRESS"}
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            {isEditing ? (
              <div className="flex flex-col space-y-2">
                {["name", "phone", "line1", "line2", "line3", "country"].map(
                  (field, index) => (
                    <input
                      key={index}
                      name={field}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    />
                  )
                )}
              </div>
            ) : (
              <div className="flex flex-col space-y-1 text-gray-600 font-semibold">
                {Object.values(addresses[selectedAddressIndex]).map(
                  (value, index) => (
                    <span key={index}>{value}</span>
                  )
                )}
              </div>
            )}
            <div className="flex flex-col space-y-2">
              {/* {addresses.map((address, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 rounded ${
                    index === selectedAddressIndex
                      ? "bg-blue-200 text-blue-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handleAddressSelect(index)}
                >
                  Address {index + 1}
                </button>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Address;
