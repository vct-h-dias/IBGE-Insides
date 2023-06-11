import Carrousel from '../Carrousel/Carrousel.jsx';
import ProfileCard from '../ProfileCard/ProfileCard.jsx'

import NamiczLogo from '../../../assets/namicz-Icon.svg';
import Matheus from '../../../assets/matheus-image-card.jpeg'
import VictorH from '../../../assets/victor-h-image-card.jpeg'
import VictorS from '../../../assets/victor-s-image-card.jpeg'
import IFSP from '../../../assets/ifsp-image.png'
import IBGE from '../../../assets/ibge-image.png'


const Body = () => {

  return (
    <div className='mt-20 bg-slate-200 scroll-mt-16'>
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

      <div className='h-48' id='funcoesContainer'></div>

      <div className='relative bg-slate-300 w-[72rem] mx-auto border-y-2 border-dotted border-slate-900 mb-10'>
        <div className='flex justify-center mt-14'>
          <h1 className='text-2xl font-semibold border-black border-b-2'>Algumas Funcionalidades</h1>
        </div>
        <Carrousel/>
      </div>
      
      <div className='h-48' id='informationsContainer'></div>

      <div>
        <div className='flex justify-center'>
            <h1 className='text-2xl font-semibold border-black border-b-2 mb-14'>Desenvolvedores</h1>
        </div>
        <div className='flex justify-evenly w-full'>
          <ProfileCard imgIcon={Matheus} profileName={"Matheus Camargo"} cFunction={"Estudante do IFSP - Campinas"} gLink={"https://github.com/MatheusCamargoGinebro"}/>
          <ProfileCard imgIcon={VictorH} profileName={"Victor Hugo"} cFunction={"Estudante do IFSP - Campinas"} gLink={"https://github.com/vct-h-dias"}/>
          <ProfileCard imgIcon={VictorS} profileName={"Victor Samuel"} cFunction={"Estudante do IFSP - Campinas"} gLink={"https://github.com/VitaoDibas"}/>
        </div>
      </div>

      <div className='h-48'></div>

      <div>
        <div className='flex justify-center'>
            <h1 className='text-2xl font-semibold border-black border-b-2 mb-14'>Instituições envolvidas</h1>
        </div>
        <div className='flex justify-evenly items-center'>
          <a href="https://portal.cmp.ifsp.edu.br/" target="_blank">
            <div className='flex items-center w-96 h-36'>
                <img src={IFSP} alt="IFSP-image" className='m-auto'/>
            </div>
          </a>
          <a href="https://servicodados.ibge.gov.br/api/docs" target="_blank">
            <div className='flex w-96 h-36'>
                <img src={IBGE} alt="IBGE-image" className='m-auto'/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
