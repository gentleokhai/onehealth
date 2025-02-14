//Home page
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import StatsSection from "./StatsSection";
import ServiceSection from "./ServiceSection";
import QuickConsult from "./QuickConsult";
import ArticleSection from "./ArticleSection";

const Home = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-blue-700 text-white px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-30 animate-pulse"></div>
        <div className="relative max-w-3xl z-10">
          <h1 className="text-6xl font-extrabold leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Transforming Health Surveillance
          </h1>
          <p className="mt-6 text-xl opacity-90">
            Harnessing AI-driven analytics for smarter and proactive health solutions.
          </p>
          <a
            href="/signup"
            className="mt-8 inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            Get Started
          </a>
        </div>
      </section>


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
      <section className="py-20 px-12 bg-teal-600 text-white text-center">
        <h2 className="text-4xl font-bold">Need Assistance?</h2>
        <p className="mt-4 text-lg">Our AI-powered assistant is here to help with your queries.</p>
        <button className="mt-6 px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">Chat Now</button>
      </section>

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
