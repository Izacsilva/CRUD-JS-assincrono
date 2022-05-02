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

tabela.addEventListener("click", (evento) => {
    
    let btnExcluir = evento.target.className === 'botao-simples botao-simples--excluir'
    if(btnExcluir) {
        evento.preventDefault()
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.deleteCliente(id)
            .then(()=>{
                linhaCliente.remove()
            })
    }

})

clienteService.listaClientes().then( data => { // Função com parâmentro "data"
    data.forEach(element => {
        tabela.appendChild(criaNovaLinha(element.nome, element.email, element.id))
    });
})