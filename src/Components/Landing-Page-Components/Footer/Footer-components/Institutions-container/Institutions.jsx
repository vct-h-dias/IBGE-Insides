import '../Institutions-container/Institutions.css'

import IFSP from "../../../../../assets/ifsp-footer-image.png"
import IBGE from "../../../../../assets/ibge-footer-image.png"

const Institutions = () => {
    return(
        <>
            <div className="footer-team-div">
                <div className="footer-title-div">
                    <h1>Instituições Envolvidas:</h1>
                </div>
                <div className="footer-images-div">
                    <div className="image-card-div">
                        <img src={IFSP} alt="IFSP-image" />
                    </div>
                    <div className="image-card-div">
                        <img src={IBGE} alt="IBGE-image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Institutions