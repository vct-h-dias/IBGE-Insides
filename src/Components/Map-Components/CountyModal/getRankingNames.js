export async function getRankingNames(codeArea) {
    try {
        const data = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking?localidade=${codeArea}`);
        const names = await data.json();
        return names;
    } catch (e) {
        console.log(e)
    }
}