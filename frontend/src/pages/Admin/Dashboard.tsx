import { useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";

interface users{
  name: string,
  email: string,
  createdAt: string
}

function AdminDashboard() {
  const navigate = useNavigate()
  const [user,setUser] = useState("")
  const [pendingkyc,setPendingkyc] = useState(0)
  const [totaluser,setTotaluser] = useState(0)
  const [noofspace,setNoofspace] = useState(0)
  const [verifieduser,setVerifiedusers] = useState(0)
  const [users,setUsers] = useState([])
  function logout(){
    localStorage.clear()
    navigate("/admin/login");
  }
  async function load(){
    const responsenoofusers = await axios.get("http://localhost:3000/api/v1/users/details/dashboard",{
      headers:{
        Authorization: localStorage.getItem("token")
      }
    });
    const response = responsenoofusers.data;
    if(response.msg == "details"){
      setTotaluser(response.totalusers);
      setVerifiedusers(response.verifiedusers);
      setPendingkyc(response.pendingkyc);
      setNoofspace(response.totalworkspaces);
      setUsers(response.users)
    }
    console.log(responsenoofusers)
  }
  useEffect(()=>{
    load()
  },[])
  

  const bookings = [
    { workspace: 'Workspace A', bookedBy: 'John Doe', bookingDate: '2023-06-20' },
    { workspace: 'Workspace B', bookedBy: 'Jane Smith', bookingDate: '2023-06-18' },
    { workspace: 'Workspace C', bookedBy: 'Bob Johnson', bookingDate: '2023-06-15' },
    { workspace: 'Workspace D', bookedBy: 'Alice Williams', bookingDate: '2023-06-12' },
    { workspace: 'Workspace E', bookedBy: 'Tom Davis', bookingDate: '2023-06-10' },
  ];
  return (
    <div className="h-screen w-screen">
      <div className="w-full flex justify-between p-2 text-yellow-400 font-semibold text-lg items-center border-b border-gray-400 shadow-2xl">
        <div>603 workingspace</div>
        <div className="mr-10">
          <span className="mr-6">profile</span>
          <span className="bg-yellow-400 text-white rounded-xl px-2 py-1 cursor-pointer" onClick={logout}>logout</span>
        </div>
      </div>
      <div className="w-full flex justify-around p-2 font-medium text-slate-500">
      <div className="cursor-pointer" onClick={()=>{navigate("/admin/createacc")}}><h1>Create Users</h1></div>
        <div>Edit User</div>
        <div className="flex items-center bg-white rounded-full px-2"><input type="text" placeholder="Search User" value={user} className="outline-none px-1 font-normal" onChange={(e)=>{setUser(e.target.value)}} /><div className="cursor-pointer" onClick={()=>{navigate(`/admin/userinfo/${user}`)}}><CiSearch/></div></div>
        <div>kyc Request</div>
        <div className="cursor-pointer" onClick={()=>{navigate("/admin/alluserinfo")}}><h1>All Users</h1></div>
      </div>
      <div className="w-full">
      <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="p-4 bg-white shadow rounded-lg flex flex-col justify-center">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl font-bold text-slate-400">{totaluser}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex flex-col justify-center">
          <h2 className="text-xl font-semibold">Total Verified Users</h2>
          <p className="text-3xl font-bold text-slate-400">{verifieduser}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex flex-col justify-center">
          <h2 className="text-xl font-semibold">Total Workspaces</h2>
          <p className="text-3xl font-bold text-slate-400">{noofspace}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex flex-col justify-center">
          <h2 className="text-xl font-semibold">Pending Kyc request</h2>
          <p className="text-3xl font-bold text-slate-400">{pendingkyc}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Recent User Signups</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Email</th>
                <th className="text-left">Signup Date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user:users, index) => (
                <tr key={index}>
                  <td className="py-2">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt.slice(0,10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Workspace Bookings</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Workspace</th>
                <th className="text-left">Booked By</th>
                <th className="text-left">Booking Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td className="py-2">{booking.workspace}</td>
                  <td>{booking.bookedBy}</td>
                  <td>{booking.bookingDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default AdminDashboard;

