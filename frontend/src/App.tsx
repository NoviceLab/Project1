import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OurServicesPage from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
// import Location from "./pages/Location";

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/location" element={<Location />} /> */}
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/service" element={<OurServicesPage />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
