import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      email: username,
      password: password
    }
    try{
      const response = await axios.post("http://localhost:3000/api/v1/auth/login",data);
      const msg = response.data.msg;
      if(msg == "Invalid Inputs"){
        toast.error("Password must be min. 8 letters");
        return;
      }
      if(msg == "User not found with this email"){
        toast.error("No User with this email Found");
        return;
      }
      if(msg == "Invalid password"){
        toast.error("Wrong password!");
        return;
      }
      if(msg == "user signed in"){
        toast.success("User logged in");
        const token = response.data.jwt;
        localStorage.setItem("token",token);
        const user = response.data.user;
        localStorage.setItem("user",user)
        navigate("/dashboard");
      }
    }catch(e){
      toast.error("Some Error Occoured");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SignIn</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password *
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-500 hover:underline">
            Lost your password?
          </a>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
          >
            SignIn
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;