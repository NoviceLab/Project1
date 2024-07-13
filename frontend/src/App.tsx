import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OurServicesPage from "./pages/Service";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/service" element={<OurServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
