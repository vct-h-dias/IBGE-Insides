import './header-presentation.css'

const HeaderPresentation = () => {
    return(
        <>
            <div className="content-background-div">
                <div className="title-div">
                    <h1>N.A.M.I.C.Z</h1>
                </div>

                <div className="args-div">
                    <ul>
                        <li>O IBGE possui uma base de dados extensa e rica em informações importantes sobre a população brasileira.</li>
                        <li>Porém, somente é possível obtê-los por meio de APIs, que exigem habilidades técnicas específicas para sua utilização.</li>
                        <li>Por conta disso, o NAMICZ foi criado!</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeaderPresentation