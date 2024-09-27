import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import images from '../../assets/images';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  images: string[];
  description: string;
  size: {
    height: number;
    width: number;
    length: number;
  };
  weight: {
    net: number;
    diamond: number;
    gold: number;
  };
  purity: string;
  basicInfo: {
    productType: string;
    brand: string;
    itemPackageQuantity: number;
    gender: string;
  };
  diamondInfo: {
    color: string;
    clarity: string;
    caratWeight: number;
    pieces: number;
  };
  metalInfo: {
    purity: string;
    metal: string;
    netWeight: number;
  };
  certification: {
    diamondCertification: string;
    hallmarkLicense: string;
  };
  priceBreakup: {
    component: string;
    name: string;
    rate: string;
    weight: string;
    discount: string;
    finalValue: string;
  }[];
  tags: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'CAPTIVATING FLORAL DESIGN DIAMOND BRACELET',
    price: 102311,
    originalPrice: 222311,
    images: [
      images.Ring1,
      images.Ring2,
      images.Ring4,
      images.Ring3,
      images.Ring5
    ],
    description: 'Wear Your Heart On Your Sleeve With This Pair Of Stud Earrings Crafted In 18 Karat Yellow Gold With A Glossy Finish. Stone Clarity I/12',
    size: { height: 30, width: 40, length: 100 },
    weight: { net: 20.0, diamond: 2.5, gold: 10.0 },
    purity: '18 Karat',
    basicInfo: {
      productType: 'Ring',
      brand: 'Mine',
      itemPackageQuantity: 1,
      gender: 'Men',
    },
    diamondInfo: {
      color: 'GH',
      clarity: 'VVS/VS',
      caratWeight: 0.06,
      pieces: 3,
    },
    metalInfo: {
      purity: 'K 18I',
      metal: 'Gold',
      netWeight: 9.288,
    },
    certification: {
      diamondCertification: 'IGI',
      hallmarkLicense: 'NolNAC-77901',
    },
    priceBreakup: [
      { component: 'Metal', name: '18KT Plain Gold', rate: 'Rs 5260.91/G', weight: '0.613g', discount: '-', finalValue: 'Rs 3225.99' },
      { component: 'Stone', name: 'Diamond', rate: '-', weight: '1.824 Ct/', discount: '-', finalValue: 'Rs 10552' },
      { component: 'Gemstone 1', name: 'Ruby', rate: '-', weight: '0.325 G', discount: '-', finalValue: 'Rs 10552' },
      { component: 'Gemstone 2', name: 'Sapphire', rate: '-', weight: '1.824 Ct/ 0.325 G', discount: '-', finalValue: 'Rs 10552' },
      { component: 'Sub Total', name: '-', rate: '-', weight: '5.61 g (Gross Weight)', discount: '-', finalValue: 'Rs 2975.00' },
      { component: 'Discount On Selling Price', name: '-', rate: '-', weight: '', discount: 'Rs 10230', finalValue: 'Rs 2975.00' },
      { component: 'GST', name: '-', rate: '-', weight: '', discount: '', finalValue: 'Rs 2975.00' },
    ],
    tags: ['WOMEN BRACELETS', 'OFFERS BRACELETS', 'SPECIAL OCCASION BRACELETS', 'DIAMOND BRACELETS', 'CLASSIC BRACELETS', 'WEDDING BRACELETS', 'FASHION BRACELETS', 'GOLD BRACELETS', 'CLASSIC BRACELETS'],
  },
  // Additional products can be added here
];

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties | null>(null);

  const [showCustomization, setShowCustomization] = useState(false);
  const [goldType, setGoldType] = useState("Yellow");
  const [purity, setPurity] = useState("18Kt");
  const [diamondType, setDiamondType] = useState("VS GH");
  const [selectedSize, setSelectedSize] = useState(6);

  if (!product) {
    return <div className=' text-center items-center flex flex-wrap justify-center uppercase'>Product not found please click on 1st product which is shown earlier , beacuse we have only one product that is listed right now
      <img src="https://cdn.dribbble.com/users/1627675/screenshots/4031125/kirigami-404--dribbble.gif" alt="" />
    </div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${product.images[currentImageIndex]})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: '200%',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 100,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle(null);
  };

  const handleBuyNow = () => {
    navigate('/cart');
  };

  const handleCustomizationToggle = () => {
    setShowCustomization(!showCustomization);
  };

  const selectedProductDescription = `Diamond Ring in ${purity} ${goldType} Gold with ${diamondType} Diamonds`;

  return (
    <div className="container mx-auto px-8  py-8">
      <div className="flex flex-col   md:flex-row">
        <div className="md:w-1/2  relative">
          <div
            className="w-full md:h-[70vh] h-[50vh] rounded-lg overflow-hidden relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {zoomStyle && <div style={zoomStyle} />}
          </div>
          <button
            onClick={prevImage}
            className="absolute left-0 md:top-[38vh] top-[28vh] px-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 md:top-[38vh] top-[28vh] px-4 transform -translate-y-1/2 bg-gray-300 bg-opacity-50 p-2 rounded-full"
          >
            &gt;
          </button>
          <div className="flex justify-center mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover rounded-md mx-2 cursor-pointer ${
                  index === currentImageIndex ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 mr-2">★★★★☆</span>
            <a href="#reviews" className="text-blue-500">Write Review</a>
          </div>
          <p className="mb-4">{product.description}</p>
          <div className="mb-4 flex items-baseline">
            <span className="text-3xl font-bold text-[#CBB090]">₹ {product.price.toLocaleString()}</span>
            <span className="text-lg text-gray-500 line-through ml-4">₹ {product.originalPrice.toLocaleString()}</span>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            {selectedProductDescription}
          </p>
          
          {product.basicInfo.productType === 'Ring' && (
            <div className="mb-6">
              <label className="block mb-2 text-lg font-semibold text-gray-800">Select Ring Size:</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(Number(e.target.value))}
                className="w-1/3 border border-gray-300 p-2 rounded-md text-lg"
              >
                {[...Array(25)].map((_, i) => (
                  <option key={i + 6} value={i + 6}>{i + 6}</option>
                ))}
              </select>
            </div>
          )}
          
          <div className="mb-4">
            <button 
              className="text-blue-500 underline"
              onClick={handleCustomizationToggle}
            >
              {showCustomization ? 'Hide Customization' : 'Show Customization'}
            </button>
            {showCustomization && (
              <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                <div className="mb-4">
                  <label className="block mb-2 font-semibold">Gold Type:</label>
                  <select 
                    value={goldType} 
                    onChange={(e) => setGoldType(e.target.value)} 
                    className="w-full border p-2 rounded"
                  >
                    <option value="Yellow">Yellow Gold</option>
                    <option value="White">White Gold</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-semibold">Purity:</label>
                  <select 
                    value={purity} 
                    onChange={(e) => setPurity(e.target.value)} 
                    className="w-full border p-2 rounded"
                  >
                    <option value="14Kt">14Kt</option>
                    <option value="18Kt">18Kt</option>
                    <option value="22Kt">22Kt</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-semibold">Diamond Type:</label>
                  <select 
                    value={diamondType} 
                    onChange={(e) => setDiamondType(e.target.value)} 
                    className="w-full border p-2 rounded"
                  >
                    <option value="SI IJ">SI IJ</option>
                    <option value="SI GH">SI GH</option>
                    <option value="VS GH">VS GH</option>
                    <option value="VVS EF">VVS EF</option>
                  </select>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex space-x-4 mb-6">
            <button className="bg-[#6DAFCA] text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-[#5A9FB4] transition duration-200 ease-in-out">Add To Cart</button>
            <button onClick={handleBuyNow} className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out">Buy Now</button>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <span>✓ Purity Guaranteed</span>
              <span>✓ Free Shipping All Across India</span>
              <span>✓ International Shipment Charges Apply</span>
            </div>

            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <span>✓ Any Questions? Please contact us at</span>
              <span>✓ +91 0123456789</span>
              <span>✓ 100% Certified by International Standards</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-[#FFFAF4] p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Product Detail</h2>
        <p className="mb-6">{product.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Basic Information</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b-2"><td>Product Type</td><td>{product.basicInfo.productType}</td></tr>
                <tr className="border-b-2"><td>Brand</td><td>{product.basicInfo.brand}</td></tr>
                <tr className="border-b-2"><td>Item Package Quantity</td><td>{product.basicInfo.itemPackageQuantity}</td></tr>
                <tr className="border-b-2"><td>Gender</td><td>{product.basicInfo.gender}</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Diamond Information</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b-2"><td>Diamond Color</td><td>{product.diamondInfo.color}</td></tr>
                <tr className="border-b-2"><td>Diamond Clarity</td><td>{product.diamondInfo.clarity}</td></tr>
                <tr className="border-b-2"><td>Diamond Carat (Ct)</td><td>{product.diamondInfo.caratWeight}</td></tr>
                <tr className="border-b-2"><td>Diamond Pcs</td><td>{product.diamondInfo.pieces}</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Metal Information</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b-2"><td>Metal Purity</td><td>{product.metalInfo.purity}</td></tr>
                <tr className="border-b-2"><td>Metal</td><td>{product.metalInfo.metal}</td></tr>
                <tr className="border-b-2"><td>Net Weight (G.)</td><td>{product.metalInfo.netWeight}</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Certification</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b-2"><td>Diamond Certification</td><td>{product.certification.diamondCertification}</td></tr>
                <tr className="border-b-2"><td>Hallmark License</td><td>{product.certification.hallmarkLicense}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-12 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Price Breakup</h2>
        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Component</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Rate</th>
              <th className="border p-2">Weight</th>
              <th className="border p-2">Discount</th>
              <th className="border p-2">Final Value</th>
            </tr>
          </thead>
          <tbody>
            {product.priceBreakup.map((item, index) => (
              <tr key={index} className="bg-white">
                <td className="border p-2">{item.component}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.rate}</td>
                <td className="border p-2">{item.weight}</td>
                <td className="border p-2">{item.discount}</td>
                <td className="border p-2">{item.finalValue}</td>
              </tr>
            ))}
            <tr className="bg-gray-200">
              <td colSpan={5} className="border p-2 font-bold">Grand Total</td>
              <td className="border p-2 font-bold">₹ {product.price.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag, index) => (
            <span key={index} className="bg-[#FFFAF4] px-3 py-1 text-sm border rounded-lg shadow-sm">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
