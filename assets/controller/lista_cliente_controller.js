import { clienteService } from '../service/cliente-service.js'
const criaNovaLinha = (nome, email) => {
    const novaLinha = document.createElement('tr')

    const conteudo = 
        `
            <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>
        `

        novaLinha.innerHTML = conteudo

        return novaLinha
}

const tabela = document.querySelector('[data-tabela]')

clienteService.listaClientes().then( data => { // Função com parâmentro "data"
    data.forEach(element => {
        tabela.appendChild(criaNovaLinha(element.nome, element.email))
    });
})