import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "We can't be without them. I've seen firsthand their fair pricing and excellent customer service. They are my go-to choice.",
    author: "MARYANN SIMMS"
  },
  {
    id: 2,
    text: "We offer kitchen design and remodel services. Wellborn provides the best quality I've seen, with fair pricing and outstanding customer service. They are my go-to choice.",
    author: " SIMMS"
  },
  {
    id: 3,
    text: "We can't overlook Capacity's amazing overall offers for our kitchen design and remodel services. Wellborn has the best quality I've seen, with fair pricing and outstanding customer service. They are my go-to line.",
    author: "MARYANN "
  },
];

const ClientTestimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 500); // Matches the duration of the fade transition
    }, 3000); // Change testimonial every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="bg-[#FFF9F3] py-16">
      <div className="container mx-auto px-4  md:h-[25vh] h-[40vh]  overflow-hidden">
        <h2 className="text-lg text-[#2993B5] tracking-widest text-xs text-center uppercase mb-8">Client Testimonials</h2>
        <h2 className="text-3xl font-normal text-center mb-6">Our Happy Clients</h2>
        <div className="flex items-center ">
          <div className={`flex-1 text-center px-8 transition-opacity duration-500 ease-linear ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg text-[#565656] mb-4 first-letter:uppercase ">{testimonials[currentTestimonial].text}</p>
            <p className="tracking-widest text-gray-600 uppercase">— {testimonials[currentTestimonial].author}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
