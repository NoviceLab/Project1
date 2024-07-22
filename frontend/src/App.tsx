import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OurServicesPage from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import Userdata from "./pages/Admin/Userdata";
import CreateUser from "./pages/Admin/Createuser";
import EditUser from "./pages/Admin/EditUser";
import UserManagement from "./pages/Admin/Alluser";
import Partner from "./pages/Partner";

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/service" element={<OurServicesPage />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Register" element={<Register />}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/userinfo/:user" element={<Userdata/>}/>
        <Route path="/admin/alluserinfo" element={<UserManagement/>} />
        <Route path="/admin/createacc" element={<CreateUser/>}/>
        <Route path="/admin/edituser/:id" element={<EditUser />}/>
        <Route path="/partner-with-us" element={<Partner/>}/>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
