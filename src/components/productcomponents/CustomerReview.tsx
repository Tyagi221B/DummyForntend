import React from 'react';
import { motion } from 'framer-motion';

interface Review {
  id: number;
  name: string;
  date: string;
  content: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'SANA TUMBAJ',
    date: 'June 22',
    content: 'Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One! Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One!'
  },
  {
    id: 2,
    name: 'JATIN KUMAR',
    date: 'September 15',
    content: 'Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One! Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One!'
  },
  {
    id: 3,
    name: 'KANHAIYA',
    date: 'May 02',
    content: 'Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One! Give Your Everyday Style A Flourish Of Sparkling Romance With These Heart Shaped Earrings. This Pair Also Makes For A Great Gift For A Loved One!'
  },
  {
    id: 4,
    name: 'ANKITA SHARMA',
    date: 'March 10',
    content: 'A perfect addition to your jewelry collection! These earrings are elegant and versatile.'
  },
  {
    id: 5,
    name: 'RAHUL VERMA',
    date: 'July 24',
    content: 'Stylish and affordable, these earrings are a must-have. Highly recommend!'
  },
  {
    id: 6,
    name: 'PRIYA SINGH',
    date: 'August 30',
    content: 'Beautiful design and great quality. I am very happy with my purchase!'
  },
  {
    id: 7,
    name: 'MOHIT AGARWAL',
    date: 'January 05',
    content: 'These earrings are simply amazing. They go well with everything!'
  },
  {
    id: 8,
    name: 'RITU MALHOTRA',
    date: 'October 17',
    content: 'Absolutely love these earrings. They are so pretty and comfortable to wear.'
  },
  {
    id: 9,
    name: 'ANKUR JAIN',
    date: 'November 21',
    content: 'Great product at a great price. I will definitely buy again!'
  },
  {
    id: 10,
    name: 'NEHA GUPTA',
    date: 'December 12',
    content: 'These earrings are perfect for any occasion. Very happy with my purchase!'
  },
];

const CustomerReview: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden">
      <h2 className="text-2xl font-display mb-6 text-center">CUSTOMER REVIEWS</h2>
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 80, ease: 'linear' }} // Slower scroll speed
      >
        {reviews.concat(reviews).map((review, index) => (
          <div key={index} className="bg-white p-10 border rounded-lg shadow-md mx-4 min-w-[500px]"> {/* Increased width */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white border border-gray-400 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-gray-600 bg-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-display">{review.name}</h3>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 line-clamp-4">{review.content}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CustomerReview;
