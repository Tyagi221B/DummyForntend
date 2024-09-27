import React from 'react';
import images from '../../assets/images';
import CustomButton from '../Button';
import { AccessTime, Email, LocationOn } from '@mui/icons-material';

const AboutDetail: React.FC = () => {
  return (
    <div>
      <div>
      {/* Desktop and Tablet View */}
      <div className="hidden lg:block">
        <div
          className="w-full h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:  `url(${images.aboutus1})`,
          }}
        >
          <h1 className="text-white text-8xl font-display text-center">ABOUT US</h1>
        </div>
        <div className="text-center mt-20">
          <div className="text-4xl font-sans">Our Mission</div>
          <div className="text-xl text-gray-600 mt-4 px-[10%]">
            To Help Create An Authentic & Transparent Jewelry Experience At Unbelievable Prices, Just The Way You Want.
          </div>
        </div>
        <div className="mt-20 bg-[#F4F7FC] p-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6">
              <img
              src={images.aboutus2}
                alt="Our Team"
                className="w-full"
              />
            </div>
            <div className="col-span-6 flex flex-col justify-center items-center">
              <div className="text-center text-4xl mt-">Who Are We?</div>
              <div className="text-center mt-10 text-lg leading-8 text-gray-600">
                We are a passionate team that loves understanding what the customer really wants & helps them put their ideas into reality. Fiona Diamonds is the first & only brand in India to sell natural diamonds, lab-grown diamonds & moissanites all under one roof. We believe that luxury should not come at the cost of the environment so when you choose to wear a jewelry piece, you make a statement that’s larger than a style statement.
              </div>
              <div className="mt-10">
                <CustomButton>Learn More</CustomButton>
              </div>
             
            </div>
          </div>
        </div>
        <div className="bg-[#fff9f3] p-10">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-8 border border-gray-300">
             <div className='text-gray-700'> <LocationOn fontSize='large'/></div>
              <h3 className="text-xl text-gray-600 mt-4">Address</h3>
              <p className="text-sm text-gray-500 mt-2 px-4">
                To Help Create An Authentic & Transparent Jewelry Experience At Unbelievable Prices, Just The Way You Want.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-300">
            <div className='text-gray-700'> <Email fontSize='large'/></div>
              <h3 className="text-xl text-gray-600 mt-4">Contact Us</h3>
              <p className="text-sm text-gray-500 mt-2 px-4">
                To Help Create An Authentic & Transparent Jewelry Experience At Unbelievable Prices, Just The Way You Want.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-300">
            <div className='text-gray-700'>  <AccessTime fontSize='large'/></div>
              <h3 className="text-xl text-gray-600 mt-4">Hour Of Operation</h3>
              <p className="text-sm text-gray-500 mt-2 px-4">
                To Help Create An Authentic & Transparent Jewelry Experience At Unbelievable Prices, Just The Way You Want.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center text-4xl font-semibold mt-20">How Can Ravoy Diamonds Help You?</div>
        <div className="grid grid-cols-4 gap-6 mt-12 px-20">
          <div className="text-center">
            <div className="text-xl text-gray-600">Jewelry for every occasion</div>
            <div className="text-sm text-gray-500 mt-4 leading-6">
              Jewelry is an auspicious piece of ownership in India. At Fiona Diamonds we have curated a collection of products suitable for any of your occasions like Diwali, Navratri & Akshay Tritya.
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl text-gray-600">Lab Grown Diamonds</div>
            <div className="text-sm text-gray-500 mt-4 leading-6">
              Diamonds at a fraction of their cost! Lab Grown Diamonds have disrupted the jewelry industry with unbelievable prices. This is a classic example of how leveraging technology can do wonders.
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl text-gray-600">Gifting Jewelry</div>
            <div className="text-sm text-gray-500 mt-4 leading-6">
              Don't look any further for gifts! Whether it's valentine's day or a milestone celebration, we will help you pick the perfect gift for you according to your budget, style & preference.
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl text-gray-600">Customised Jewelry</div>
            <div className="text-sm text-gray-500 mt-4 leading-6">
              Every piece of jewelry is unique just like every individual. Hence, we create your desired piece of jewelry, just the way you want. We will convert your thoughts flawlessly into reality.
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 mb-10">
         <CustomButton>go to shop</CustomButton>
        </div>
       
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        <div
          className="w-full h-[270px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${images.aboutus1})`,
          }}
        >
          <h1 className="text-white text-4xl font-sans text-center">ABOUT US</h1>
        </div>
        <div className="text-center mt-12">
          <div className="text-2xl font-sans">Our Mission</div>
          <div className="text-lg text-gray-600 mt-4 px-[12%]">
            To Help Create An Authentic & Transparent Jewelry Experience At Unbelievable Prices, Just The Way You Want.
          </div>
        </div>
        <div className="mt-12 px-[7%]">
          <div className="text-center text-2xl">Who Are We?</div>
          <img
            src={images.aboutus2}
            alt="Our Team"
            className="w-full mt-10"
          />
          <div className="text-justify text-sm leading-6 text-gray-600 mt-10">
            We are a passionate team that loves understanding what the customer really wants & helps them put their ideas into reality. Fiona Diamonds is the first & only brand in India to sell natural diamonds, lab-grown diamonds & moissanites all under one roof. We believe that luxury should not come at the cost of the environment so when you choose to wear a jewelry piece, you make a statement that’s larger than a style statement.
          </div>
          <div className="flex justify-center mt-10">
            <button className="border border-black py-5 px-10">GO TO THE SHOP NOW</button>
          </div>
        </div>
        <div className="bg-[#fff9f3] py-10  mt-12">
          <div className="text-center p-6 border border-gray-300 mx-4 mb-6">
            <LocationOn fontSize='large' className='text-gray-700'/>
            <h3 className="text-xl text-gray-600 mt-4">Address</h3>
            <p className="text-sm text-gray-500 mt-2 px-4">
              To Help Create An Authentic & Transparent Jewelry Experience At Unbelievable Prices, Just The Way You Want.
            </p>
          </div>
          <div className="text-center p-6 border border-gray-300 mx-4 mb-6">
            <Email fontSize='large' className='text-gray-700'/>
            <h3 className="text-xl text-gray-600 mt-4">Contact Us</h3>
            <p className="text-sm text-gray-500 mt-2 px-4">
              To Help Create An Authentic & Transparent Jewelry Experience At Unbelievable Prices, Just The Way You Want.
            </p>
          </div>
          <div className="text-center p-6 border border-gray-300 mx-4">
            <AccessTime fontSize='large' className='text-gray-700'/>
            <h3 className="text-xl text-gray-600 mt-4">Hour Of Operation</h3>
            <p className="text-sm text-gray-500 mt-2 px-4">
              To Help Create An Authentic & Transparent Jewelry Experience At Unbelievable Prices, Just The Way You Want.
            </p>
          </div>
        </div>
        <div className="text-center text-2xl font-semibold mt-12">How Can Ravoy Diamonds Help You?</div>
        <div className="grid grid-cols-1 gap-6 mt-12 px-[5%]">
          <div className="text-center">
            <div className="text-xl text-gray-600">Jewelry for every occasion</div>
            <div className="text-sm text-gray-500 mt-4 leading-6">
              Jewelry is an auspicious piece of ownership in India. At Fiona Diamonds we have curated a collection of products suitable for any of your occasions like Diwali, Navratri & Akshay Tritya.
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl text-gray-600">Lab Grown Diamonds</div>
            <div className="text-sm text-gray-500 mt-4 leading-6">
              Diamonds at a fraction of their cost! Lab Grown Diamonds have disrupted the jewelry industry with unbelievable prices. This is a classic example of how leveraging technology can do wonders.
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl text-gray-600">Gifting Jewelry</div>
            <div className="text-sm text-gray-500 mt-4 leading-6">
              Don't look any further for gifts! Whether it's valentine's day or a milestone celebration, we will help you pick the perfect gift for you according to your budget, style & preference.
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl text-gray-600">Customised Jewelry</div>
            <div className="text-sm text-gray-500 mt-4 leading-6">
              Every piece of jewelry is unique just like every individual. Hence, we create your desired piece of jewelry, just the way you want. We will convert your thoughts flawlessly into reality.
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 mb-12">
          <button className="border border-black py-5 px-10">GO TO THE SHOP NOW</button>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default AboutDetail;
