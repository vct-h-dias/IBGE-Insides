import '../card/Card.css'

const Card = ({ title, text, image}) => {
    return (
        <>
            <div className="card-container-div">
                <h1>{title}</h1>
                <p>{text}</p>
                <img src="../../../" alt="representation" />
            </div> 
        </>
    )
}

export default Card
