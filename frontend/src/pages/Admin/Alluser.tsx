import { useEffect,useState } from "react";
import axios from "axios";


interface user{
    name: string,
    email: string,
    role: string,
    coins: number,
    kyc: string
}

const UserManagement = () => {

  const [users,setUsers] = useState([]);

  async function userinfo(){
    const response = await axios.get("http://localhost:3000/api/v1/users",{headers:{
        Authorization: localStorage.getItem("token")
    }});
    setUsers(response.data.msg);
  }

  useEffect(()=>{
    userinfo()
  },[])

  return (
    <div className='w-screen h-screen flex justify-center bg-gray-100'>
        <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">User Management</h2>
                <button className="bg-black text-white px-4 py-2 rounded-lg">Create User</button>
                </div>
                <table className="w-full table-auto">
                <thead>
                    <tr>
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Role</th>
                    <th className="text-left p-2">Coins</th>
                    <th className="text-left p-2">kyc</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user:user, index) => (
                    <tr key={index} className="border-t">
                        <td className="py-2 px-4">{user.name}</td>
                        <td className="py-2 px-4">{user.email}</td>
                        <td className="py-2 px-4">{user.role}</td>
                        <td className="py-2 px-4">{user.coins}</td>
                        <td className="py-2 px-4">{user.kyc}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default UserManagement;
