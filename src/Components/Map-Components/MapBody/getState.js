import states from "./../../../utils/states.json";

export default async function getStates() {
    try {
      const response = [];
      states.forEach(async (state) => {
        const req = await fetch(
          `https://servicodados.ibge.gov.br/api/v3/malhas/estados/${state.sigla}?qualidade=minima&formato=application%2Fvnd.geo%2Bjson`
        );
        const json = await req.json();
        json["sigla"] = state.sigla;
        json["color"] = state.color;
        json["selected"] = state.selected;
        

        response.push(json);
      });

      return response;
    } catch (error) {
      console.log(error);
    }
}