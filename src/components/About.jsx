import React from "react";
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      {/* Hero Section */}
      <section className="relative text-center pt-28 py-12">
        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-[61.19px] font-bold leading-[66px] 
                 text-[#161C2D] tracking-[-2.04px]">
          Our Story
        </h2>
        <div className="pt-24"> {/* Adjust padding so content isn't overlapped by h2 */}
          <p className="max-w-4xl mx-auto mt-4 text-gray-900">
            Welcome to White Water Research Group, pioneers in developing a cutting-edge Digital OneHealth Surveillance System tailored for sub-Saharan Africa. Our mission is to create a holistic, community-driven, and intelligent surveillance platform that seamlessly integrates the health of humans, animals, plants, and the environment.
          </p>
          <img src="/assets/about.jpg" alt="Team discussion" className="mx-auto mt-6 w-4/5 rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        {/* Heading */}
        <h3 className="text-[48px] font-bold leading-[54px] text-[#161C2D] tracking-[-1.5px]">
          What problems are
        </h3>
        <h3 className="text-[48px] font-bold leading-[54px] text-[#161C2D] tracking-[-1.5px] mb-6">
          we solving
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed">
          DOHS is a holistic and systems-based approach that recognizes the interconnection between the health of humans, animals, plants, and the environment. This potent and intelligent mapping effectively informs and predicts future infectious diseases, environmental dangers, and health hazards, positively influencing improvements in disease surveillance, environmental protection, and food security.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our innovative system harnesses the power of advanced data analytics and AI to predict and respond to these threats. By fostering collaboration among various sectors, we aim to enhance disease surveillance, environmental protection, and food security. The relationship between health, food production, and natural systems is integrated to transform the interactions between humans, animals, plants, and the environment. This holistic integration promotes futuristic economic, environmental, and social sustainability.
        </p>

        {/* Sustainable Development Goals Section */}
        <p className="mt-2 text-xl">Our efforts significantly contribute to several Sustainable Development Goals (SDGs), including:</p>
        <ul className="mt-2 list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li>Zero Hunger (SDG 2)</li>
          <li>Good Health and Well-being (SDG 3)</li>
          <li>Clean Water and Sanitation (SDG 6)</li>
          <li>Life Below Water (SDG 14)</li>
          <li>Life on Land (SDG 15)</li>
          <li>Partnerships for the Goals (SDG 17)</li>
        </ul>

        {/* Final Paragraph */}
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          For most sub-Saharan countries, case management systems and incident reporting systems for animals, plants, and the environment are either not operational or do not share real-time data to rouse technical attention on community health. The gap in effective outbreak response from intersectoral spillovers to and from other sectors must be integrated intelligently and analytically into every OH surveillance system without waiting for rippling effects or rescinding to prolonged human assessment. Consequently, DOH systems need to advance into defining systems of information exchanges between the stakeholder agencies to promote interagency participation and close stakeholder inclusion gaps. Even more, to be able to assess country-level preparedness for localized and innovative adoption of OH systems.
        </p>
      </section>

      {/* Impact Section */}

      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Image on the Left */}
          <div className="w-full md:w-1/2">
            <img src="/assets/impact.png" alt="Impact visuals" className="w-full rounded-lg shadow-lg" />
          </div>

          {/* Text on the Right */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12 text-left">
            <h3 className="text-5xl font-bold text-[#161C2D]">Impact</h3>
            <ul className="mt-2 space-y-1 text-gray-700 text-lg leading-snug">
              <li>Intersectoral spillover threat-alert to community health</li>
              <li>Prevention of outbreaks of zoonotic disease in animals and people</li>
              <li>Improvement in food safety and security</li>
              <li>A robust alert system</li>
              <li>Reduction in anti-microbial resistant infections</li>
              <li>Improvement of human and animal health</li>
              <li>Empowerment of frontline workers with supportive technologies</li>
              <li>Protection of global health security</li>
              <li>Protection of biodiversity and conservation</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="bg-gray-100 py-12 px-6 mx-auto">
        <h3 className="text-3xl font-bold text-center">Meet our Team</h3>
        <p className="mt-6 text-gray-700 text-center max-w-6xl mx-auto text-lg leading-relaxed">
          Our team is a harmonious blend of experienced doctors, dedicated researchers, and skilled software developers, ensuring a comprehensive and innovative approach to digital health surveillance.
          With a wealth of expertise, we share common trends and strategies to improve health outcomes and ensure our platform remains at the forefront of technological advancements.
          Leveraging our unique skill sets, we create a seamless and user-friendly experience, allowing you to focus on what matters most. Build your next health surveillance solution with confidence, knowing our balanced team is here to support you every step of the way.
        </p>

        <div className="grid grid-cols-4 gap-6 mt-8">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="text-center">
              <img src={`/images/team${i + 1}.svg`} alt={`Team member ${i + 1}`} className="rounded-full w-24 mx-auto" />
              <p className="mt-2 font-medium">Name {i + 1}</p>
              <p className="text-gray-600">Position</p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl text-gray-600">Stakeholders</h3>
        <ol>Tetfund</ol>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
