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