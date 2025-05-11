import React, { useEffect, useState } from 'react';

const apiData = [
  {
    title: "Wedding Planning Essentials",
    button: "Shop Now",
    images: [
      "/images/we1.jpg",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&q=80&w=400",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&w=400"
    ]
  },
  {
    title: "Birthday Party Decorations",
    button: "Explore Decorations",
    images: [
      "/images/b1.jpg",
      "/images/b2.jpg",
      "images/b3.jpg"
    ]
  },
  {
    title: "Wedding Cakes",
    button: "Order Cakes",
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&w=400",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&w=400",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&w=400"
    ]
  },
  {
    title: "Navratri Celebrations",
    button: "Navratri Celebrations",
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&w=400",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&w=400",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&q=80&w=400"
    ]
  }
];

const Planner = () => {
  const [imgIndexes, setImgIndexes] = useState([0, 0, 0]);

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
