import React, { useState } from 'react';

const EditUser: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('user');
    const [kyc, setKyc] = useState('false');
    const [coins, setCoins] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted:', { name, email, password, phone, role, kyc, coins });
        // Here you can perform additional actions like API calls to create the user
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md">
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
                        <label htmlFor="kyc" className="mb-2 font-semibold text-gray-700">KYC:</label>
                        <select
                            id="kyc"
                            value={kyc}
                            onChange={(e) => setKyc(e.target.value)}
                            className="border-2 border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="false">False</option>
                            <option value="true">True</option>
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
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Create User</button>
                </form>
            </div>
        </div>
    );
}

export default EditUser;