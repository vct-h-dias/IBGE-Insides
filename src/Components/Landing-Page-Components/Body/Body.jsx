import Carrousel from '../Carrousel/Carrousel.jsx';

import NamiczLogo from '../../../assets/namicz-Icon.svg';

const Body = () => {

  return (
    <div className='mt-20 bg-slate-200' id='funcoesContainer'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-semibold my-16'>Plataforma de Visualização de Dados Demográficos e Geográficos</h1>
      </div>

      <div className='mx-6 py-16 flex justify-evenly border-y-2 border-slate-700 border-dotted bg-slate-300'>
        <div className='w-3/5 gap-10 text-lg'>
          <h1 className='mb-2 text-2xl font-medium'><span className='border-b-4 border-slate-800'>O Que é isso?</span></h1>
          <p className='font-light'>
            O NAMICZ é uma plataforma inovadora que foi desenvolvida com o propósito de facilitar o acesso e a
            visualização de dados relacionados a nomes de pessoas por lugares. Com base nas extensas e
            valiosas informações demográficas e geográficas armazenadas pelo IBGE, o NAMICZ permite aos
            usuários explorar e analisar esses dados de forma intuitiva e acessível.
          </p>
          <a href="/Map" className='inline-flex mt-10 px-3 py-2 rounded-sm border-slate-500 bg-clip-padding text-slate-50 bg-slate-800 duration-100 hover:bg-slate-700'>Clique aqui para acessar o mapa!</a>
        </div>
        <img src={NamiczLogo} alt="namiczLogo" className='h-64' />
      </div>

      <div className='flex justify-center'>
        <h1 className='text-2xl font-semibold mt-48 mb-10'>Algumas Funcionalidades</h1>
      </div>

      <Carrousel/>
        
      <div className=' h-[1024px] flex items-center justify-center'> space </div>
    </div>
  );
};

export default Body;
