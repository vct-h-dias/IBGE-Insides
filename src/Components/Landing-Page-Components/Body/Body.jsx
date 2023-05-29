import '../Body/Body.css'

import Card from './Body-Components/card/Card.jsx'

import Ranking from "../../../assets/ranking-card-image.png"
import Brasil from "../../../assets/brasil-card-image.png"
import Search from "../../../assets/search-card-image.png"

const Body = () => {
    return (
        <>
            <div className='body-div'>
                <div className="body-title-div" id='funcionalidades'>
                    <h1>Algumas Funcionalidades</h1>
                </div>
                <div className="cardArea-div">
                    <Card
                        title={"Ranking"}
                        text={"Possibilitamos o acesso do ranking de frequencia de nascidos por década (a partir de 1950). Sendo possível a visualização dos nomes mais ocorridos desde então."}
                        image={"src/assets/ranking-card-image.png"} 
                        direction="right" 
                    />
                    <Card
                        title={"Estados"}
                        text={"A analise de nomes pode ser feita a partir da seleção de estados, o que possibilita tanto a pesquisa naquele munícipio do fenômeno de nomes (seja ela um nome específico ou o ranking daquele estado)"}
                        image={"src/assets/brasil-card-image.png"}
                        direction="left"
                    />
                    <Card 
                        title={"Pesquisa"}
                        text={"Nomes espécifios podem ser buscados em nossa plataforma. Conseguimos fazer a análise da frequência por décadas desse nome, sendo possível filtra-los também por município."}
                        image={"src/assets/search-card-image.png"}
                        direction="right" 
                    />
                </div>

            </div>
        </>
    )
}

export default Body
