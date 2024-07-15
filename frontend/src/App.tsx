import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OurServicesPage from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="flex">
      <div><Toaster /></div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/service" element={<OurServicesPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
