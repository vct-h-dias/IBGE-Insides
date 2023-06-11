import namiczLogo from '../../../assets/namicz-Icon.svg'

const Header = () => {
    return (
        <header className='fixed top-0 h-20 w-full px-8 flex justify-between bg-slate-300 border-b-2 border-slate-500/10 z-50'>
            <div className="my-auto font-semibold text-4xl">
                <a href="#"className="flex content"><img src={namiczLogo}className="w-10"/><h1 className="my-auto ml-0.5">AMICZ</h1></a>
            </div>
            <div className=" h-full w-fit flex">
                <ul className="inline-flex gap-5">
                    <li className="my-auto font-medium text-zinc-700 duration-100 hover:text-black"><a href="#">Mapa</a></li>
                    <li className="my-auto font-medium text-zinc-700 duration-100 hover:text-black"><a href="#funcoesContainer">Funções</a></li>
                    <li className="my-auto font-medium text-zinc-700 duration-100 hover:text-black"><a href="#informationsContainer">Informações</a></li>
                    <li className="my-auto font-medium text-zinc-700 duration-100 hover:text-black"><a href="#footerContainer">Rodapé</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
