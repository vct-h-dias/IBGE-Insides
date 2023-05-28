import '../FCard/FCard.css'


const FCard = ({imgIcon, profileName, cFunction, gLink}) => {
    return(
        <>
            <div className="card-div">
                <a href={gLink} target="_blank" title='GitHub'>
                    <div className="img-div">
                        <img src={imgIcon} alt={profileName}/>
                    </div>
                    <div className="info-div">
                        <div className="name-div">
                            <h2>{profileName}</h2>
                        </div>
                        <div className="function-div">
                            <h3>{cFunction}</h3>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default FCard
