import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside className='w-64 bg-gray-800 p-4 hidden lg:block' style={{ width: '200px', border: '1px solid black', borderRadius: '5px' }}>
      <div className='flex justify-center items-center flex-col items-center justify-center pt-8'>
        <h1 className='flex text-xl font-bold mt-4 pb-12'>Usuario</h1>
      </div>
      <ul>
        <li className='mb-2'>
          <a href='#' className='text-gray-300 hover:text-blue-500'>
            REC. HUMANOS
          </a>
          <ul className='pl-4 list-disc'>
            <li className='mb-1 pt-4'>
              <Link to='/ListEmploye' className="text-white  hover:text-gray-600">
                Empleados
              </Link>
            </li>
            <li className='mb-1 pt-4'>
              <a href='#' className='text-gray-300 hover:text-blue-500'>
                Puestos
              </a>
            </li>
            <li className='mb-1 pt-4'>
              <Link to='/Departamentos' className="text-white  hover:text-gray-600">
                Departamentos
              </Link>
            </li>
          </ul>
        </li>
        <li className='mb-2 pt-8'>
          <a href='#' className='text-gray-300 hover:text-blue-500'>
            GES. NOMINA
          </a>
          <ul className='pl-4 list-disc'>
            <li className='mb-1 pt-4'>
              <Link to='/Nominas' className="text-white  hover:text-gray-600">
                Nominas
              </Link>
            </li>
            <li className='mb-1 pt-4'>
              <a href='#' className='text-gray-300 hover:text-blue-500'>
                Conceptos
              </a>
            </li>
            <li className='mb-1 pt-4'>
              <a href='#' className='text-gray-300 hover:text-blue-500'>
                Periocidad
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

