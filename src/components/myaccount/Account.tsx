import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "../Header";
import Navigation from "../Navigation";

const Account: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Jatin Saini",
    phone: "9660000146",
    email: "jatinsaini641@gmail.com",
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    localStorage.setItem("userDetails", JSON.stringify(formData));
  };

  return (
    <div>
      <div className="App font-Montaga One">
        <Header />
        <div className="hidden md:block">
          <Navigation />
        </div>
      </div>
      <div className="container gap-[3%] mt-10 flex md:flex-row flex-col mx-auto px-4">
        <div className="sidebar md:w-1/3">
          <Sidebar />
        </div>
        {/* Desktop View */}
        <div className="hidden md:block bg-[#FFF9F3] rounded-2xl pb-24 mx-auto w-11/12">
          <div className="pt-12 pl-16 text-2xl text-gray-700 font-normal">
            ACCOUNT OVERVIEW
          </div>
          <div className="border border-blue-300 mx-10 mt-6">
            <div className="bg-gray-100 flex justify-between items-center">
              <div className="text-xl text-gray-700 py-4 pl-6 font-medium">
                Personal Information
              </div>
              <button
                onClick={isEditing ? handleSaveClick : handleEditClick}
                className=" text-sm  border text-gray-500 rounded-lg bg-blue-100 py-1 px-2 mr-5 tracking-wide"
              >
                {isEditing ? "SAVE" : "EDIT DETAILS"}
              </button>
            </div>
            <div className="flex flex-col font-sans">
              <div className="flex mb-2 py-2 text-base">
                <span className="w-36 pl-6 font-normal text-gray-500">Name</span>
                <span className="px-2 text-gray-500">:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="font-semibold text-gray-600"
                  />
                ) : (
                  <span className="font-semibold text-gray-600">
                    {formData.name}
                  </span>
                )}
              </div>
              <div className="flex mb-2 py-2 text-base">
                <span className="w-36 pl-6 font-normal text-gray-500">
                  Phone Number
                </span>
                <span className="px-2 text-gray-500">:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="font-semibold text-gray-600"
                  />
                ) : (
                  <span className="font-semibold text-gray-600">
                    {formData.phone}
                  </span>
                )}
              </div>
              <div className="flex mb-2 py-2 text-base">
                <span className="w-36 pl-6 font-normal text-gray-500">
                  Email Address
                </span>
                <span className="px-2 text-gray-500">:</span>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="font-semibold text-gray-600"
                  />
                ) : (
                  <span className="font-semibold text-gray-600">
                    {formData.email}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden pb-24 w-full">
          <div className="mt-6">
            <div className="bg-orange-100 flex justify-between items-center">
              <div className="text-lg text-gray-500 py-4 pl-6 font-medium">
                PERSONAL INFORMATION
              </div>
              <button
                onClick={isEditing ? handleSaveClick : handleEditClick}
                className="text-gray-600 text-sm font-semibold border border-transparent rounded-lg bg-blue-100 py-1 px-6 mr-5 tracking-wide"
              >
                {isEditing ? "SAVE" : "EDIT DETAILS"}
              </button>
            </div>
            <div className="flex flex-col font-sans">
              <div className="flex mb-2 py-2 text-base">
                <span className="w-36 pl-6 font-normal text-gray-500">Name</span>
                <span className="px-2 text-gray-500">:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="font-semibold text-gray-600"
                  />
                ) : (
                  <span className="font-semibold text-gray-600">
                    {formData.name}
                  </span>
                )}
              </div>
              <div className="flex mb-2 py-2 text-base">
                <span className="w-36 pl-6 font-normal text-gray-500">
                  Phone Number
                </span>
                <span className="px-2 text-gray-500">:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="font-semibold text-gray-600"
                  />
                ) : (
                  <span className="font-semibold text-gray-600">
                    {formData.phone}
                  </span>
                )}
              </div>
              <div className="flex mb-2 py-2 text-base">
                <span className="w-36 pl-6 font-normal text-gray-500">
                  Email Address
                </span>
                <span className="px-2 text-gray-500">:</span>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="font-semibold text-gray-600"
                  />
                ) : (
                  <span className="font-semibold text-gray-600">
                    {formData.email}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
