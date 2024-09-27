

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "../assets/images";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState("choice");
  const [formData, setFormData] = useState({ fullName: "", email: "", mobile: "" });
  const [otp] = useState(Array(6).fill(""));
  const [showCongrats, setShowCongrats] = useState(true);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = () => {
    
    if (step === "login" || step === "signup") {
      setStep("otp");
    } else if (step === "otp") {
      setStep("form");
    } else if (step === "form") {
      setStep("success");
    }
  };

  const handleCongratsClose = () => {
    setShowCongrats(false);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const contentVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              {step === "choice" && (
                <motion.div
                  key="choice"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="p-8 text-center"
                >
                  <h2 className="text-3xl font-bold text-[#3093CB] mb-2">MY ACCOUNT</h2>
                  <p className="text-gray-600 mb-6">LOGIN OR SIGNUP TO ACCESS YOUR ACCOUNT</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setStep("login")}
                      className="w-full py-2 px-4 border-2 border-[#3093CB] text-[#3093CB] hover:bg-blue-50 transition duration-300"
                    >
                      LOGIN
                    </button>
                    <button
                      onClick={() => setStep("signup")}
                      className="w-full py-2 px-4 bg-[#3093CB] text-white hover:bg-white hover:text-[#3093CB] hover:border-2 transition duration-300"
                    >
                      SIGNUP
                    </button>
                  </div>
                  <p className="mt-6 text-gray-500 text-sm cursor-pointer hover:underline">
                    Click here to contact us
                  </p>
                </motion.div>
              )}

              {["login", "signup"].includes(step) && (
                <motion.form
                  key={step}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="p-6"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-2xl font-semibold text-[#3093CB] text-center uppercase mb-4">
                    {step === "login" ? "Login" : "Signup"}
                  </h2>
                  <div className="flex justify-center text-center items-center">
                    <img className="rounded-md mb-10" src={images.Ring5} alt="Ring" />
                  </div>
                  <div className="mb-4 flex">
                    <select className="px-3 py-2 border rounded-l-md bg-gray-100">
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Enter Your Mobile no."
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="flex-1 px-3 py-2 border rounded-r-md"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md"
                  >
                    Request OTP
                  </button>
                  <p className="text-sm text-center mt-4">
                    By continuing, I agree to Terms of Use & Privacy Policy
                  </p>
                </motion.form>
              )}

              {step === "otp" && (
                <motion.form
                  key="otp"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="p-6"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-2xl font-semibold mb-4">Verify Mobile OTP</h2>
                  <p className="mb-4">OTP Sent to Mobile No.: {formData.mobile}</p>
                  <div className="flex justify-between mb-4">
                    {otp.map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="w-12 h-12 text-center border rounded-md"
                        value={otp[index]}
                      />
                    ))}
                  </div>
                  <p className="text-sm mb-4">Resend OTP? Request in 2:00</p>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md"
                  >
                    Verify OTP
                  </button>
                  <p className="text-sm text-center mt-4">
                    By continuing, I agree to Terms of Use & Privacy Policy
                  </p>
                </motion.form>
              )}

              {step === "form" && (
                <motion.form
                  key="form"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="p-6"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-[#3093CB] text-center">Complete Your Profile</h2>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md"
                  >
                    Submit
                  </button>
                </motion.form>
              )}

              {step === "success" && showCongrats && (
                <motion.div
                  key="congrats"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="p-6 text-center"
                >
                  <h2 className="text-2xl font-semibold mb-4">
                    Welcome, {formData.fullName}!
                  </h2>
                  <p>You have successfully completed your profile.</p>
                  <button
                    onClick={handleCongratsClose}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {step === "success" && !showCongrats && (
                <motion.div
                  key="account"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="p-8 pe-28 font-sans text-center absolute top-[10%] bg-white rounded-2xl right-[6%]"
                >
                  <div
                    style={{ backgroundImage: `url(${images.flower1})` }}
                    className="bg-cover bg-center p-4"
                  >
                    <h2 className="text-2xl text-blue-500 tracking-wide font-semibold mb-4">
                      HI {formData.fullName || "User"}!!
                    </h2>
                    <p className="text-sm font-medium mb-4">{formData.mobile}</p>
                  </div>

                  <div className="text-left">
                    <a href="/account" className="text-gray-500 hover:text-blue-400 block mb-2">
                      → My Account
                    </a>
                    <hr className="border" />
                    <a href="/account/orderhistory" className="text-gray-500 hover:text-blue-400 block mb-2">
                      → Order History
                    </a>
                    <hr className="border" />
                    <a href="/account/trackorder" className="text-gray-500 hover:text-blue-400 block mb-2">
                      → Track Order
                    </a>
                    <hr className="border" />
                    <a href="/account/wishlist" className="text-gray-500 hover:text-blue-400 block mb-2">
                      → Wishlist
                    </a>
                    <hr className="border" />
                    <a href="#" className="text-gray-500 hover:text-blue-400 block mb-2">
                      → Log Out
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
