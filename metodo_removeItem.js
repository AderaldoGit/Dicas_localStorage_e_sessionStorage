/* 

@author Aderaldo Anderson S. V. Amorim

MÉTODO

removeItem(key)

para facilitar o teste, irei criar uma função que executa a ação removeItem(key)

*/

function removerItemlStorage() {
  // para remover uma chave, passamos apenas 1 argumento, o nome da chave
  localStorage.removeItem("conteudo");

  //retornaremos uma mensagem de sucesso;
  return "Removido com Sucesso!!";
}

// Chamando a Função
console.log(removerItemlStorage());
