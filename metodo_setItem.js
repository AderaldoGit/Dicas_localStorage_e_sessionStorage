/* 

@author Aderaldo Anderson S. V. Amorim

MÉTODO

setItem(key, value)

para facilitar o teste, irei criar uma função que executa a ação setItem(key, value)

*/

function criarChaveLocalStorage() {
  // Nesse exemplo vamos trabalhar apenas com textos simples como conteúdo para armazenar
  // passamos 2 argumentos
  // 1º argumento o nome que vamos dar a CHAVE(KEY) = "conteudo"
  // 2º argumento passamos o conteúdo que será armazenado = "Primeiro Conteúdo Salvo no LocalStorage"
  localStorage.setItem("conteudo", "Primeiro Conteúdo Salvo no LocalStorage");

  //retornaremos o conteúdo usando o método getItem();
  return localStorage.getItem("conteudo");
}

// Chamando a Função
console.log(criarChaveLocalStorage());
