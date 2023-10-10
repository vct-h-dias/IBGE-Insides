import React from 'react'

// import component:
import Drawer from 'react-modern-drawer'

//import styles:
import 'react-modern-drawer/dist/index.css'

// import icons:
import AddIcon from '@mui/icons-material/Add';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FirstPageIcon from '@mui/icons-material/FirstPage';

function Drawerbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer} className='fixed z-50 mt-5 flex items-center group gap-1 text-white border-[1px] border-l-0 border-slate-50 p-[5px] bg-slate-800 hover:bg-slate-600 hover:pr-2 duration-75'>
                <AddIcon fontSize='medium' className='group-hover:animate-spin group-hover:hidden duration-75'/>
                <div className='group-hover:flex hidden'>
                    <NavigateNextIcon fontSize='medium'/>
                </div>
                <p className='group-hover:block hidden'>Mais Opções</p>
            </button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left' lockBackgroundScroll={true} size={350}>
                <div className='bg-slate-800 p-5 flex justify-center text-xl text-white'>
                    <h1>Filtrar dados</h1>
                </div>

                <div>
                    // Opções de filtro
                </div>

                <div className='absolute w-full bottom-0 border-t-[1px] p-3 hover:bg-slate-100 text-slate-600 duration-75'>
                    <a href="./" className='flex items-center justify-center'><FirstPageIcon fontSize='large'/>Página Inicial</a>
                </div>
            </Drawer>
        </>
    )
}

export default Drawerbar;