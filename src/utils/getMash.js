export async function getCountyMesh(codeArea) {
    try {
        const data = await fetch(`https://servicodados.ibge.gov.br/api/v3/malhas/estados/${codeArea}`);
        const mesh = await data.text();
        return mesh;
    } catch (e) {
        console.log(e)
    }
}