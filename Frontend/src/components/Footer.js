// import { Link } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-gray-300 py-8 mt-20 h-[50vh]">
//       <div className="container mx-auto px-6 md:flex md:justify-between">
//         {/* Logo & Description */}
//         <div className="mb-6 md:mb-0">
//           <h2 className="text-2xl font-bold text-gray-200">epicFoods</h2>
//           <p className="text-gray-400 mt-2 text-sm">
//             Delicious meals, crafted with care for every occasion.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="mb-6 md:mb-0">
//           <h3 className="text-lg font-semibold text-gray-200">Quick Links</h3>
//           <ul className="mt-2 space-y-2">
//             <li>
//               <Link to="/" className="text-gray-400 hover:text-gray-200 transition duration-300">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/menu" className="text-gray-400 hover:text-gray-200 transition duration-300">
//                 Menu
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="text-gray-400 hover:text-gray-200 transition duration-300">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="text-gray-400 hover:text-gray-200 transition duration-300">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact & Social Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-gray-200">Contact Us</h3>
//           <p className="text-gray-400 mt-2 text-sm">support@munchmates.com</p>
//           <p className="text-gray-400 text-sm">+1 (234) 567-890</p>

//           {/* Social Media Icons */}
//           <div className="flex space-x-4 mt-4">
//             <a
//               href="https://facebook.com/munchmates"
//               className="text-gray-400 hover:text-gray-200 text-lg transition duration-300"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               href="https://instagram.com/munchmates"
//               className="text-gray-400 hover:text-gray-200 text-lg transition duration-300"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://twitter.com/munchmates"
//               className="text-gray-400 hover:text-gray-200 text-lg transition duration-300"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="mailto:support@munchmates.com"
//               className="text-gray-400 hover:text-gray-200 text-lg transition duration-300"
//             >
//               <FaEnvelope />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} MunchMates. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-20 min-h-[60vh]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0">

        {/* Logo & Description */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-200">epicFoods</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Delicious meals, crafted with care for every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-gray-200 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="text-gray-400 hover:text-gray-200 transition duration-300"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-gray-200 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-gray-200 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Our Address</h3>
          <p className="text-gray-400 text-sm">
            DIGITAL CAFETERIA SOLUTIONS PVT. LTD.
          </p>
          <p className="text-gray-400 text-sm">
            604 C-Wing Space Olympia,<br />
            Sut Girni Rd, Garkheda,<br />
            Aurangabad, Maharashtra 431005.
          </p>
        </div>

        {/* Contact & Social Icons */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Contact Us</h3>
          <p className="text-gray-400 text-sm">support@munchmates.com</p>
          <p className="text-gray-400 text-sm">+1 (234) 567-890</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com/munchmates"
              className="text-gray-400 hover:text-gray-200 text-xl transition duration-300"
              target="_blank" rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/munchmates"
              className="text-gray-400 hover:text-gray-200 text-xl transition duration-300"
              target="_blank" rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/munchmates"
              className="text-gray-400 hover:text-gray-200 text-xl transition duration-300"
              target="_blank" rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:support@munchmates.com"
              className="text-gray-400 hover:text-gray-200 text-xl transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-40 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} epicFoods. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
