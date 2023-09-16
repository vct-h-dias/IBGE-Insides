import {BsBoxArrowInLeft} from 'react-icons/bs'


const BackBtn = () => {

    return (
        <>  
            <div className='fixed m-3 top-0 h-fit w-fit flex justify-center items-center gap-1'>
                <a href='/'>
                    <div className='group fixed flex items-center gap-1 z-10 w-11 h-11 p-1 pl-2 border-[1px] border-slate-400  text-slate-50 bg-slate-800 hover:bg-slate-700 hover:w-fit hover:px-3 duration-75'>
                        <BsBoxArrowInLeft size={30}/> <p className='hidden group-hover:flex'>Voltar para Home</p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default BackBtn
