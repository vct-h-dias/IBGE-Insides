import CarrousselCard from "../CarrouselCard/CarrouselCard.jsx";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import Ranking from '../../../assets/ranking-card-image.png';
import Brasil from '../../../assets/brasil-card-image.png';
import Search from '../../../assets/search-card-image.png';

function Carousel() {

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 1120;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 1120;
    }

    return (
    <div className='relative bg-slate-300 w-[72rem] mx-auto rounded-r-md '>
        <div className='absolute top-1/2 translate-y-[-50%] w-full flex justify-between'>
            <button>
                <BsChevronCompactLeft className=' flex text-gray-700 border-gray-600 bg-black/10 hover:text-gray-900 hover:border-gray-800 hover:bg-black/20 translate-x-[-25%] rounded-lg' size={60} onClick={scrollLeft}/>
            </button>
            <button>
                <BsChevronCompactRight className=' flex text-gray-700 border-gray-600 bg-black/10 hover:text-gray-900 hover:border-gray-800 hover:bg-black/20 translate-x-[25%] rounded-lg' onClick={scrollRight} size={60}/>
            </button>
        </div>

        <div id="content" className='carousel flex items-center justify-start overflow-x-hidden scroll-smooth scrollbar-hide w-[70rem] mx-auto'>
            <div>
                <CarrousselCard imageURL={Ranking} title={"Ranking"} text={"A plataforma processa os dados e identificar os nomes mais frequentes em cada região geográfica, levando em consideração a distribuição populacional e as informações demográficas relevantes. Com base nesses cálculos, é gerado um ranking hierarquizado dos nomes mais comuns em cada localidade, permitindo aos usuários visualizarem e compararem a popularidade dos nomes em diferentes regiões. Essa funcionalidade de ranking forcece aos usuários uma perspectiva valiosa sobre a preferência de nomes em diversas áreas geográficas, ampliando as possibilidades de análise e compreensão dos dados demográficos disponíveis na plataforma NAMICZ."}/>
            </div>
            <div>
                <CarrousselCard imageURL={Brasil} title={"Estado"} text={"A plataforma processa os dados e identificar os nomes mais frequentes em cada região geográfica, levando em consideração a distribuição populacional e as informações demográficas relevantes. Com base nesses cálculos, é gerado um ranking hierarquizado dos nomes mais comuns em cada localidade, permitindo aos usuários visualizarem e compararem a popularidade dos nomes em diferentes regiões. Essa funcionalidade de ranking forcece aos usuários uma perspectiva valiosa sobre a preferência de nomes em diversas áreas geográficas, ampliando as possibilidades de análise e compreensão dos dados demográficos disponíveis na plataforma NAMICZ."}/>
            </div>
            <div>
                <CarrousselCard imageURL={Search} title={"Pesquisa"} text={"A plataforma processa os dados e identificar os nomes mais frequentes em cada região geográfica, levando em consideração a distribuição populacional e as informações demográficas relevantes. Com base nesses cálculos, é gerado um ranking hierarquizado dos nomes mais comuns em cada localidade, permitindo aos usuários visualizarem e compararem a popularidade dos nomes em diferentes regiões. Essa funcionalidade de ranking forcece aos usuários uma perspectiva valiosa sobre a preferência de nomes em diversas áreas geográficas, ampliando as possibilidades de análise e compreensão dos dados demográficos disponíveis na plataforma NAMICZ."}/>
            </div>  
        </div>
    </div>
    );
}

export default Carousel
