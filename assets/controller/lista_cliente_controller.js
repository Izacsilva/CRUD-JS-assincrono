import { clienteService } from '../service/cliente-service.js'
const criaNovaLinha = (nome, email, id) => {
    const novaLinha = document.createElement('tr')

    const conteudo = 
        `
            <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>
        `

        novaLinha.innerHTML = conteudo
        novaLinha.dataset.id = id

        return novaLinha
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener("click", async (evento) => {
    
    let btnExcluir = evento.target.className === 'botao-simples botao-simples--excluir'
    if(btnExcluir) {
        try{
            evento.preventDefault()

            const linhaCliente = evento.target.closest('[data-id]') // pega o elemento pai"ancestral" mais próximo.

            let id = linhaCliente.dataset.id
            
            await clienteService.deleteCliente(id) 
            //pausa a execução da função assíncrona para esperar a resolução da promise

            linhaCliente.remove()
        }catch(erro) {
            console.log(erro)
            window.location.href = '../../telas/erro.html'
        }
    }           
            
})   

const render = async () => {
    try{
        const clienteServer = await clienteService.listaClientes() 
        // A chamada a função clienteSevice é uma promise. O await, que quer dizer aguarda, ficará esperando
        // o retorno da função.
    
        clienteServer.forEach(element => { 
            // com o retorno armazenado na variável utilizaremos os dados para fazer um loop
            // extraindo da lista nome, e-mail e id, para então exir na nossa tabela html.
            tabela.appendChild(criaNovaLinha(element.nome, element.email, element.id))
        });
    }catch(erro){
        console.log(erro)
        window.location.href = '../../telas/erro.html'
    }
    }

render()
