import './header-container.css'

function headerContainer() {
  return (
    <>
        <div className="header-container">
            <div className="header-div-content">
                <h1>Visualização Inteligente de nomes no Brasil</h1>
            </div>
            <div className="header-display-div">
                <ul>
                    <li className="display-option"><a href="#">Início</a></li>
                    <li className="display-option"><a href="#funcionalidades">Funcionaidades</a></li>
                    <li className="display-option"><a href="Map">Visualizar</a></li>
                    <li className="display-option"><a href="#">Rodapé</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default headerContainer