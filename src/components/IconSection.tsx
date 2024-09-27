import React from "react";
import { motion } from "framer-motion";
import images from "../assets/images";

const icons = [
  { name: "Icon1", svg: images.ic1 },
  { name: "Icon2", svg: images.ic2 },
  { name: "Icon3", svg: images.ic3 },
  { name: "Icon4", svg: images.ic4 },
  { name: "Icon5", svg: images.ic5 },
  { name: "Icon6", svg: images.ic6 },
  { name: "Icon7", svg: images.ic7 },
  { name: "Icon8", svg: images.ic8 },
];

const IconSection: React.FC = () => {
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex w-[200%]"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 70 }}
      >
        {/* First set of icons */}
        {icons.map((icon, index) => (
          <div
            key={`first-${index}`}
            className="w-1/8 flex justify-center items-center"
          >
            <img src={icon.svg} alt={icon.name} className="object-cover mx-4" />
          </div>
        ))}
        {/* Duplicate set of icons for seamless looping */}
        {icons.map((icon, index) => (
          <div
            key={`second-${index}`}
            className="w-1/8 flex justify-center items-center"
          >
            <img src={icon.svg} alt={icon.name} className="object-cover mx-4" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default IconSection;
