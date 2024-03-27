
import React, { useState } from 'react';
import { authService } from '../../services/auth-services';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const menu = await authService.login(email, password);
      console.log('Menu:', menu);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl mb-4">Payroll Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleLogin}>
          <input className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
          id="email" 
          name="email" 
          type="email" 
          placeholder="Email address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} required />
          <input className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
          id="password" 
          name="password" 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} required />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};




