import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">DOHS</h1>
        <ul className="flex space-x-6">
          <li className="text-gray-700 hover:text-black cursor-pointer">Home</li>
          <li className="text-gray-700 hover:text-black cursor-pointer">Stories</li>
          <li className="text-gray-700 hover:text-black cursor-pointer">Surveillance Data</li>
          <li className="text-gray-700 hover:text-black cursor-pointer">Subscriber Portal</li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Contact Centre</button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold">Our story</h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-700">
          Welcome to Wildlife One Research Group, pioneers in developing a cutting-edge Digital One Health
          Surveillance System tailored for Sub-Saharan Africa.
        </p>
        <img src="/images/hero.svg" alt="Team discussion" className="mx-auto mt-6 w-4/5 rounded-lg shadow-lg" />
      </section>

      {/* Problem Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold">What problem are we solving?</h3>
        <p className="mt-4 text-gray-700">
          DOHS is built on a data-driven approach that integrates the interconnectedness of human, animal, plant,
          and environmental health...
        </p>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h3 className="text-3xl font-bold">Impact</h3>
        <p className="mt-4 text-gray-700">
          Innovative solutions for better community health and environment.
        </p>
        <img src="/images/impact.svg" alt="Impact visuals" className="mx-auto mt-6 w-3/5 rounded-lg shadow-lg" />
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center">Meet our Team</h3>
        <p className="mt-4 text-gray-700 text-center">
          Our team is a blend of experienced doctors, researchers, and software developers.
        </p>
        <div className="grid grid-cols-4 gap-6 mt-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="text-center">
              <img src={`/images/team${i + 1}.svg`} alt={`Team member ${i + 1}`} className="rounded-full w-24 mx-auto" />
              <p className="mt-2 font-medium">Name {i + 1}</p>
              <p className="text-gray-600">Position</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex justify-between">
          <div>
            <h4 className="text-lg font-semibold">DOHS</h4>
            <p className="text-gray-400">Innovative solutions for a better tomorrow.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="text-gray-400">+234 123 456 7890</p>
            <p className="text-gray-400">wildlifeoneresearchgroup@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
