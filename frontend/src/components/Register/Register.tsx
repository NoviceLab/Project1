import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password != confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }else{
      const data = {
        name: name,
        email: email,
        password: password,
        phone: phone,
      }
      try{
        const response = await axios.post("http://localhost:3000/api/v1/users/",data);
        if(response.data.msg == "Invalid Inputs"){
          toast.error("Invalid Inputs!")
          return;
        }
        if(response.data.msg == "Username exsists"){
          toast.error("This username already exsists")
          return;
        }
        if(response.data.msg == "Email Exsists"){
          toast.error("account with this email already exsists")
        }
        if(response.data.msg == "user created"){
          toast.success("User created")
          const token = response.data.jwt
          localStorage.setItem("token",token);
          const user = response.data.user
          localStorage.setItem("user",user)
          navigate("/dashboard");
        }
      }catch(e){
        toast.error("Some error occoured");
      }

    }
    
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Username *
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Phone No. *
          </label>
          <input
            type="text"
            id="Phone No."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your Phone no."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
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
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-bold mb-2"
          >
            Confirm Password *
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
