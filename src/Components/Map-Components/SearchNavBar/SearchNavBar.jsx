import { BsXLg } from 'react-icons/bs'
import {BsFilterLeft  } from 'react-icons/bs'
import { BsFilterRight } from 'react-icons/bs'
import { BsFilter } from 'react-icons/bs'

const SearchNavBar = () => {
    const closeFunc = () => {
        document.getElementById('searchNavBar').classList.add('hidden');
        document.getElementById('openBtn').classList.remove('hidden');
    }

    const openFunc = () => {
        document.getElementById('searchNavBar').classList.remove('hidden');
        document.getElementById('openBtn').classList.add('hidden');
    }

    return (
        <>  
            <div id='searchNavBar' className='hidden fixed right-0 h-full w-96 bg-slate-50 duration-75'>
                <div className='flex bg-slate-800 justify-center'>
                    <div className='absolute flex items-center pl-4 h-[4.5rem] w-[4.5rem] left-0'>
                        <button onClick={closeFunc}>
                            <BsXLg className='text-slate-300 hover:text-slate-50 duration-75' size={25}/>
                        </button>
                    </div>
                    <h1 className='text-slate-50 text-2xl p-5 text-center px-10'>Filtrar</h1>
                </div>
            </div>


            <button className='group fixed flex items-center m-3 right-0 gap-1 z-10 w-11 h-11 p-1 pr-2 border-[1px] border-slate-400 text-slate-50 bg-slate-800 hover:bg-slate-700 hover:w-fit hover:px-3 duration-75' onClick={openFunc}>
                <BsFilter className='text-slate-50' size={35}/> <p className='hidden group-hover:flex'>Exibir filtragem</p> 
            </button>
        </>
    )
}

export default SearchNavBar
