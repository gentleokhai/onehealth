import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import StatsSection from "./StatsSection";

const Home = () => {
  return (
    <>
    <div className="font-sans text-gray-900">
    <Header />
    <header className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-start text-white px-10" style={{ backgroundImage: "url('/assets/landing.png')" }}>
        <div className="text-left max-w-2xl space-y-6">
            <h1 className="text-5xl font-bold leading-[1.15] tracking-tight">
                Integrated Health Surveillance for a <span className="italic font-semibold">Safer</span> World
            </h1>
            <button className="mt-6 px-6 py-3 bg-[#1BA9B5] hover:bg-[#178D97] text-white font-semibold rounded-lg flex items-center gap-2">
             Get Started Now
             <img src="/assets/tail-right.png" alt="Arrow" className="w-5 h-5" />
          </button>
          <p className="mt-4 text-lg">
            The One Health approach is a collaborative, multisectoral, and transdisciplinary strategy that recognizes the interconnection between human health, animal health, and environmental health.
          </p>
      </div>
    </header>

      <StatsSection />

      {/* Services Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold">Services we offer you</h2>
        <p className="mt-2 text-gray-600">With a comprehensive suite of tools, you can effectively monitor and manage health data.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {['Report Generation', 'Surveillance Map', 'Assistance', 'Analytics', 'CineHealth Articles', 'Disease Prevention', 'Hotlines'].map((service) => (
            <div key={service} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
              <img src={`/images/${service.toLowerCase().replace(/ /g, "-")}.svg`} alt={service} className="w-16 mx-auto mb-4" />
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Why you should choose us?</h2>
          <p className="mt-2 text-gray-600">Your health is our responsibility.</p>
          <div className="flex flex-col md:flex-row items-center mt-8">
            <video className="w-full md:w-1/2 rounded-lg shadow-md" controls>
              <source src="/videos/why-choose-us.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <ul className="mt-6 md:mt-0 md:ml-8 text-left text-lg">
              <li className="mb-4"><strong>1.</strong> Comprehensive Monitoring</li>
              <li className="mb-4"><strong>2.</strong> Expert Analysis</li>
              <li className="mb-4"><strong>3.</strong> AI-driven Model</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Consult Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold">Quick Consult For</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['Lassa Fever', 'Yellow Fever', 'Ebola', 'Influenza', 'Dengue', 'Monkeypox'].map((disease) => (
            <button key={disease} className="px-6 py-3 border border-blue-600 text-white-600 rounded-lg hover: bg-[#1BA9B5] hover:text-white">
              {disease}
            </button>
          ))}
        </div>
      </section>

      {/* Healthcare Articles Section */}
      <section className="bg-gray-100 py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold">OneHealth Healthcare Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {['Complete Nutrition', 'Relationship with Pets', 'Why own a GreenHouse'].map((article) => (
            <div key={article} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition bg-white">
              <p className="text-xl font-medium">{article}</p>
              <p className="text-gray-600 mt-2">The most accurate insights on...</p>
              <button className="mt-4 px-4 py-2  bg-[#1BA9B5] text-white rounded-lg">Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-16 px-8 text-center  bg-[#1BA9B5] text-white">
        <h2 className="text-3xl font-semibold">Chat with Ivie</h2>
        <p className="mt-2">I'm here to assist you with any questions or needs you might have.</p>
        <textarea className="w-full mt-4 p-3 rounded-lg text-gray-900" placeholder="Type your message here..." />
      </section>

      {/* Newsletter Section */}
      <section className="py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        <h2 className="text-lg md:text-2xl font-semibold text-center md:text-left">
          <span className="block">Subscribe to our newsletter</span>
          <span className="block">to get the latest news in your inbox</span>
        </h2>
        
        <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-2">
          <input
              type="email"
              placeholder="Enter your email" 
              className="p-3 border rounded-lg sm:rounded-l-lg sm:rounded-r-none w-full sm:w-64"
          />
            <button className="px-6 py-3 bg-[#1BA9B5] hover:bg-[#178D97] text-white font-semibold rounded-lg sm:rounded-r-lg sm:rounded-l-none flex items-center gap-2">
              Get Started Now
              <img src="/assets/tail-right.png" alt="Arrow" className="w-5 h-5" />
            </button>
          </div>
        </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
};

export default Home;
