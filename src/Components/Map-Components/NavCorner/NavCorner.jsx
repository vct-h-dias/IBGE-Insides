import {BsBoxArrowInLeft} from 'react-icons/bs'


const NavCorner = () => {

    return (
        <>
            <div className='fixed z-10 w-52 h-5 bg-slate-800'>
                <button>
                    <BsBoxArrowInLeft className='text-slate-50' size={35}/>
                </button>
            </div>  
        </>
    )
}

export default NavCorner
