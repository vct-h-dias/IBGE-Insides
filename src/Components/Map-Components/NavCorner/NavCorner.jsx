import {BsBoxArrowInLeft} from 'react-icons/bs'


const NavCorner = () => {

    return (
        <>  
            <div className='fixed m-2 top-0 h-fit w-fit flex justify-center items-center gap-1'>
                <a href='/'>
                    <div className='fixed flex items-center gap-1 z-10 w-fit pl-3 h-fit p-2 bg-slate-800 text-slate-50 hover:bg-slate-700 duration-75'>
                        <BsBoxArrowInLeft className='' size={35}/> Voltar para Home
                    </div>
                </a>
            </div>
        </>
    )
}

export default NavCorner
