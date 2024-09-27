import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import images from "../assets/images";

const CategoryIcons: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate
  const gemstones = [
    {
      name: "Ruby",
      image: images.diamond1,
      hoverImage: images.diamond1blue,
    },
    {
      name: "Emerald",
      image: images.diamond2,
      hoverImage: images.diamond2blue,
    },
    {
      name: "Sapphire",
      image: images.diamond3,
      hoverImage: images.diamond3blue,
    },
    {
      name: "Alexandrite",
      image: images.diamond4,
      hoverImage: images.diamond4blue,
    },
    {
      name: "Diamond",
      image: images.diamond5,
      hoverImage: images.diamond5blue,
    },
    {
      name: "Tourmaline",
      image: images.diamond6,
      hoverImage: images.diamond6blue,
    },
    {
      name: "Opal",
      image: images.diamond7,
      hoverImage: images.diamond7blue,
    },
    {
      name: "Aquamarine",
      image: images.diamond8,
      hoverImage: images.diamond8blue,
    },
  ];

  const [hoveredGemstone, setHoveredGemstone] = useState<number | null>(null);

  // Handle gemstone click to navigate to /shop
  const handleGemstoneClick = () => {
    navigate("/shop");
  };

  return (
    <div className="gemstonetype bg-[#FFF9F3]">
      <div className="grid grid-cols-2 p-4 pb-12 lg:mb-20 mb-12 px-[10%] gap-4 md:grid-cols-8 md:grid-rows-1">
        {gemstones.map((gemstone, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHoveredGemstone(index)}
            onMouseLeave={() => setHoveredGemstone(null)}
            onClick={handleGemstoneClick} // Add onClick handler
          >
            <img
              src={hoveredGemstone === index ? gemstone.hoverImage : gemstone.image}
              alt={gemstone.name}
              className="w-24 h-24 object-cover transition-all duration-300 ease-in-out hover:translate-y-[-10px]"
            />
            <p
              className={`text-sm transition-all duration-300 ease-in-out ${
                hoveredGemstone === index ? "text-[#48c0e9]" : "text-gray-500"
              }`}
            >
              {hoveredGemstone === index ? "Shop Now" : gemstone.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;


// import React from 'react';
// import images from '../assets/images';

// const categories = [
//   { name: 'Ruby', icon: images.icon1 },
//   { name: 'Shop Now', icon: images.icon2 },
//   { name: 'Emerald', icon: images.icon3 },
//   { name: 'Sapphire', icon: images.icon4 },
//   { name: 'Diamond', icon: images.icon5 },
//   { name: 'Tourmaline', icon: images.icon6 },
//   { name: 'Opal', icon: images.icon7 },
//   { name: 'Aquamarine', icon: images.icon7 },
// ];

// const CategoryIcons: React.FC = () => {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
//         {categories.map((category) => (
//           <div key={category.name} className="text-center flex flex-col justify-center items-center">
//             <img src={category.icon} alt="" />
//             <div className="text-sm">{category.name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryIcons;

// import React from 'react';
// import images from '../assets/images';

// // const categories = [
// //   { name: 'Ruby', icon: images.icon1 },
// //   { name: 'Shop Now', icon: images.icon2 },
// //   { name: 'Emerald', icon: images.icon3 },
// //   { name: 'Sapphire', icon: images.icon4 },
// //   { name: 'Diamond', icon: images.icon5 },
// //   { name: 'Tourmaline', icon: images.icon6 },
// //   { name: 'Opal', icon: images.icon7 },
// //   { name: 'Aquamarine', icon: images.icon7 },
// // ];

// const gemstones = [
//   {
//     name: "Ruby",
//     image:
//       "https://s3-alpha-sig.figma.com/img/aa6b/f28e/8a6b0ebd52f2f3b49b46c79870832541?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KyP0bL9Cteqq257peGaFyhtP8ihK1Sbc3sVOvwoO76YNxWb8z-hZ2VaQYYkwnGc2NMpHm9-LM70-U9PXs1yPcWARgRxpg9naLsJDp9QqsqW~AOl8ULpK2FSLFbo49~rDTLj~qvhywF0gax7m1dVM8LvmBtqg8Sh3n~jzEIun-B3QsS4Km1K6MqLa4GuHjB0M6JrPhmURmxvTa8QFbO91~xF75E61P2tNT184XMB-ofyZb75ahlwKBHpjeVx~51DyMqWSrrW1YWcnJoPp9fE5TkQ04m1YMyBxrbvyOGNF86VTj1u5kKzFBnWi54QvKVRiTK0rwmllzy8i1xf7hXKcLg__",
//     hoverImage:
//       "https://s3-alpha-sig.figma.com/img/10fb/d126/ba330ee0398f8bbbb318dfc9b5f22cbd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gojJzurUIEf4eMRJrgImD~3R48aLUn8t92GfYgrCItI7x4wtu2LAnOuyRQAScSMFoE5qSRRLyszqS7X83LHwQpraS55JYbMEFm6hu5697Vdbu9zG1DHtJ-9kBTCJDg8sEb9LwV0dCz3rXJJuxVT~A~5LTbZY6Dinpm7Th3yGOBYitog~Vka~701BjOG1PlTMOHEKY~QM6EXHyLxkOOG2w19FnSctfAQA3BOMGmKnXu-FJ1QyCOXgPHs0s6UvjDPLDKGpf~HccvZdxtsff~hjlQy1y4JfjjunOYpftasylxHBwMHq75ldL4x6Nj3f-8NLzigrFFy82Zs-C46KWLN09Q__",
//   },
//   {
//     name: "Emerald",
//     image:
//       "https://s3-alpha-sig.figma.com/img/9b0b/4d78/67410dc2eec4601fcdc23ec19cc3946c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SWDdTGSf5XVYkwfcq7iLaJm6bUv9~lDOHTytEmw7Ng7sDhgu0p89MG6TA3USXQ5RaN-0Dhq6RMAgpgY9sBpFsDuZ3XUSg3G9~3LbRe2tNn0nSi1E~o8V8ICzq5twv2xOOFFjWfNCzOCxoSQayBTeP9wFdmKPlgQGTp0qJoPENtk127aVEe9SRYxT74-PaTQREtg8Id076FaEuo2F4ukBFkDeXmWw2a3yefF417WPKKm1giE6sM~eduAgggBx4yihhATC4mgyVBlQVspvJ6uXl0TajsuhGGH3hyKM5nCWmK5W7xZskST1MT4eWMPi~NlL29pA0NU9fViXBkMm0LJIjw__",
//     hoverImage:
//       "https://s3-alpha-sig.figma.com/img/1982/d5f0/e61ef4b4d2cfb0ef68ba65a55d3f94e3?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iDxa9lO~Pl7HQJ8YGf4clm6REi0nClZ7fUzGQz~Uxgsw00wsauF-o7wIf~d-FjZJHoBz2hCfFoZximJ8e~kE5mGobwmoK~Mujev1FtkK~7xNDq-fBJxjH6lhzdy3Fu4dWnOSrNDF7UfpG9l4~LAjCjrM8gKNjw~ukHYX7uIE22QcbpvbnfvxhqkLDxawe4nHoQ7LPEyQ6nWASKMUvOqenKyW6Tbfjhm5OluGZ3mGJApdNs5l1OEIueu0TVVNsUIdH8~wBw613Gha5hjq7oIgnes6tA7s9soIE9~lzJJSBrBhyWHQv0RKiIIEiBNBJTlx-6e0Tm7AWUdvCcG27fD2Uw__",
//   },
//   {
//     name: "Sapphire",
//     image:
//       "https://s3-alpha-sig.figma.com/img/6be5/fcf7/a70c9d02313c334a5463da6b006e7560?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hw0bH1ovtYWfsZSPjXjowHfJ6mHupfWC70LGlPI74nt2mQGEPtKf1sSsK5lkFqXiKsxC4I5Bz6yn7ZBJANDxUbhD-a7fVlj~Q3nMpurUl4NTs78ss-XsSTdBU6ux9eXvfNQTES2PkMom8OdkFeFxR~PfRjupY00IDd8pV3mzRGvhHxAa134tGoRJ8ytaU19b6dNwiXeBNE32laylfU5IDj3cOw-EIy~sHSim6buOhMbOT9XxCPAtpALJJ3p2m16xXofen9Rin230MlkVvJVzufoSnncf~6S42KhMbkAzcx4KFH99Ah3Bo4pNR3xQSgg02iJodFnr2ip4UByuiRDIIA__",
//     hoverImage:
//       "https://s3-alpha-sig.figma.com/img/a83d/8bd0/085f0a3b8b606fde09a694488c80523c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M5p05ilY6uUov7lHTcxwKo9n1Cbb1Kn4cvl5TlboJogeofgD79PMvtVNN2-FsRNCQGzHkz1Nwu8LW-cZ7~Kn7LlqKuoIPyIah4vEZ5gJf2AlD7Mq3yjCQ4OGFWGoK5rNxzXEf5Sk39dSLcjTaVpgB~PQCjQxWkgR2RrTHARnZT4Y5dRj9imQuzMoBVB2ropRO5uM3Lyg0dJKgQRIJQOYzitkmBXu0~1HN0~pyXorETPQemVlfIE5V4ZpqDrhj040j57tx1~teRnfW2vFNBvjx2teAQV~Etx6p8wg5-zyWjykb-04khFDMtLtbk14sS6g9diRcOPTWPYUYa2yjmmzxA__",
//   },
//   {
//     name: "Alexandrite",
//     image:
//       "https://s3-alpha-sig.figma.com/img/f75f/9cf3/84d7a044a11089051f89a3e7e4b0485d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgaeDWjmUOn3j-QZQlBv6XVfMMgxy1FkanuSdD60dCN3uQ5WEG1EbS9DrccOZTE2qcILAYkkBwlqI7LMh7KqgZ1VswGUuhysdNedK1XzWdF2qboV5EVw5sPcTulRO3rqM3zTY~h52Hke3bFltKGNr8w15UfFYUe4zG3-sc-nk1DE8b551vQW1E5ev9qrUGH4hfK8K0u5zm85prbbTVRo4-UJEHAV6b5g5HfkZ3fboGLGYcLR7EU2nXfOtvRmQU7z63nigGTeiAT-KeYcEI9jSaWxNvi2BkP7Qjn-kgm6P8iiiNysVwwvdIGO1wcQIOW7HR2rlJFz3nynLbMT6PJWzw__",
//     hoverImage:
//       "https://s3-alpha-sig.figma.com/img/13d3/1d60/5e51ee78e40dca54f0352c9600edaa2a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEkch2go-Xdl6vQbIxe7uCm4~wbul6zGwYNIlvj~V89-zSo8VevsfFlY6TIiqaf-F97AjnwfRxLeWpfVtga7YgU5-hV6kgfKx2daEGJjmtXltWaHDodIPHQ5TvFFayTbfe~pe7E5kIvBKfFokw7q8eEXADRRmxhM3DBJU689PNxiN~sYNXeaZCmZM6wI1~dojmRqjCaFFBvPciR9uLA46BEmSwbvkJe-xhiVtjJbMPybQrrWDPzqFifbMOH1Ozilp8YeDLiTBVeSQqPdeLcJ6dXxm1HWBSMxmyzbTWVHisAePYsMeyc5M6uqaQinu7DwX-L4NZgaYoTYJnLP5EuTHA__",
//   },
//   {
//     name: "Diamond",
//     image:
//       "https://s3-alpha-sig.figma.com/img/97cf/b3b9/d45ca97ca6a901f6154a54eb6f73efae?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=di0Pbt4aTT77ekOYOfSfXoqmqtLHFrKebg7m-RzY~UdQcaaozm~~FRis~kJPiNdkiq1pEFH20FRNdlp-RG6Ua548W9GEkKW2mg7-pQl8sGIG2Pj1K9VBcet7IIpi3xwb4MovuySe~BkrYg5Z1o9Svd3QJZNHqU0IyQrWFB39vUZ7U8i4rYJSKaZd3FVGDWB1-gHrF1njUd0fRRrNPYQPJZqPw2Vens~BD1udoKj6mQRsCklsF~D9mLTEAuUZBaZjkdp-3xqv~ag8vZESqHKg-3P165by5ZhgECbonsG1Qswu-6jwHLNQOmuD8vIXiNWVrqoDgr6YTysoyr3gXvKk4w__",
//     hoverImage:
//       "https://s3-alpha-sig.figma.com/img/8132/5c5b/65119784a265943d9646769706ca0095?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EeWGqFDAU6gKKAeRSdKkAuz4xbFp1phkFZabBIb9n3c8QIGQ1AICQFhyuTf5OMJUlt1lG4xR~hD2BkTj9VkTgvdN2OtOy1HBZfxCoN8dmwox6VwIJfn-jum0b01qZz43860aIJT2brav36AIcEBbro59uHJKtSNoP92NRMq7MhiL6S-RUcnYZxgFFostHxkfsKnm2FeRVq7VVg9CvqTd8f7Vp4OFGk-7frshT7gtyoAZJ0OrYz-kpm2KbUBjMIGDtDhxxrtbuW8tcRTsNWrXsJY5uFBd3rGc8iHe5aqeZiHIWNRdD7SmO84~Bo~K57x8NrR4-E58dkyn90jZLOZePw__",
//   },
//   {
//     name: "Tourmaline",
//     image:
//       "https://s3-alpha-sig.figma.com/img/d998/25fc/7d7a37ad841f7f7a48b12762db5adde7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SQkwFs9iZuSzbpIMsLnQArFzRXfWwHYpUzK4a9tCEmB2ewVmFZBycwxYKInALb3BRgYBNdGuWTwWjcbAbYfzdOuUd6CzO5STyVPIofDT1HsdoJVX~QtNrNA1FZ3I0vgi63XyM5lz5~xUGYlbqrYELmeNP6iDCXkOUoRl-ImdEAKZeCIhGcobXXS2pvEcJR0pv3puFVKZuZfNMghxaQ-nKxXkgzxPLLGf8Rzk~jr5mVs01Moe6oISQzVSGXzoAeKNt9l9FuwIJsKSdUrRA4fV3rt2kO0KcPFRYsfM1Ew6UHoZ7hWau-5~NfXUFNnSFYfM9G4hxmbwuhlzVAbs-zWdYA__",
//     hoverImage:
//       "https://s3-alpha-sig.figma.com/img/1751/37e5/3feae514bc96730e4f0434be6eb50cfe?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBdGONx1qE8VdBrrxkLpy6RTtyRtKw~sCfHcPiZ4Y0Kpg94dVjdIJ~GLUyHVOqVg16BTpz8sTPrYFCdD3o7zOY1CTP-Et3RwL0M6wetYEJzqdA3kKULOH4eKD0~Q74jXyZoRM97g2i0Q7k1fGleYt2K9ftKHlsx4W7eIjd5ds9uUu4LcwBM8uDeApvloRHVN2yUJpS87Ovl3Y8D~ALsuqXqCaBh7uJEaCKEHzaGvxi83cw6fTphLepCBB5MIimNJQuMQ~PRjDrIcajKec13BumQedJ-ITgcrI2kBpDbrgaDLrthlhHdFOoR04kCr6PqsapXMCH5Deegv3p9AmXp47Q__",
//   },
//   {
//     name: "Opal",
//     image:
//       "https://s3-alpha-sig.figma.com/img/8730/85f9/34f463d57096e7698c22af219882a2ea?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPOfXn0J80nCjixrdhEnM5Se~s4a~p7hmwgi6G~akOGZGR-SRRdWUMRbcBUoipnSxGECaXXB-nbADLBExu4C5tdSh0VovTD2AV90NNWkqeWl2f1~qYjN54lNFbXvfzgfx4Hljm0HNB9-gdyz9YtvOzujeg~Zq5FKmzxFqYFLsF2lJRwTX2aYZkLvHZk2hpDWUeh2jKqIOLJYSwuQyHBMyJfa1msbdosTXSdMNbaupG9~29BcMJpruKHkFd0DiTuP-yH3sianANFjQKCjEsQ5Ty~kZu58DDDF9ScCQKK85tazuCsRMrOrMLtKMj~GUesmM8-qZXVsEnyuTRoXhxTw4Q__",
//     hoverImage:
//       "https://s3-alpha-sig.figma.com/img/b0d5/0b27/ff4189b09c92a14d40845679edbaa5e5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gP6Nn3RgPF1P7z8qUygscDy0ks5-LQkngsIiBhrT6gVnLrsCrGoawAbD93Tp8aJWxgmBDwod7ypRVQMOyLMgj8KPqXPs6q4eKklt-RSSJjoDpWWC49bP5FLVchEdfdfkdVTEnWi0xcVPZpH45NtSwXsSPZ5E~YLzKqjwmajeN0a~fYFmOiXAO4Ks7-QqN1-91BNn8~T61paTvonBvkFJxjpFfLB3JwlYbCeaJNNUWngbYdwL-FZT1NLfTCi-6zU8hzYRO~fPPeYZXUP3yQkKhoQ~cKL4-cn1SytRC6NK52EyqrWxSbL3YgI0sqjPZqqMxl3LPvtrA5gFy2pO2I587w__",
//   },
//   {
//     name: "Aquamarine",
//     image:
//       "https://s3-alpha-sig.figma.com/img/90fb/3dbb/c7651a27a936efab6b1bee2b4d0ec542?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KA8VMe5Ulpg54uqRYfnCOULArFx~~npaXi0gxe55GwwtZBPuPN1BGv~u6~VOy8-4OEpINomlBqTebpAO3fOQWuY7NaCbgxoH3wp0AHLNndZ~V8OK924qgWaCjKw0SXIS8IF~DOZZMPkLyYnkRIPvwI32I~q29HRFMVthe0zYuJvbnJcfLohu7jgAr8lVALhfv4d7SZszCsAZj9M1mcazHS3u46HicsV7k5LlCgYhAJ79opCzVeOEKCc4mfcmBXrXojwb5nIaw5~tufpI1SEy9rUPkTPIO8bJ~EaRuwS7rPnlbsdSBwMlzlATSpMC9xafAn95tJlwvnBt6AIRrmi4~Q__",
//     hoverImage:
//       "https://s3-alpha-sig.figma.com/img/60f6/0f47/4751c58cb58cdc97b3865fe93b3fd3ae?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZR6P0zkoz0hYTydvVNBf9RlzoByWUqHG2kmqTOxrBL~bzsqgQ~TOffLTwuVVOAz9VeIudIiZoHl2UqAFuR-xdhSDCs3SV3TfJL6Hagc7N4Kwu1RFnVajHkM4Lq7S5urV6jNe2RzIUZDdEQ3~I3FU~PRG8bkZHp7rmkTbJ6xki1cbSrfXGkz4jGVq9PhtYjIu3FZHWOK1t8ePfMjFED~dJdQbAQ9ZT6e4B20XrFESVKZI7V3vrCa5zpUexkEWIxOAg-5dpCjoPG7EZ51XNseUlZb2ha-DaAWt1Ug-sTA27U2ss2xR7ivJ8gaSjVe7dRxgOyd3GDuXoLOK5v4TLCTGYA__",
//   },
// ];

// const [hoveredGemstone, setHoveredGemstone] = useState(null);

// const CategoryIcons: React.FC = () => {
//   return (
//     // <div className="container mx-auto px-4 py-12">
//     //   <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
//     //     {categories.map((category) => (
//     //       <div key={category.name} className="text-center flex flex-col justify-center items-center">
//     //         <img src={category.icon} alt="" />
//     //         <div className="text-sm">{category.name}</div>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>
//     <div>
//     <div className="gemstonetype bg-[#FFF9F3]">
//       <div className="grid grid-cols-2 p-4 pb-12 px-[10%] gap-4 md:grid-cols-8 md:grid-rows-1">
//         {gemstones.map((gemstone, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center"
//             onMouseEnter={() => setHoveredGemstone(index)}
//             onMouseLeave={() => setHoveredGemstone(null)}
//           >
//             <img
//               src={
//                 hoveredGemstone === index
//                   ? gemstone.hoverImage
//                   : gemstone.image
//               }
//               alt={gemstone.name}
//               className="w-24 h-24 object-cover transition-all duration-300 ease-in-out hover:translate-y-[-10px]"
//             />
//             <p
//               className={`text-sm transition-all duration-300 ease-in-out ${
//                 hoveredGemstone === index
//                   ? "text-[#48c0e9]"
//                   : "text-gray-500"
//               }`}
//             >
//               {hoveredGemstone === index ? "Shop Now" : gemstone.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
//   );
// };

// export default CategoryIcons;
