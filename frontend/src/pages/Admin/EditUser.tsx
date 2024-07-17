import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const EditUser: React.FC = () => {
    const {id} = useParams()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('user');
    const [coins, setCoins] = useState(0);

    async function fetchinfo() {
        const response = await axios.get(`http://localhost:3000/api/v1/users/${id}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        const msg = response.data.msg;
        setCoins(msg.coins);
        setEmail(msg.email);
        setRole(msg.role)
        setPhone(msg.phone);
        setName(msg.name);
    }

    useEffect(()=>{
      fetchinfo();  
    },[]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            name: name,
            coins: coins,
            email: email,
            role: role,
            phone: phone,
        }
        const response = await axios.put(`http://localhost:3000/api/v1/users/${id}`,data,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        if(response.data.msg == "User updated"){
            toast.success("User updated");
        }else{
            toast.error("Some error occoured");
        }
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 font-semibold text-gray-700">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="border-2 border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border-2 border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="mb-2 font-semibold text-gray-700">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border-2 border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="role" className="mb-2 font-semibold text-gray-700">Role:</label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="border-2 border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="coins" className="mb-2 font-semibold text-gray-700">Coins:</label>
                        <input
                            type="number"
                            id="coins"
                            value={coins}
                            onChange={(e) => setCoins(Number(e.target.value))}
                            className="border-2 border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 mt-6 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Save Changes</button>
                </form>
        </div>
    );
}

export default EditUser;