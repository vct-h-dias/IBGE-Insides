import states from "./../../../utils/states.json";

export default async function getStates() {
    try {
      const response = [];
      states.forEach(async (state) => {
        const req = await fetch(
          `http://servicodados.ibge.gov.br/api/v3/malhas/estados/${state.sigla}?formato=application%2Fvnd.geo%2Bjson`
        );
        const json = await req.json();
        json["sigla"] = state.sigla;
        json["color"] = state.color;

        response.push(json);
      });

      return response;
    } catch (error) {
      console.log(error);
    }
}