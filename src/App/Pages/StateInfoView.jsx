import React from "react";

// Components:
import CardImage from "../../Components/CardImage/CardImage.jsx";
import UnderlineTx from "../../Components/Basic/UnderlineTx.jsx";
// Images:

function StateInfoView() {
  return (
    <>
      <div className="flex px-40 gap-8 py-10 justify-between border-b">
        <div className="w-1/2 h-fit flex border-[1px] p-5 px-10 rounded-smhover:scale-105 duration-75 group">
          <div className="flex w-[350px] h-[350px] border-[1px] rounded-sm overflow-hidden">
            <img
              src="https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=maxima"
              alt="state"
              className="w-[350px] h-[350px] group-hover:scale-105 duration-75"
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
        <div className='border-[1px] rounded-sm w-1/2'>
            <div className='border-b p-5 flex justify-center'>
                <h1 className='text-2xl'>Outros estados</h1>
            </div>
            <div className='grid p-5'>
                <input type="text" name="stateFinder" id="stateFinder" placeholder="Digite o nome de um estado brasileiro..." className='p-[5px] pl-3 hover:pl-4 focus:pl-5 focus:border-slate-950 duration-75 border outline-none'/>
            </div>
            <div className='flex flex-wrap gap-6 justify-center p-5 overflow border rounded-sm mx-5'>
                {/*Todos os 27 estados do Brasil em ordem alfabética*/}
                <CardImage title={"Acre"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/AC?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Alagoas"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/AL?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Amapá"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/AP?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Amazonas"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/AM?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Bahia"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/BA?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Ceará"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/CE?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Distrito Federal"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/DF?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Espírito Santo"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/ES?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Goiás"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/GO?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Maranhão"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/MA?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Mato Grosso"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/MT?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Mato Grosso do Sul"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/MS?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Minas Gerais"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/MG?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Pará"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/PA?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Paraíba"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/PB?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Paraná"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/PR?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Pernambuco"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/PE?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Piauí"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/PI?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Rio de Janeiro"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/RJ?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Rio Grande do Norte"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/RN?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Rio Grande do Sul"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/RS?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Rondônia"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/RO?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Roraima"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/RR?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Santa Catarina"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/SC?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"São Paulo"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/SP?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Sergipe"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/SE?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Tocantins"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/estados/TO?formato=image/svg+xml&qualidade=maxima"}/>
                <CardImage title={"Brasil"} goTo={"./Estado"} image={"https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=image/svg+xml&qualidade=maxima"}/>
            </div>
        </div>
      </div>
      {/* <div className='flex'>
                <div className='bg-slate-100'>
                    filtros
                </div>
                <div className=''>
                    <img src="https://placehold.co/1000x600" alt="gráfico" />
                </div>
            </div> */}
    </>
  );
}

export default StateInfoView;
