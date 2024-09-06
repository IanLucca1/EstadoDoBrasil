/*  // Resultados dos estados em ordem alfabetica
dados.sort((a, b) => a.estado.localeCompare(b.estado));
dados.forEach((estado) => {
  console.log(estado.estado);
});

let totalEstados = dados.length;

console.log(
  "O numero de estados no brasil são de " + totalEstados,
  "sendo que " + dados[6].estado,
  "esta dentro do estado de " + dados[8].estado
);
*/

function Pesquisar() {
  // Seleciona o elemento HTML com o ID "resultados-pesquisa"
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Exibe no console o conteúdo da variável 'section' para verificação.

  let campoPesquisa = document.getElementById("Pesquisa").value;
  console.log(campoPesquisa);

  // Se o campo de pesquisa estiver vazio ou com menos de 5 caracteres
  if (campoPesquisa === "" || campoPesquisa.length < 2) {
    section.innerHTML = "Nenhum Estado encontrado";
    return;
  }

  // Normaliza o campo de pesquisa para evitar erros de acentuação e capitalização
  campoPesquisa = campoPesquisa.normalize('NFD').toLowerCase();

  // Inicializa uma string vazia para acumular os resultados da pesquisa
  let resultados = "";

  // Percorre a lista 'dados' com informações a serem exibidas
  for (let dado of dados) {
    // Normaliza as strings de título, descrição e tags
    let titulo = dado.estado ? dado.estado.normalize('NFD').toLowerCase() : "";
    let descricaao = dado.descricao ? dado.descricao.normalize('NFD').toLowerCase() : "";
    let tagss = dado.tags ? dado.tags.normalize('NFD').toLowerCase() : "";

    // Verifica se o termo de pesquisa corresponde exatamente ao título
    const pesquisaExata = titulo === campoPesquisa;

    // Verifica se o termo de pesquisa aparece na descrição ou nas tags
    const pesquisaParcial = descricaao.includes(campoPesquisa) || tagss.includes(campoPesquisa);

    // Exclui Mato Grosso do Sul da busca "Sul"
    const excluirMatoGrossoDoSul = campoPesquisa === "sul" && titulo === "mato grosso do sul";
    const excluirRioGrandeDoNorte= campoPesquisa === "norte" && titulo === "rio grande do norte";

    // Exibe o resultado se for uma correspondência exata ou parcial, excluindo Mato Grosso do Sul
    if ((pesquisaExata || pesquisaParcial) && !excluirMatoGrossoDoSul && !excluirRioGrandeDoNorte) {
      // Adiciona o bloco de resultados ao HTML
      resultados += `
        <div class="item-resultado">
          <div class="imagem">
            <img src="${dado.imagem}" alt="Imagens" />
          </div>
          <div class="texto">
            <a href="${dado.link}" target="_blank"><h2>${dado.estado}</h2></a>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais Informações</a>
          </div>
        </div>`;
    }
  }

  // Atualiza a seção de resultados com o conteúdo gerado
  section.innerHTML = resultados ? resultados : "Nenhum Estado encontrado";
}




