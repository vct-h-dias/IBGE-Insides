import '../Footer/Footer.css'

import FCard from './Footer-components/FCard/FCard.jsx'
import Institutions from './Footer-components/Institutions-container/Institutions.jsx'

import Camargo from "../../../assets/matheus-image-card.jpeg"
import Vitao from "../../../assets/victor-s-image-card.jpeg"
import Vic from "../../../assets/victor-h-image-card.jpeg"


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
                        <FCard imgIcon={Camargo} profileName="Matheus Camargo" cFunction="Estudante do IFSP - Campinas" gLink="https://github.com/MatheusCamargoGinebro"/>
                        <FCard imgIcon={Vic} profileName="Victor Hugo" cFunction="Estudante do IFSP - Campinas" gLink="https://github.com/vct-h-dias"/>
                        <FCard imgIcon={Vitao} profileName="Victor Samuel" cFunction="Estudante do IFSP - Campinas" gLink="https://github.com/VitaoDibas"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
