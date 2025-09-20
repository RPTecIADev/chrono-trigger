/*
quando clicar no personagem da listagem temos que esconder o cartão do personagem aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do personagem

precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de personagens

- remover a classe aberto só do cartão que está aberto
- ao clicar em um personagem da listagem pegamos o id desse personagem pra saber qual cartão mostrar
-remover a classe ativo que marca o personagem selecionado
-adicionar a classe ativo no item da lista selecionado 
*/


// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const listaSelecaoPersonagem = document.querySelectorAll('.personagem')

listaSelecaoPersonagem.forEach(personagem => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de personagens

    personagem.addEventListener('click', () => {
        //remover a classe aberto só do cartão que está aberto
        const cartaoPersonagemAberto = document.querySelector('.aberto')        
        cartaoPersonagemAberto.classList.remove('aberto')

        //ao clicar em um personagem da listagem pegamos o id desse personagem pra saber qual cartão mostrar
        const idPersonagemSelecionado = personagem.attributes.id.value

        const idDoCartaoPersonagemParaAbrir = 'cartao-' + idPersonagemSelecionado
        const cartaoPersonagemParaAbrir = document.getElementById(idDoCartaoPersonagemParaAbrir)
        cartaoPersonagemParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pesonagem selecionado
        const personagemAtivoNaListagem = document.querySelector('.ativo')
        personagemAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado 
        const personagemSelecionadoNaListagem = document.getElementById(idPersonagemSelecionado)
        personagemSelecionadoNaListagem.classList.add('ativo')
    })
})
