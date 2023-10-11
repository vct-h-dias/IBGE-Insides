import React from "react";

// Components:
import CardImage from "../../Components/CardImage/CardImage.jsx";
import UnderlineTx from "../../Components/Basic/UnderlineTx.jsx";

import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

function StateInfoView() {
  return (
    <>
      <Header />
      <div className="flex px-40 gap-8 py-10 justify-between border-b pt-28">
        <div className="border-[1px] rounded-sm w-1/2 group">
          <div className="border-b p-5 flex justify-center bg-slate-800 text-slate-50">
            <h1 className="text-2xl">Estado Selecionado</h1>
          </div>
          <div className="flex m-6 items-center">
            <div className="flex w-[350px] h-[350px] border-[1px] rounded-sm overflow-hidden">
              <img
                src="https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=maxima"
                alt="state"
                className="w-[350px] h-[350px]"
              />
            </div>
            <div className="pl-10">
              <div className="border-b-[1px] py-5">
                <h1 className="text-4xl">
                  Nome: <UnderlineTx text={"Brasil"} />
                </h1>
                <h1 className="text-2xl">Sigla: BR</h1>
              </div>
              <div className="border-b-[1px] py-5">
                <h1 className="">Tamanho: 8.515.767,049 km²</h1>
                <h1 className="">População: 211.755.692 habitantes</h1>
                <h1 className="">Densidade demográfica: 25,07 hab/km²</h1>
              </div>
              <div className="py-5">
                <h1 className="">PIB: R$ 7,4 trilhões</h1>
                <h1 className="">Região: América do Sul</h1>
                <h1 className="">Capital: Brasília</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[1px] rounded-sm w-1/2">
          <div className="border-b p-5 flex justify-center bg-slate-800 text-slate-50">
            <h1 className="text-2xl">Outros estados</h1>
          </div>
          <div className="grid p-5">
            <input
              type="text"
              name="stateFinder"
              id="stateFinder"
              placeholder="Procure um estado brasileiro..."
              className="p-[5px] pl-3 hover:pl-4 focus:pl-5 focus:border-slate-950 duration-75 border outline-none"
            />
          </div>
          <div className="h-80 overflow-x-auto p-5 mb-5 overflow border rounded-sm mx-5">
            <div className="flex flex-wrap gap-6 justify-center">
              <CardImage
                title={"Acre"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/AC?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Alagoas"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/AL?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Amapá"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/AP?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Amazonas"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/AM?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Bahia"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/BA?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Ceará"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/CE?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Distrito Federal"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/DF?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Espírito Santo"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/ES?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Goiás"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/GO?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Maranhão"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/MA?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Mato Grosso"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/MT?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Mato Grosso do Sul"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/MS?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Minas Gerais"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/MG?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Pará"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/PA?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Paraíba"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/PB?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Paraná"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/PR?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Pernambuco"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/PE?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Piauí"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/PI?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Rio de Janeiro"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/RJ?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Rio Grande do Norte"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/RN?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Rio Grande do Sul"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/RS?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Rondônia"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/RO?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Roraima"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/RR?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Santa Catarina"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/SC?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"São Paulo"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/SP?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Sergipe"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/SE?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Tocantins"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/estados/TO?formato=image/svg+xml&qualidade=maxima"
                }
              />
              <CardImage
                title={"Brasil"}
                goTo={"./Estado"}
                image={
                  "https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=maxima"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mt-10">
          <h1 className="text-3xl">
            <UnderlineTx text={"Analisando dados"} />
          </h1>
        </div>

        <div className="flex justify-between px-28 pt-14">
          <div className=" min-w-[25rem] border shadow-lg">
            <div className="border-b p-5 flex justify-center bg-slate-800 text-slate-50">
              <h1 className="text-2xl">filtros</h1>
            </div>
          </div>
          <div className="w-[1200px] h-[600px] border">
            <img
              className="w-[1200px] h-[600px] border-b"
              src="https://d2w9rnfcy7mm78.cloudfront.net/14256899/original_19504a1513c73fa85db68c8fba667f7d.png?1638788267?bc=0"
              alt="gráfico"
            />
          </div>
        </div>

        <div className="flex justify-center mt-28">
          <div>
            <div>
              <h1 className="border-b p-5 flex justify-center bg-slate-800 text-slate-50">
                <h1 className='text-2xl'>Ranking</h1>
              </h1>
            </div>
            <div className='w-[1200px] h-[600px] border'>
              <img src="https://extra.globo.com/incoming/24278153-b3c-c03/w640h360-PROP/grafico-fgv-redes.png" alt="Ranking" className='w-[1200px] h-[600px] border-b'/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StateInfoView;
