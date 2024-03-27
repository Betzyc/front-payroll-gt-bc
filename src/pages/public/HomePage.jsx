import { Navigation } from '../../components/Navigation'
import { Link } from "react-router-dom"
import React from "react";

export const Home = () => (
  <>
  
     <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <img src="/logo.png" alt="Company logo" className="w-10 h-10" />
          <h1 className="ml-2 text-xl font-bold">Payroll Platform</h1>
        </div>
        <div className="flex flex-row">
          <a href="/features" className="mr-4">Funcionalidades</a>
          <a href="/solutions" className="mr-4">Soluciones</a>
          <a href="/reviews" className="mr-4">Opiniones</a>
          <a href="/login" className="btn btn-primary">Login</a>
        </div>
      </div>
    </header>
    
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="max-w-9xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-white text-7xl font-semibold mb-6">Payroll platform</h1>
          <p className="text-white text-lg mb-8">
            T Consultin S.A.
          </p>
          <p className="text-white text-lg mb-8">
            Lleva el contro de tu nomina facil, rapido y seguro.
          </p>
        
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
          <Link to='/register-company' className="text-white  hover:text-gray-600">Prueba Gratis</Link>
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-md">
            Conocenos
          </button>
        </div>
        <br></br>
        <p className="text-white text-4xl font-semibold mb-6">
            Confia en nosotros
          </p>
          </div>
      </div>
    </div>
   
  </>
)
