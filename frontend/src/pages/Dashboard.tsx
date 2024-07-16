import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { MdHistory } from "react-icons/md"
import Avatar from "../components/Dashboard/Avatar"

function Dashboard() {
    const id = localStorage.getItem("user") || "";
    const [coins,setCoins] = useState("0");
    const navigate = useNavigate()
    function logout(){
      localStorage.clear()
      navigate("/login")
    }
    async function userinfo(){
        const response = await axios.get(`http://localhost:3000/api/v1/users/${id}`);
        console.log(response.data)
         setCoins(response.data.msg.coins);
    }
    useEffect(() => {
      userinfo()
    }, [])
    
  return (
    <div className="h-screen w-screen font-sans">
        <div className="w-full flex justify-between items-center p-2 border-b-2 border-yellow-400">
            <div>603 workspace</div>
            <div className="flex items-center">
            <div className="mx-4">Contact Us</div>
                <div className="flex mx-3 items-center"><div className="mx-1 bg-slate-200 rounded-2xl px-1">Coins:{coins}</div><div className="text-2xl cursor-pointer">+</div></div>
                <div className="mx-4 text-2xl cursor-pointer" onClick={()=>{navigate("/transactions")}}><MdHistory/></div>
                <div className="mx-4 cursor-pointer" onClick={logout}>logout</div>
                <div className="mx-4"><Avatar name={id}/></div>
            </div>
        </div>
        <div className="w-full bg-green-400">
          <h1>{id}</h1>
        </div>
    </div>
  )
}

export default Dashboard