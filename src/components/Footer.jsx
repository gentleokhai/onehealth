//Footer
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* About Section */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-teal-400">DOHS</h2>
            <p className="text-gray-400 mt-4 text-lg leading-relaxed">
              Health care encompasses efforts by medical professionals to restore and maintain physical, mental, and emotional well-being. Our mission is to provide quality health solutions through innovation and care.
            </p>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-teal-400 font-semibold text-2xl">Overview</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Report Generation",
                "Surveillance Map",
                "AI Assistance",
                "Analytics",
                "OneHealth Articles",
                "OneHealth Disease Prevention",
                "Hotlines"
              ].map((item) => (
                <li
                  key={item}
                  className="text-gray-400 text-lg hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-teal-400 font-semibold text-2xl">Company</h3>
            <ul className="mt-4 space-y-3">
              {["Home", "About us", "Services"].map((item) => (
                <li
                  key={item}
                  className="text-gray-400 text-lg hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-teal-400 font-semibold text-2xl">Explore</h3>
            <ul className="mt-4 space-y-3">
              {["Blogs & Feeds", "Privacy Policy", "Cookies"].map((item) => (
                <li
                  key={item}
                  className="text-gray-400 text-lg hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-teal-400 font-semibold text-2xl">Contact Us</h3>
            <p className="mt-3 text-white font-semibold text-xl">+234 123 456 7890</p>
            <p className="text-gray-400 text-lg">whitewateresearchgroup@gmail.com</p>
            <div className="flex space-x-6 mt-5">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" }
              ].map(({ icon: Icon, href }, index) => (
                <a key={index} href={href} className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} Digital OneHealth Surveillance by WWRG. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
