import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import { useForm } from 'react-hook-form';
import { authService } from '../../services/auth-services';
import { Button } from '@/components/ui/button';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const menu = await authService.login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      sessionStorage.clear();
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl mb-4">Payroll Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" id="email" name="email" type="email" placeholder="Email address"  {...register("email", { required: true })} required />
          {errors.email && <span style={{ color: 'red' }}>Email es requerido</span>}

          <input className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" id="password" name="password" type="password" placeholder="Password" {...register("password", { required: true })}  required />
          {errors.password && <span style={{ color: 'red' }}>Contraseña es requerida</span>}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" type="submit">Login</button>

       </form>
      </div>
    </div>

  );
};




