// import { Facebook, Instagram, Twitter } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
//         {/* About Section */}
//         <div className="md:col-span-2">
//           <h2 className="text-lg font-bold">DOHS</h2>
//           <p className="text-gray-400 mt-2 text-sm">
//             Health care refers to the efforts that medical professionals make to restore our physical and mental well-being. The term also includes the provision of services to maintain emotional well-being. We call people and organizations that provide these services ‘health-care providers.’
//           </p>
//         </div>

//         {/* Links Sections */}
//         <div>
//           <h3 className="text-teal-400 font-semibold">Overview</h3>
//           <ul className="mt-2 text-gray-400 text-sm space-y-1">
//             <li>Report Generation</li>
//             <li>Surveillance Map</li>
//             <li>AI Assistance</li>
//             <li>Analytics</li>
//             <li>OneHealth Articles</li>
//             <li>OneHealth Disease Prevention</li>
//             <li>Hotlines</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-teal-400 font-semibold">Company</h3>
//           <ul className="mt-2 text-gray-400 text-sm space-y-1">
//             <li>Home</li>
//             <li>About us</li>
//             <li>Services</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-teal-400 font-semibold">Explore</h3>
//           <ul className="mt-2 text-gray-400 text-sm space-y-1">
//             <li>Blogs & Feeds</li>
//             <li>Privacy Policy</li>
//             <li>Cookies</li>
//           </ul>
//         </div>

//         {/* Contact and Social Media */}
//         <div>
//           <h3 className="text-teal-400 font-semibold">Contact Us</h3>
//           <p className="mt-2 text-white font-semibold">+234 123 456 7890</p>
//           <p className="mt-2 text-white">whitewateresearchgroup@gmail.com</p>
//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="text-gray-400 hover:text-white">
//               <Facebook size={20} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <Instagram size={20} />
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               <Twitter size={20} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="mt-6 text-center text-gray-500 text-xs">
//         Copyright © Digital OneHealth Surveillance by WWRG 2025
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold">DOHS</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Health care refers to the efforts that medical professionals make to restore our physical and mental well-being. The term also includes the provision of services to maintain emotional well-being. We call people and organizations that provide these services ‘health-care providers.’
          </p>
        </div>

        {/* Links Sections */}
        <div>
          <h3 className="text-teal-400 font-semibold">Overview</h3>
          <ul className="mt-2 text-gray-400 text-sm space-y-1">
            <li>Report Generation</li>
            <li>Surveillance Map</li>
            <li>AI Assistance</li>
            <li>Analytics</li>
            <li>OneHealth Articles</li>
            <li>OneHealth Disease Prevention</li>
            <li>Hotlines</li>
          </ul>
        </div>

        <div>
          <h3 className="text-teal-400 font-semibold">Company</h3>
          <ul className="mt-2 text-gray-400 text-sm space-y-1">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
          </ul>
        </div>

        <div>
          <h3 className="text-teal-400 font-semibold">Explore</h3>
          <ul className="mt-2 text-gray-400 text-sm space-y-1">
            <li>Blogs & Feeds</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>

        {/* Contact and Social Media (Now in the Grid) */}
        <div>
          <h3 className="text-teal-400 font-semibold">Contact Us</h3>
          <p className="mt-1 text-white font-semibold">+234 123 456 7890</p>
          <p className="mt-1 text-white">whitewateresearchgroup@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-xs">
        Copyright © Digital OneHealth Surveillance by WWRG 2025
      </div>
    </footer>
  );
};

export default Footer;
