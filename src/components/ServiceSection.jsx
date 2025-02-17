import React from "react";

const services = [
  { name: "Surveillance Map", image: "/assets/service2.png" },
  { name: "AI Assistance", image: "/assets/service3.png" },
  { name: "Onehealth Articles", image: "/assets/service5.png" },
  { name: "Disease Prevention", image: "/assets/service6.png" },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-8 text-center">
      {/* Header */}
      <h2 className="text-3xl font-semibold">Services we offer you</h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        With a comprehensive suite of tools, you can effortlessly monitor and manage 
        public health data. Enhance your surveillance capabilities today.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-48">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Service Title */}
            <div className="p-4">
              <p className="font-medium text-lg">{service.name}</p>
              
              {/* Tail-right Button */}
              <button className="mt-4 flex items-center text-teal-600 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-8">
        <a href="#" className="text-teal-600 font-semibold hover:underline">
          View All
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
