export async function getNames(codeArea) {
    try {
        const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking?localidade=${codeArea}`;
        console.log(url);
        const data = await fetch(url);
        const names = await data.json();
        return names;
    } catch (e) {
        console.log(e)
    }
}