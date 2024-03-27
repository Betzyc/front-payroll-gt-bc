
import { Sidebar } from '../../components/Sidebar'

export const Dashboard = () => {
  return (
    <div className='flex min-h-screen p-4' id='departamentos'>
      {/* Incluye la barra lateral */}
      <Sidebar />

      <main className='container mx-auto flex-grow flex p-4'>
        <section className='flex-grow px-4'>
          <div className='bg-gray-300 h-8 p-6 flex items-center relative' style={{ borderRadius: '5px' }}>
            <span className='text-black mr-2 font-bold'>&gt;</span>
            Inicio
          </div>

          <div className='pt-16 text-[45px]  justify-center items-center'>
            <div className='flex justify-center items-center'>
              <h1>Payrolls</h1>
            </div>
            <div className='flex justify-center items-center'>
              <p>Bienvenido eres un Administrador</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
