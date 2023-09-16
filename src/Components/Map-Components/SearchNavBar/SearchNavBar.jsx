import { BsXLg } from 'react-icons/bs'
import { Collapse, Zoom } from '@mui/material';

const SearchNavBar = ({openNavBar, setOpenNavBar}) => {

    return (
        <div className='flex justify-end h-full'>  
            <Collapse in={openNavBar} mountOnEnter={false} unmountOnExit={true} orientation={'horizontal'}>    
                <div className='h-screen w-96  bg-slate-50 duration-75 z-50'>
                    <div className='flex bg-slate-800 justify-between'>
                        <div className='flex items-center pl-4 h-[4.5rem] w-[4.5rem] left-0'>
                            <button onClick={() => setOpenNavBar(false)}>
                                <BsXLg className='text-slate-300 hover:text-slate-50 duration-75' size={25}/>
                            </button>
                        </div>
                        <h1 className='text-slate-50 text-2xl p-5 text-center px-10'>Filtrar</h1>
                        <div className='w-[4.5rem]'/>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default SearchNavBar
