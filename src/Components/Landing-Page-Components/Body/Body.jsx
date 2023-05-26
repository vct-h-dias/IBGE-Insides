import '../Body/Body.css'

import Card from './Body-Components/card/Card.jsx'

const Body = () => {
    return (
        <>
            <div className='body-div'>
                <div className="body-title-div" id='funcionalidades'>
                    <h1>Algumas Funcionalidades</h1>
                    <p>oi</p>
                </div>
                <div className="cardArea-div">
                    <Card title={""} text={""} image={""}/>
                </div>

            </div>
        </>
    )
}

export default Body
