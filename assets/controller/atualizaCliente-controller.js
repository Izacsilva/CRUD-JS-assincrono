import { clienteService } from "../service/cliente-service.js"

const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const campoNome = document.querySelector('[data-nome]')
const campoEmail = document.querySelector('[data-email]')

clienteService.detalhaCliente(id)
    .then( dado => {
        campoNome.value = dado.nome
        campoEmail.value = dado.email
    })

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    clienteService.atualizaCliente(id, campoNome.value, campoEmail.value)
        .then(() => {
            window.location.href = '../../telas/edicao_concluida.html'

        })
})
