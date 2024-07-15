import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OurServicesPage from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
<<<<<<< HEAD
import { Toaster } from "react-hot-toast";
=======
import { Toaster } from 'react-hot-toast';

>>>>>>> a954dafcaa0e43c2b132e1be785eca1f2110b3cc
function App() {
  return (
    <div className="flex">
      <div><Toaster /></div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/service" element={<OurServicesPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
