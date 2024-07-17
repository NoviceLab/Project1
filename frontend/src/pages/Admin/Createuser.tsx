import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const CreateUser: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      }
    }catch(e){
      toast.error("Some error occoured");
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 space-y-4 bg-white p-10 rounded shadow-lg">
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
          <label htmlFor="password" className="mb-2 font-semibold text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;