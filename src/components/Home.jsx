//Home page
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import StatsSection from "./landing/StatsSection";
import ServiceSection from "./landing/ServiceSection";
import QuickConsult from "./landing/QuickConsult";
import ArticleSection from "./landing/ArticleSection";

const Home = () => {
  return (
    <div className="font-sans text-gray-900">
      <Header />
    <header className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-start text-white px-10" style={{ backgroundImage: "url('/assets/landing.png')" }}>
        <div className="text-left max-w-2xl space-y-6">
            <h1 className="text-5xl font-bold leading-[1.15] tracking-tight">
                Integrated Health Surveillance for a <span className="italic font-semibold">Safer</span> World
            </h1>
            <a href="/signup"  className="no-underline">
              <button className="mt-6 px-6 py-3 bg-[#1BA9B5] hover:bg-[#178D97] text-white font-semibold rounded-lg flex items-center gap-2">
                Get Started Now
                <img src="/assets/tail-right.png" alt="Arrow" className="w-5 h-5" />
              </button>
            </a>

          <p className="mt-4 text-lg">
            The One Health approach is a collaborative, multisectoral, and transdisciplinary strategy that recognizes the interconnection between human health, animal health, and environmental health.
          </p>
      </div>
    </header>



      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Why Choose Us Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
        <p className="mt-2 text-gray-600">We provide AI-powered, real-time health monitoring solutions.</p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-80">
            <h3 className="text-xl font-semibold text-teal-600">Comprehensive Monitoring</h3>
            <p className="mt-2 text-gray-600">Real-time tracking of global health trends.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-80">
            <h3 className="text-xl font-semibold text-teal-600">Expert Analysis</h3>
            <p className="mt-2 text-gray-600">Insights from top health professionals.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-80">
            <h3 className="text-xl font-semibold text-teal-600">AI-Driven Intelligence</h3>
            <p className="mt-2 text-gray-600">Predictive models for early detection.</p>
          </div>
        </div>
      </section>

      {/* Quick Consult Section */}
      <QuickConsult />

      {/* Healthcare Articles Section */}
      <ArticleSection />

      {/* Chat Section */}
      {/* <section className="py-20 px-12 bg-teal-600 text-white text-center">
        <h2 className="text-4xl font-bold">Need Assistance?</h2>
        <p className="mt-4 text-lg">Our AI-powered assistant is here to help with your queries.</p>
        <button className="mt-6 px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">Chat Now</button>
      </section> */}

      {/* Newsletter Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Stay Updated</h2>
        <p className="mt-2 text-gray-600">Subscribe to receive the latest news and updates.</p>
        <div className="mt-6 flex justify-center gap-2">
          <input type="email" placeholder="Enter your email" className="p-3 border rounded-lg w-64" />
          <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition">Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
