
// import { useState, useEffect, useRef, useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaUser, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
// import Login from "./Auth/Login";
// import { AuthContext } from "./Auth/AuthContext";

// const Navbar = () => {
//   const { isLoggedIn, userName, handleLoginSuccess, handleLogout } = useContext(AuthContext);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [submenuOpen, setSubmenuOpen] = useState({ services: false, thefoods: false });

//   const location = useLocation();
//   const currentPath = location.pathname;
//   const dropdownRef = useRef(null);
//   const submenuTimers = useRef({ services: null, thefoods: null });

//   const navItems = [
//     { name: "Home", path: "/" },
//     {
//       name: "Services",
//       submenu: [
//         { name: "Packages And Plan", path:"/PackagesAndPlan" },
//         { name: "Corporate", path:"/Corporate" },
//         { name: "Retail", path:"/Retail" },
//       ],
//     },
//     {
//       name: "The Foods",
//       submenu: [
//         { name: "About Us", path: "/about" },
//         { name: "Our Connections", path: "/OurConnections" },
//         { name: "Our Teams", path: "/Teams" },
//       ],
//     },
//     { name: "Contact", path: "/contact" },
//     { name: "Faq's", path: "/Faqs" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const handleLoginClick = () => {
//     setIsLoginOpen(true);
//     setMenuOpen(false);
//   };

//   const handleSubmenuMouseEnter = (menu) => {
//     clearTimeout(submenuTimers.current[menu]);
//     setSubmenuOpen((prev) => ({ ...prev, [menu]: true }));
//   };

//   const handleSubmenuMouseLeave = (menu) => {
//     submenuTimers.current[menu] = setTimeout(() => {
//       setSubmenuOpen((prev) => ({ ...prev, [menu]: false }));
//     }, 300);
//   };

//   const toggleSubmenuMobile = (menu) => {
//     setSubmenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   return (
//     <>
//       <nav
//         className={`fixed w-full top-0 z-50 transition-all duration-500 ${
//           isScrolled
//             ? "bg-white/90 backdrop-blur-md text-gray-800 shadow-md"
//             : "bg-transparent text-white"
//         } py-6 lg:py-8 border-b border-gray-200`}
//       >
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="text-3xl font-extrabold flex items-center font-poppins">
//             <span className="mr-2 text-maroon-600">Epic</span>
//             <span className="text-maroon-900 animate-pulse">Foods</span>
//           </Link>

//           {/* Hamburger */}
//           <button
//             className={`lg:hidden text-2xl ${isScrolled ? "text-maroon-800" : "text-white"}`}
//             onClick={toggleMenu}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>

//           {/* Nav Links */}
//           <ul
//             className={`lg:flex lg:space-x-8 absolute lg:static top-20 left-0 w-full lg:w-auto ${
//               isScrolled ? "bg-white" : "bg-black/60"
//             } lg:bg-transparent p-4 lg:p-0 ${
//               menuOpen ? "block shadow-lg" : "hidden lg:flex"
//             } z-50`}
//           >
//             {navItems.map((item, idx) => {
//               const key = item.name.toLowerCase().replace(/\s/g, "");

//               if (item.submenu) {
//                 return (
//                   <li
//                     key={idx}
//                     className="relative font-poppins"
//                     onMouseEnter={() => handleSubmenuMouseEnter(key)}
//                     onMouseLeave={() => handleSubmenuMouseLeave(key)}
//                   >
//                     <button
//                       type="button"
//                       onClick={() => toggleSubmenuMobile(key)}
//                       className={`flex items-center w-full py-2 font-medium group ${
//                         isScrolled ? "text-maroon-800" : "text-white"
//                       }`}
//                     >
//                       {item.name}
//                       <svg className="ml-1 h-3 w-3 fill-current mt-1" viewBox="0 0 20 20">
//                         <path d="M5.516 7.548l4.484 4.545 4.484-4.545-1.032-1.052-3.452 3.496-3.452-3.496z" />
//                       </svg>
//                     </button>
//                     <ul
//                       className={`absolute left-0 mt-1 min-w-[12rem] rounded-md border border-gray-200 shadow-lg bg-white z-50 ${
//                         submenuOpen[key] ? "block" : "hidden"
//                       } lg:group-hover:block`}
//                     >
//                       {item.submenu.map((sub, subidx) => (
//                         <li key={subidx}>
//                           <Link
//                             to={sub.path}
//                             onClick={() => setMenuOpen(false)}
//                             className="block px-4 py-3 text-maroon-800 hover:text-maroon-600"
//                           >
//                             {sub.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 );
//               }

//               return (
//                 <li key={idx}>
//                   <Link
//                     to={item.path}
//                     onClick={() => setMenuOpen(false)}
//                     className={`block py-2 font-medium relative group font-poppins ${
//                       currentPath === item.path
//                         ? "text-maroon-700 font-semibold"
//                         : isScrolled
//                         ? "text-maroon-800 hover:text-maroon-600"
//                         : "text-white"
//                     }`}
//                   >
//                     {item.name}
//                     <span
//                       className={`absolute left-0 bottom-0 w-0 h-0.5 bg-maroon-700 transition-all duration-300 group-hover:w-full ${
//                         currentPath === item.path ? "w-full" : ""
//                       }`}
//                     ></span>
//                   </Link>
//                 </li>
//               );
//             })}

//             {/* Mobile Login/Profile */}
//             <li className="lg:hidden">
//               {isLoggedIn ? (
//                 <div className="relative" ref={dropdownRef}>
//                   <button
//                     onClick={toggleDropdown}
//                     className="block w-full text-left py-2 font-medium flex items-center text-maroon-700"
//                   >
//                     <FaUser className="mr-2" /> {userName || "Profile"}
//                   </button>
//                   {dropdownOpen && (
//                     <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
//                       <button
//                         onClick={handleLogout}
//                         className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-100 flex items-center"
//                       >
//                         <FaSignOutAlt className="mr-2" /> Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <button
//                   onClick={handleLoginClick}
//                   className="block w-full text-left py-2 font-medium text-maroon-800"
//                 >
//                   <FaUser className="mr-2" /> Login
//                 </button>
//               )}
//             </li>
//           </ul>

//           {/* Desktop Login/Profile */}
//           <div className="hidden lg:block relative" ref={dropdownRef}>
//             {!isLoggedIn ? (
//               <button
//                 onClick={handleLoginClick}
//                 className="flex items-center px-4 py-2 bg-gradient-to-br from-maroon-700 to-maroon-900 text-white rounded-full hover:from-maroon-800 hover:to-maroon-900 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
//               >
//                 <FaUser className="mr-2" /> Login
//               </button>
//             ) : (
//               <div className="relative">
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex items-center px-4 py-2 bg-maroon-700 text-white rounded-full hover:bg-maroon-800 transition duration-300 shadow-md"
//                 >
//                   <FaUser className="mr-2" /> {userName || "Profile"}
//                 </button>
//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-100 flex items-center"
//                     >
//                       <FaSignOutAlt className="mr-2" /> Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Login Modal */}
//       {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} onSuccess={handleLoginSuccess} />}
//     </>
//   );
// };

// export default Navbar;


import { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import Login from "./Auth/Login";
import { AuthContext } from "./Auth/AuthContext";

const Navbar = () => {
  const { isLoggedIn, userName, handleLoginSuccess, handleLogout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({ services: false, thefoods: false });

  const location = useLocation();
  const currentPath = location.pathname;
  const dropdownRef = useRef(null);
  const submenuTimers = useRef({ services: null, thefoods: null });

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      submenu: [
        { name: "Packages and Plan", path: "/services/packages" },
        { name: "Corporate", path: "/services/corporate" },
        { name: "Retail", path: "/services/retail" },
      ],
    },
    {
      name: "The Foods",
      submenu: [
        { name: "About Us", path: "/about" },
        { name: "Our Connections", path: "/OurConnections" },
        { name: "Our Teams", path: "/Teams" },
      ],
    },
    { name: "Contact", path: "/contact" },
    { name: "Faq's", path: "/Faqs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setMenuOpen(false);
  };

  const handleSubmenuMouseEnter = (menu) => {
    clearTimeout(submenuTimers.current[menu]);
    setSubmenuOpen((prev) => ({ ...prev, [menu]: true }));
  };

  const handleSubmenuMouseLeave = (menu) => {
    submenuTimers.current[menu] = setTimeout(() => {
      setSubmenuOpen((prev) => ({ ...prev, [menu]: false }));
    }, 300);
  };

  const toggleSubmenuMobile = (menu) => {
    setSubmenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md text-gray-800 shadow-md"
            : "bg-transparent text-white"
        } py-6 lg:py-8 border-b border-gray-200`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold flex items-center font-poppins">
            <span className="mr-2 text-maroon-600">Epic</span>
            <span className="text-maroon-900 animate-pulse">Foods</span>
          </Link>

          {/* Hamburger */}
          <button
            className={`lg:hidden text-2xl ${isScrolled ? "text-maroon-800" : "text-white"}`}
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Nav Links */}
          <ul
            className={`lg:flex lg:space-x-8 absolute lg:static top-20 left-0 w-full lg:w-auto ${
              isScrolled ? "bg-white" : "bg-black/60"
            } lg:bg-transparent p-4 lg:p-0 ${
              menuOpen ? "block shadow-lg" : "hidden lg:flex"
            } z-50`}
          >
            {navItems.map((item, idx) => {
              const key = item.name.toLowerCase().replace(/\s/g, "");

              if (item.submenu) {
                return (
                  <li
                    key={idx}
                    className="relative font-poppins"
                    onMouseEnter={() => handleSubmenuMouseEnter(key)}
                    onMouseLeave={() => handleSubmenuMouseLeave(key)}
                  >
                    <button
                      type="button"
                      onClick={() => toggleSubmenuMobile(key)}
                      className={`flex items-center w-full py-2 font-medium group ${
                        isScrolled ? "text-maroon-800" : "text-white"
                      }`}
                    >
                      {item.name}
                      <svg className="ml-1 h-3 w-3 fill-current mt-1" viewBox="0 0 20 20">
                        <path d="M5.516 7.548l4.484 4.545 4.484-4.545-1.032-1.052-3.452 3.496-3.452-3.496z" />
                      </svg>
                    </button>
                    <ul
                      className={`absolute left-0 mt-1 min-w-[12rem] rounded-md border border-gray-200 shadow-lg bg-white z-50 ${
                        submenuOpen[key] ? "block" : "hidden"
                      } lg:group-hover:block`}
                    >
                      {item.submenu.map((sub, subidx) => (
                        <li key={subidx}>
                          <Link
                            to={sub.path}
                            onClick={() => setMenuOpen(false)}
                            className="block px-4 py-3 text-maroon-800 hover:text-maroon-600"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 font-medium relative group font-poppins ${
                      currentPath === item.path
                        ? "text-maroon-700 font-semibold"
                        : isScrolled
                        ? "text-maroon-800 hover:text-maroon-600"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-maroon-700 transition-all duration-300 ease-in-out ${
                        currentPath === item.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              );
            })}

            {/* Mobile Login/Profile */}
            <li className="lg:hidden">
              {isLoggedIn ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="block w-full text-left py-2 font-medium flex items-center text-maroon-700"
                  >
                    <FaUser className="mr-2" /> {userName || "Profile"}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-100 flex items-center"
                      >
                        <FaSignOutAlt className="mr-2" /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="block w-full text-left py-2 font-medium text-maroon-800"
                >
                  <FaUser className="mr-2" /> Login
                </button>
              )}
            </li>
          </ul>

          {/* Desktop Login/Profile */}
          <div className="hidden lg:block relative" ref={dropdownRef}>
            {!isLoggedIn ? (
              <button
                onClick={handleLoginClick}
                className="flex items-center px-4 py-2 bg-gradient-to-br from-maroon-700 to-maroon-900 text-white rounded-full hover:from-maroon-800 hover:to-maroon-900 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <FaUser className="mr-2" /> Login
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center px-4 py-2 bg-maroon-700 text-white rounded-full hover:bg-maroon-800 transition duration-300 shadow-md"
                >
                  <FaUser className="mr-2" /> {userName || "Profile"}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-100 flex items-center"
                    >
                      <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} onSuccess={handleLoginSuccess} />}
    </>
  );
};

export default Navbar;
