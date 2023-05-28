import '../Footer/Footer.css'

import FCard from './Footer-components/FCard/FCard.jsx'
import Institutions from './Footer-components/Institutions-container/Institutions.jsx'

const Footer = () => {
    return(
        <>
            <div className="footer-div">
                <div className="footer-team-div">
                    <Institutions/>
                </div>
                <div className='footer-teamates-div'>
                    <div className="footer-title-div">
                        <h1>Desenvolvido por:</h1>
                    </div>
                    <div className="footer-card-display-div">
                        <FCard imgIcon="src/assets/matheus-image-card.jpeg" profileName="Matheus Camargo" cFunction="Estudante do IFSP - Campinas" gLink="https://github.com/MatheusCamargoGinebro"/>
                        <FCard imgIcon="src/assets/victor-h-image-card.jpeg" profileName="Victor Hugo" cFunction="Estudante do IFSP - Campinas" gLink="https://github.com/vct-h-dias"/>
                        <FCard imgIcon="src/assets/victor-s-image-card.jpeg" profileName="Victor Samuel" cFunction="Estudante do IFSP - Campinas" gLink="https://github.com/VitaoDibas"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
