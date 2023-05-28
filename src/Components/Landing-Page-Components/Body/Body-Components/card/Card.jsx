import '../card/Card.css'

const Card = ({ title, text, image, direction}) => {
    return(
        direction == "left" ?
        <>
            <div className="card-container-div left">
                <div className="image-div">
                    <img src={image} alt="representation" />
                </div>
                <div className="info-div">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div> 
        </>
        :
        <>
            <div className="card-container-div right">
                <div className="info-div">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <div className="image-div">
                    <img src={image} alt="representation" />
                </div>
            </div> 
        </>
    )
}

export default Card
