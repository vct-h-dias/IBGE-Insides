import '../Institutions-container/Institutions.css'


const Institutions = () => {
    return(
        <>
            <div className="footer-team-div">
                <div className="footer-title-div">
                    <h1>Instituições Envolvidas:</h1>
                </div>
                <div className="footer-images-div">
                    <div className="image-card-div">
                        <img src="src/assets/ifsp-footer-image.png" alt="IFSP-image" />
                    </div>
                    <div className="image-card-div">
                        <img src="src/assets/ibge-footer-image.png" alt="IBGE-image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Institutions