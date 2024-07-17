import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

function Userdata() {
    const {user} = useParams();
    const [coins,setCoins] = useState("");
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [phone,setPhone] = useState("");
    const [kyc,setKyc] = useState("");
    const [created,setCreated] = useState("");
    async function userinfo(){
        const response = await axios.get(`http://localhost:3000/api/v1/users/${user}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        const msg = response.data.msg;
        setCoins(msg.coins);
        setEmail(msg.email);
        setKyc(msg.kyc);
        setPhone(msg.phone);
        setUsername(msg.name);
        const createdat = msg.createdAt;
        setCreated(createdat.slice(0,10));
    }
    useEffect(()=>{
        userinfo();
    },[])
  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                <div className="mb-2 flex ">
                    <span className="font-bold mr-2">Username: </span>
                    <span className="text-gray-700">{username}</span>
                </div>
                <div className="mb-2 flex ">
                    <span className="font-bold mr-2">Email: </span>
                    <span className="text-gray-700">{email}</span>
                </div>
                <div className="mb-2 flex ">
                    <span className="font-bold mr-2">Phone: </span>
                    <span className="text-gray-700">{phone}</span>
                </div>
                <div className="mb-2 flex ">
                    <span className="font-bold mr-2">Coins:</span>
                    <span className="text-gray-700">{coins}</span>
                </div>
                <div className="mb-2 flex ">
                    <span className="font-bold mr-2">Kyc: </span>
                    <span className="text-gray-700">{kyc}</span>
                </div>
                <div className="flex ">
                    <span className="font-bold mr-2">Created At:</span>
                    <span className="text-gray-700">{created}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Userdata