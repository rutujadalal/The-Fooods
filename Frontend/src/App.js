

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Teams from "./pages/Teams";
// import Faqs from "./pages/Faqs";
// import OurConnections from "./pages/OurConnections";
// import PackagesAndPlan from "./pages/PackagesAndPlan";
// import Corporate from "./pages/Corporate";
// import Retail from "./pages/Retail";
// import Footer from "./components/Footer";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";  // Correct import for Register component
// import { AuthProvider } from "./components/Auth/AuthContext";


// const AppContent = () => {
//   return (
//     <>
//       <Navbar />
//       {/* ToastContainer must be outside Routes */}
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/OurConnections" element={<OurConnections />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/Teams" element={<Teams />} />
//          <Route path="/PackagesAndPlan" element={<PackagesAndPlan />} />
//           <Route path="/Corporate" element={<Corporate />} />
//            <Route path="/Retail" element={<Retail />} />
//         <Route path="/Faqs" element={<Faqs />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} /> {/* Register route */}
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <AppContent />
//     </AuthProvider>
//   );
// };

// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Teams from "./pages/Teams";
import Faqs from "./pages/Faqs";
import OurConnections from "./pages/OurConnections";
import Packages from "./pages/PackagesAndPlan"; 
import Corporate from "./pages/Corporate";
import Retail from "./pages/Retail";

// Auth
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { AuthProvider } from "./components/Auth/AuthContext";

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/OurConnections" element={<OurConnections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Teams" element={<Teams />} />
         <Route path="/services/packages" element={<Packages />} /> 
           <Route path="/services/corporate" element={<Corporate />} />
      <Route path="/services/retail" element={<Retail />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
