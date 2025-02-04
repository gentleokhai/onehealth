// // import { useState } from "react";
// // import { Menu, X } from "lucide-react";

// // const Header = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav className="bg-white text-black py-4 px-0 fixed w-full top-0 shadow-md z-50">
// //       <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
// //         {/* Logo */}
// //         <a href="#" className="text-3xl font-extrabold text-black tracking-wide">
// //           DOHS
// //         </a>

// //         {/* Desktop Links */}
// //         <ul className="hidden md:flex space-x-6 text-lg font-semibold items-center">
// //           <li><a href="#" className="hover:text-teal-500">Home</a></li>
// //           <li><a href="#" className="hover:text-teal-500">About</a></li>
// //           <li><a href="#" className="hover:text-teal-500">Surveillance Data</a></li>
// //           <li><a href="#" className="hover:text-teal-500">Stakeholder Portal</a></li>
// //           <li><a href="#" className="hover:text-teal-500">Logic</a></li>
// //           <li className="text-lg font-bold">Call 1800-00000-0000 or</li>
// //           <li>
// //             <button className="ml-4 px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full">
// //               Consult Online
// //             </button>
// //           </li>
// //         </ul>

// //         {/* Mobile Menu Button */}
// //         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
// //           {isOpen ? <X size={30} /> : <Menu size={30} />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <div className="md:hidden bg-white text-center py-4 shadow-lg">
// //           <ul className="text-lg font-semibold space-y-4">
// //             <li><a href="#" className="block py-2 hover:text-teal-500">Home</a></li>
// //             <li><a href="#" className="block py-2 hover:text-teal-500">About</a></li>
// //             <li><a href="#" className="block py-2 hover:text-teal-500">Surveillance Data</a></li>
// //             <li><a href="#" className="block py-2 hover:text-teal-500">Stakeholder Portal</a></li>
// //             <li><a href="#" className="block py-2 hover:text-teal-500">Logic</a></li>
// //             <li className="font-bold">Call 1800-00000-0000</li>
// //             <li>
// //               <button className="mt-4 px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg">
// //                 Consult Online
// //               </button>
// //             </li>
// //           </ul>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Header;

// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white text-black py-3 px-0 fixed w-full top-0 shadow-md z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
//         {/* Logo */}
//         <a href="#" className="text-3xl font-extrabold text-black tracking-wide">
//           DOHS
//         </a>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-8 text-lg font-semibold items-center">
//           <li><a href="#" className="hover:text-teal-500 px-4 py-2">Home</a></li>
//           <li><a href="#" className="hover:text-teal-500 px-4 py-2">About</a></li>
//           <li><a href="#" className="hover:text-teal-500 px-4 py-2">Surveillance Data</a></li>
//           <li><a href="#" className="hover:text-teal-500 px-4 py-2">Stakeholder Portal</a></li>
//           <li><a href="#" className="hover:text-teal-500 px-4 py-2">Logic</a></li>
//           <li className="text-lg font-bold px-4 py-2">Call 1800-00000-0000 or</li>
//           <li>
//             <button className="mt-4 px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full">
//               Consult Online
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={30} /> : <Menu size={30} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white text-center py-4 shadow-lg">
//           <ul className="text-lg font-semibold space-y-4">
//             <li><a href="#" className="block py-2 hover:text-teal-500">Home</a></li>
//             <li><a href="#" className="block py-2 hover:text-teal-500">About</a></li>
//             <li><a href="#" className="block py-2 hover:text-teal-500">Surveillance Data</a></li>
//             <li><a href="#" className="block py-2 hover:text-teal-500">Stakeholder Portal</a></li>
//             <li><a href="#" className="block py-2 hover:text-teal-500">Logic</a></li>
//             <li className="font-bold">Call 1800-00000-0000</li>
//             <li>
//               <button className="mt-4 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full">
//                 Consult Online
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;


import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black py-4 px-6 fixed w-full top-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-3xl font-extrabold tracking-wide">
          DOHS
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <li><a href="#" className="hover:text-teal-500 font-semibold">Home</a></li>
          <li><a href="#" className="hover:text-teal-500">About</a></li>
          <li><a href="#" className="hover:text-teal-500">Surveillance Data</a></li>
          <li><a href="#" className="hover:text-teal-500">Stakeholder Portal</a></li>
          <li><a href="#" className="hover:text-teal-500">LogIn</a></li>
          
          {/* Call Info */}
          <li className="flex items-center space-x-1">
            <span className="text-gray-500">Call</span>
            <span className="font-bold text-teal-700">1800 425 3800</span>
            <span className="text-gray-500">or</span>
          </li>

          {/* Consult Online Button */}
          <li>
            <button className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full">
              Consult Online
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-center py-4 shadow-lg">
          <ul className="text-lg font-semibold space-y-4">
            <li><a href="#" className="block py-2 hover:text-teal-500">Home</a></li>
            <li><a href="#" className="block py-2 hover:text-teal-500">About</a></li>
            <li><a href="#" className="block py-2 hover:text-teal-500">Surveillance Data</a></li>
            <li><a href="#" className="block py-2 hover:text-teal-500">Stakeholder Portal</a></li> <li><a href="#" className="block py-2 hover:text-teal-500">LogIn</a></li> <li className="py-2 text-gray-500">Call <span className="font-bold text-teal-700">1800 425 3800</span> or</li> <li> <button className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full"> Consult Online </button> </li> </ul> </div> )} </nav> ); };

export default Header;