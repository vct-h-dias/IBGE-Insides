const Footer = () => {
    return(
        <div className='w-full h-fit pt-6 bg-slate-800 block' id="footerContainer">
            <div className='flex items-center justify-around '>
                <div className='h-full w-96 p-6 border-l-[1px] border-dashed'>
                    <ul className='gap-2 grid'>
                        <li><a href="https://servicodados.ibge.gov.br/api/docs" target="_blank" className='text-slate-300 hover:text-slate-50 duration-100'>| API de serviço de dados do IBGE</a></li>
                        <li><a href="https://github.com/vct-h-dias/IBGE-Insides" target="_blank" className='text-slate-300 hover:text-slate-50 duration-100'>| Repositório do projeto</a></li>
                        <li><a href="#" target="_blank" className='text-slate-300 hover:text-slate-50 duration-100'>| Documentação do projeto</a></li>
                    </ul>
                </div>
                <div className='h-full w-96 p-6 border-r-[1px] border-dashed text-end'>
                    <ul className='gap-2 grid'>
                        <li><a href="https://www.ibge.gov.br/" target="_blank" className='text-slate-300 hover:text-slate-50 duration-100'>Instituto Brasileiro de Geografia e Estatística |</a></li>
                        <li><a href="https://portal.cmp.ifsp.edu.br/" target="_blank" className='text-slate-300 hover:text-slate-50 duration-100'>Instituto Federal - IFSP Câmpus Campinas |</a></li>
                        <li><a href="#" target="_blank" className='text-slate-300 hover:text-slate-50 duration-100'>Entrar em contato |</a></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-baseline text-slate-300'>
                <h1>©2023 The IFers</h1>
            </div>
        </div>
    )
}

export default Footer
