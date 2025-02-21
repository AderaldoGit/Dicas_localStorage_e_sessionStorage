/* 

@author Aderaldo Anderson S. V. Amorim

MÉTODO

getItem(key)

para facilitar o teste, irei criar uma função que executa a ação getItem(key)

*/

localStorage.setItem("conteudo", "Primeiro Conteúdo Salvo no LocalStorage");

function consultarLocalStorage(key) {
  // Nesse caso é necessário passar 1 argumento, que seria o nome que foi dado a chave
  // criamos uma variável para receber o conteúdo
  let conteudoLocalStorage = localStorage.getItem(key);

  if (conteudoLocalStorage) {
    // com IF verificamos se existe o valor chamado no LocalStorage e retorna o conteúdo
    return conteudoLocalStorage;
  }
  // Caso contrário retorna uma mensagem avisando
  return `Não existe: "${key}" no localStorage`;
}

// Chamando a Função
console.log(consultarLocalStorage("conteudo"));


