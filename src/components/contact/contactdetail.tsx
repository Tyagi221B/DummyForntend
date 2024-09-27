import React from 'react';
import images from '../../assets/images';
import { LocationOn } from '@mui/icons-material';

const ContactDetail: React.FC = () => {
  return (
    <div>
      <div className='bg-[#FFF9F3]'>
      {/* Desktop and Tablet View */}
      <div className="hidden md:block">
      
        <div
          className="w-full h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${images.contactus})`,
          }}
        >   
          <h1 className="text-white  text-5xl md:text-7xl font-display text-center">
            CONTACT US
          </h1>
        </div>
        <div className="text-center text-[#3093CB] text-xl md:text-3xl font-normal px-4 md:px-[5%] capitalize my-10">
          Let the Shining fingers do the talking. Antique Diamond ring for all occasion.
        </div>
        <div className="relative w-full h-[642px]">
          {/* Google Map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            className="w-full h-[600px] opacity-20"
            allowFullScreen={true}
            aria-hidden={false}
            tabIndex={0}
          ></iframe>

          {/* Overlay Box */}
          <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 text-black text-center w-[640px] mt-5">
            <p className="text-lg font-light m-0 text-gray-600">
              To Help Create An Authentic & Transparent Jewelry Experience At
              Unbelievable Prices, Just The Way You Want.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-5 rounded-lg border-[10px] border-opacity-20 border-[#2993B5] shadow-md text-center w-[500px] h-[410px]">
           <div className='text-gray-500 mt-[13%]'><LocationOn fontSize='large'/></div>
            <p className="text-2xl text-[#565656] font-light my-5">
              SCF - 55, Sector - 8, Panchkula Haryana
            </p>
            <p className="text-[#565656] text-lg font-light mt-8">
              For more info:
            </p>
            <p className="text-[#565656] text-2xl font-light">
              981 519 6789
            </p>
            <p className="text-[#565656] text-lg font-light">
              Email: sample@123.com
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div
          className="w-full h-[275px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${images.contactus})`, }}
        >
          <h1 className="text-white text-4xl font-sans text-center">
            CONTACT US
          </h1>
        </div>
        <div className="text-center text-[#3093CB] text-lg font-normal px-[12%] capitalize my-[5%]">
          Let the Shining fingers do the talking. Antique Diamond ring for all
          occasion.
        </div>
        <div className="relative w-full h-[485px]">
          {/* Google Map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            className="w-full h-[485px] opacity-20"
            allowFullScreen={true}
            aria-hidden={false}
            tabIndex={0}
          ></iframe>

          {/* Overlay Box */}
          <div className="absolute flex items-center justify-center top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 text-black text-center w-[90%] h-[320px] mt-">
            <p className="text-base font-light">
              To Help Create An Authentic & Transparent Jewelry Experience At
              Unbelievable Prices, Just The Way You Want.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-5 rounded-lg border-[10px] border-opacity-20 border-[#2993B5] shadow-md text-center w-[340px] h-[300px]">
          <div className='text-gray-500 mt-[13%]'><LocationOn fontSize='large'/></div>
           
            <p className="text-xl text-[#565656] font-light my-5 tracking-wider">
              SCF - 55, Sector - 8, Panchkula Haryana
            </p>
            <p className="text-[#565656] text-lg font-light mt-8">
              For more info:
            </p>
            <p className="text-[#565656] text-2xl font-light">
              981 519 6789
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactDetail
