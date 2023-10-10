// Dependencies:
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Slide from "@mui/material/Slide";

// Components:
import Header from "../../Components/Header/Header";
import UnderlineTx from "../../Components/Basic/UnderlineTx";
import GoDownBtn from "../../Components/Basic/goDownBtn";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";

// Images:
import namiczImg from "../../assets/namicz-Icon.svg";
import brasilCardImg from "../../assets/brasil-card-image.png";
import rankingCardImg from "../../assets/ranking-card-image.png";
import searchCardImg from "../../assets/search-card-image.png";

// Icons:
import SearchIcon from "@mui/icons-material/Search";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function LandingPage() {
  const [showNamicz, setshowNamicz] = useState(false);
  const [showRest, setshowRest] = useState(false);
  const [showSlide, setShowSlide] = useState(false);

  var cont = 0;
  return (
    <>
      <Header />
      <div className="block h-screen">
        <div className="w-full flex items-center text-center justify-center h-[94vh]">
          <h1 className="text-4xl">
            <Typewriter
              words={["Bem vindo ao "]}
              loop={1}
              cursor={false}
              typeSpeed={70}
              onType={() => {
                cont++;
                if (cont === 12) {
                  setshowNamicz(true);
                  cont = 0;
                }
              }}
            />

            {!!showNamicz && (
              <span className="border-b-4 font-medium border-slate-800">
                <Typewriter
                  words={["Namicz!"]}
                  loop={1}
                  cursor={false}
                  typeSpeed={70}
                  onType={() => {
                    cont++;
                    if (cont === 7) {
                      setshowRest(true);
                      cont = 0;
                    }
                  }}
                />
              </span>
            )}

            {!!showRest && (
              <Typewriter
                words={[
                  " ",
                  "a noss",
                  " A nossa plataforma de visualização de dados demográficos e geográficos!",
                ]}
                loop={1}
                cursor={false}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={40}
                onDelete={() => {
                  cont--;
                }}
                onType={() => {
                  cont++;
                  if (cont === 73) {
                    setShowSlide(true);
                    cont = 0;
                  }
                }}
              />
            )}
          </h1>
        </div>

        {!!showSlide && (
          <Slide
            direction="up"
            in={showSlide}
            mountOnEnter
            unmountOnExit
            timeout={1000}>
            <div id="aboutBtn" className="flex justify-center items-center">
              <GoDownBtn
                addClasses="bg-slate-800 text-white hover:bg-black border-2 border-slate-800 rounded-sm shadow-2xl"
                goTo="#sobre"
              />
            </div>
          </Slide>
        )}
      </div>

      <div id="sobre" className="bg-slate-700 w-full h-full shadow-inner">
        <div className="h-[95vh] flex justify-evenly items-center">
          <div className="bg-slate-50 cursor-pointer">
            <img
              src={namiczImg}
              alt="namiczLogo"
              className=" w-96 h-96  shadow-2xl hover:scale-105 duration-150"
            />
          </div>

          <div className="border-[1px] border-slate-800 rounded-sm w-[45rem] h-fit shadow-2xl">
            <div className="w-full bg-slate-100 rounded-t-sm border-b-[1px] border-slate-800 py-5 pl-4">
              <h1 className="text-xl">
                <UnderlineTx text="O que é isso?" />
              </h1>
            </div>
            <div>
              <div className="py-5 px-14 bg-white">
                <h1>
                  O Namicz é uma plataforma revolucionária que fornece acesso
                  gratuito a uma riqueza de dados demográficos do Instituto
                  Brasileiro de Geografia e Estatística. Com foco na
                  visualização de informações detalhadas sobre nomes de pessoas
                  por região do Brasil, esta ferramenta intuitiva permite aos
                  usuários explorar e analisar facilmente as informações
                  geográficas e demográficas valiosas fornecidas pelo IBGE.
                </h1>
              </div>
            </div>
            <div className="bg-white rounded-b-sm pr-14 w-full h-24 flex justify-end items-center">
              <a
                href="/Map"
                className="flex items-center justify-center rounded-sm gap-1 h-11 p-1 pr-2 border-[1px] border-slate-400 text-slate-50 bg-slate-800 hover:bg-slate-700 hover:w-fit hover:px-3 duration-75">
                <SearchIcon className="text-slate-50" /> <p>Ver Mapa</p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center pb-5">
          <GoDownBtn
            addClasses="bg-slate-50 text-bg-slate-800 hover:bg-slate-100 border-2 border-slate-50 rounded-sm shadow-2xl"
            goTo="#finalidade"
          />
        </div>
      </div>

      <div
        id="finalidade"
        className="w-full h-screen pt-28 shadow-[0_-65px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex justify-center items-center mb-4">
          <div className="border-[1px] rounded-sm w-[45rem] h-fit shadow-2xl duration-100 hover:scale-[1.02]">
            <div className="w-full rounded-t-sm border-b-[1px] py-5 flex justify-center">
              <h1 className="text-xl">
                Nossa finalidade, a <UnderlineTx text="antroponomástica" />:
              </h1>
            </div>
            <div className="py-5 px-14 bg-white">
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias nam quasi ut tenetur iste labore expedita voluptatem
                sapiente minus inventore voluptatum qui at debitis maxime,
                laborum nobis suscipit minima maiores. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Aliquid dolorum similique
                impedit delectus ullam molestias voluptas laborum harum
                cupiditate eveniet ea libero, praesentium laboriosam nam,
                commodi at, deleniti laudantium quae? Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Doloremque, fugiat quasi.
                Expedita porro, ea, nemo fuga blanditiis dolor dolores ab
                officiis, inventore accusantium est aut obcaecati atque! Minus,
                autem qui?
              </h1>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia
                eos officiis quasi minima facilis, accusantium ullam earum
                repellat maiores ea obcaecati sequi eius itaque. Facilis illo
                debitis sequi rerum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Reiciendis vitae molestiae ipsa nostrum dicta
                laborum necessitatibus adipisci laudantium accusamus,
                voluptatibus sed est voluptatum deleniti, numquam ut, et illo
                iste earum.
              </h1>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae quidem consectetur eaque rem molestias hic, quaerat
                omnis sit possimus, doloribus alias veritatis illo asperiores
                dolorum vero doloremque dicta neque! Nihil? Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Tempore, illum
                recusandae. At ullam a corporis distinctio, maxime officia. Odit
                dolorum similique repellat, eaque nam enim nesciunt id
                distinctio consequatur unde? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Explicabo id, quia et laboriosam
                culpa excepturi possimus quod consequatur autem tempore eligendi
                rerum velit quae odit rem quis corrupti eaque cupiditate.
              </h1>
            </div>
            <div className="rounded-sm pl-14 w-full h-24 flex items-center">
              <a
                href="#"
                className="flex items-center justify-center gap-1 h-11 p-2 border-[1px] border-slate-950 text-slate-950 rounded-sm hover:bg-slate-50 hover:w-fit hover:px-3 duration-75">
                <AutoStoriesIcon className="text-slate-950" />{" "}
                <p>Saiba mais!</p>
              </a>
            </div>
          </div>
        </div>
        <div id="aboutBtn" className="flex justify-center items-center">
          <GoDownBtn
            addClasses="bg-slate-800 text-white hover:bg-black border-2 border-slate-800 rounded-sm shadow-2xl"
            goTo="#funcionalidades"
          />
        </div>
      </div>

      <div id="funcionalidades" className="w-full h-screen pt-28">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl">
            <UnderlineTx text="Funcionalidades" />
          </h1>
        </div>

        <div className="flex justify-evenly items-start py-10">
          <Card
            title="Visualização de dados"
            description="A análise de dados no NAMICZ permite entender a distribuição geográfica de nomes de pessoas, revelando preferências culturais e variações regionais. Isso ajuda os usuários a compreender as características demográficas de uma região e é útil em pesquisas socioculturais, estudos de mercado e planejamento urbano."
            image={brasilCardImg}
            goTo="/estados/brasil"
          />
          <Card
            title="Ranking de nomes"
            description="A plataforma gera um ranking hierarquizado dos nomes mais comuns em diferentes regiões geográficas, considerando dados demográficos e populacionais relevantes. Isso permite comparar a popularidade dos nomes em diferentes localidades, fornecendo uma perspectiva valiosa sobre as preferências de nomes em várias áreas geográficas e facilitando a análise de dados demográficos.."
            image={rankingCardImg}
            goTo="#funcionalidades"
          />
          <Card
            title="Pesquisa de nomes"
            description="A pesquisa de nomes no Namicz é essencial para explorar dados demográficos relacionados a nomes de pessoas. Os usuários podem buscar nomes específicos, explorar nomes populares em regiões e filtrar dados com critérios personalizados, como faixa etária e gênero, permitindo análises detalhadas das preferências de nomes em grupos específicos"
            image={searchCardImg}
            goTo="/Map"
          />
        </div>
        <div id="aboutBtn" className="flex justify-center items-center">
          <GoDownBtn
            addClasses="bg-slate-800 text-white hover:bg-black border-2 border-slate-800 rounded-sm shadow-2xl"
            goTo="#tecnologias"
          />
        </div>
      </div>

      <div id="tecnologias" className="w-full pt-28">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl">
            <UnderlineTx text="Tecnologias" />
          </h1>
        </div>

        <div className="flex justify-center w-full py-10 mb-10">
          <div className="grid grid-cols-3 gap-10">
            <Card
              title="React"
              description="React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais."
              image="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
              goTo="https://pt-br.reactjs.org/"
            />
            <Card
              title="Vite"
              description="Vite é um construtor de aplicações web que visa oferecer uma experiência de desenvolvimento de desenvolvedor extremamente rápida. Ele faz isso através do agrupamento de módulos ES e de um servidor de desenvolvimento com recarga rápida do módulo (HMR) integrado."
              image="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
              goTo="https://vitejs.dev/"
            />
            <Card
              title="GitHub"
              description="GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo."
              image="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
              goTo="https://github.com"
            />
            <Card
              title="Material UI"
              description="Material-UI é uma biblioteca de componentes simples e personalizáveis para construir aplicativos React mais rápidos, bonitos e acessíveis. A biblioteca de componentes React para um desenvolvimento web mais rápido e fácil. Crie interfaces de usuário bonitas e responsivas usando os componentes Material Design."
              image="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
              goTo="https://material-ui.com/pt/"
            />
            <Card
              title="Mapbox GL"
              description="Mapbox GL JS é uma biblioteca JavaScript para renderizar mapas interativos em navegadores da web e aplicativos móveis. Ele fornece uma API para adicionar camadas personalizadas, controles e ferramentas de interação de mapa para o seu aplicativo."
              image="https://seeklogo.com/images/M/mapbox-logo-D6FDDD219C-seeklogo.com.png"
              goTo="https://docs.mapbox.com/"
            />
            <Card
              title="TailwindCSS"
              description="Tailwind CSS é um framework CSS de código aberto que utiliza uma abordagem de utilitários CSS para construir projetos customizados. Ele fornece classes de baixo nível que você pode combinar para criar qualquer interface de usuário que você desejar."
              image="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
              goTo="https://tailwindcss.com/"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;
