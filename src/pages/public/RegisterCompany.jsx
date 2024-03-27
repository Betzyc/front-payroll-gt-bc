import ImgUploader from '../../components/uploadFiles/ImgUploader'
import { companyService } from '../../services/company-service'
import UploadFirebaseService from '../../services/firebase'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'


export const RegisterCompany = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: '',
    phoneNumber: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    description: '',
    logo: null,
  })


  const handleChange = e => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    })
  }


  const handleSubmit = async e => {
    e.preventDefault()
    try {

    if (formData.password !== formData.confirmPassword) {
      throw new Error('Las contraseñas no coinciden');
    }

    const phoneRegex = /^\d+$/
        if (!phoneRegex.test(formData.phoneNumber)) {
      throw new Error('El número de teléfono debe contener solo dígitos')
    }

      // Cargar la imagen en Firebase Storage y obtener la URL
      const firebaseImageUrl = await uploadImageToFirebaseStorage(formData.logo)


      // Llamar al servicio CompanyService para guardar la URL de la imagen en la base de datos
      const response = await companyService.createCompany(
        formData.companyName,
        formData.phoneNumber,
        formData.description,
        formData.address,
        firebaseImageUrl,
        formData.email,
        formData.password,
      )

      console.log('Ingresar compañía:', response)
      alert('¡Registro exitoso!')
      //  al usuario a una página de éxito o mostrar un mensaje de éxito
      navigate('/')

    } catch (error) {
        alert('Error no se registro la empresa: ' + error.message)
        console.error('Error no se registro la empresa:', error)
    }
  }


  // Función para cargar la imagen en Firebase Storage y obtener la URL
  const uploadImageToFirebaseStorage = async imageFile => {
    try {
      const uploadFirebaseService = UploadFirebaseService.getInstance()
      const imageUrl = await uploadFirebaseService.uploadFile(
        imageFile,
        '',
      )
      return imageUrl
    } catch (error) {
      console.error('Error al cargar la imagen en Firebase Storage:', error)
      throw error
    }
  }


  return (

    
    
        
    <div className='bg-gray-800 h-screen flex justify-center items-center'>
      <h1 className='text-white font-bold text-4xl text-center mb-6'>REGISTRO DE EMPRESA</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        
          <label className='text-white' htmlFor='companyName'>
            Nombre de la empresa*
          </label>
          <input
            type='text'
            id='companyName'
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
          />
        
          <label className='text-white' htmlFor='phoneNumber'>Teléfono *</label>
          <input
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            maxLength={8}
            className='w-full border border-gray-300 rounded-md py-2 px-4'
          />
        
          <label className='text-white' htmlFor='address'>Dirección *</label>
          <input
            type='text'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
          />

          <label className='text-white' htmlFor='email'>Correo electrónico (usuario) *</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
          />

          <label className='text-white' htmlFor='password'>Password *</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
          />

          <label className='text-white' htmlFor='confirmPassword'>Confirmación *</label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
          />

          <label className='text-white' htmlFor='description'>Descripción *</label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
          />

{}
       
          <label className='text-white' htmlFor='logo'>Logo de la empresa</label>
          <ImgUploader onChange={handleChange} />
        
      </div>

      <form onSubmit={handleSubmit}>
        <button
          type='submit'
          className='bg-blue-500  text-white font-bold py-2 px-4 rounded mt-6'
        >
          Enviar
        </button>
      </form>
    </div>
  )
}