# Dicas de uso localStorage e sessionStorage
O localStorage e sessionStorage são recursos importantes da API de Armazenamento da Web (Web Storage API), que permitem aos desenvolvedores armazenar dados localmente no navegador do usuário.

![Image](https://github.com/user-attachments/assets/af2aa6e3-2109-4887-825a-e84266b26679)

MÉTODOS

clear()<br>
// APAGA todas as chaves do LocalStorage / SessionStorage
=> Exemplo: localStorage.clear();

getItem("KEY") <br>
// Retorna o conteúdo armazenado na chave indicada como KEY
=> Exemplo: let minhaLista = localStorage.getItem("Nome escolhido como KEY"); 

removeItem() <br>
// Quando passado um nome de chave, irá remover essa chave do armazenamento
=> Exemplo: localStorage.removeItem("KEY");

setItem("KEY", "Valor") <br>
// Recebe 2 parâmetros "KEY" e "valor a ser armazenado"
=> Exemplo: localStorage.setItem("KEY", "Conteúdo");

Você pode usar esses métodos para aplicações que tem variáveis que pode perder seu valor ao recarregar pagina por acidente.

Imagine que você está desenvolvendo uma Aplicação Web, de lista onde o usuário, adiciona itens na lista, e por acidente o usuário atualiza a página e tudo que foi digitado é perdido. 

#Resulatdo: Usuário insatisfeito.

Desenvolvedores pensa em soluções, faz parte da gente buscar resolver problemas, por isso buscamos sempre a excelência.

Para quem está aprendendo a desenvolver o localStorage e sessionStorage é uma boa alternativa, para simular banco de dados, simular como trabalhar com respostas do servidor.

Aqui vou deixar alguns modelos de USO das Ferramentas localStorage e sessionStorage, usando HTML, CSS, JavaScript, localStorage e sessionStorage

Um link de uma Ferramenta Pronta que usa localStorage e sessionStorage
https://kimerakil.github.io/listacompras/ 
