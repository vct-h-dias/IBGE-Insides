import './AnotherComponent.css'

const AnotherComponent = ({booleanoExemplo}) => {

    // da pra fazer uns bang de JS aqui
    const booleano = booleanoExemplo ? 'Veridico' : 'Fake'

    return (

        <>
            <h1>{booleano}</h1>
        </>

    )
}

export default AnotherComponent
