import React, { useEffect, useState } from 'react';

const apiData = [
  {
    title: "Wedding Planning Essentials",
    button: "Book Your Slot",
    images: [
      "/images/we1.jpg",
      "/images/we2.jpg",
      "/images/we3.jpg"
    ]
  },
  {
    title: "Birthday Party Decorations",
    button: "Book Your Slot",
    images: [
      "/images/b1.jpg",
      "/images/b2.jpg",
      "/images/b3.jpg",
    ]
  },
  {
    title: "Reception",
    button: "Book Your Slot",
    images: [
     "/images/re1.jpg",
      "/images/re2.jpg",
      "/images/re3.jpg",
    ]
  },
  {
    title: "Navratri Celebrations",
    button: "Book Your Slot",
    images: [
       "/images/nv2.jpg",
      "/images/nv4.jpg",
      "/images/nv8.jpg",
    ]
  }
];

const Planner = () => {
  const [imgIndexes, setImgIndexes] = useState(new Array(apiData.length).fill(0));


  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndexes(prev =>
        prev.map((val, i) => (val + 1) % apiData[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FAF9F8] text-[#2C3E50] min-h-screen font-['Inter'] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-light mb-2 font-['Great_Vibes'] text-[#2C3E50]">
          Let's Plan Your Perfect Wedding
        </h1>
        <p className="text-sm text-[#2C3E50] tracking-widest font-semibold uppercase mb-12">
          Welcome
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-15xl mx-auto">
          {apiData.map((item, i) => (
            <div key={i} className="transition-all duration-700 ease-in-out">
              <div className="border border-[#2C3E50]/30 shadow-md p-1 rounded-lg h-80 overflow-hidden">
                <img
                  src={item.images[imgIndexes[i]]}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md transition duration-500"
                />
              </div>
              <p className="mt-6 text-lg font-semibold text-[#2C3E50]">{item.title}</p>
              <button className="mt-4 bg-[#2C3E50] hover:bg-[#22374A] transition text-white text-xs font-semibold tracking-widest py-2 px-6 rounded-md shadow">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planner;
