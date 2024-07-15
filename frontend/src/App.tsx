import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OurServicesPage from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import { Toaster } from 'react-hot-toast';
import Location from "./pages/Location";

function App() {
  return (
    <div className="flex">
      <div><Toaster /></div>
      <Routes>
        <Route  path="/" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/location" element={<Location/>} />
        <Route path="/service" element={<OurServicesPage />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
