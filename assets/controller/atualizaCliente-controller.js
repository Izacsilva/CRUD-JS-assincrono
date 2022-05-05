import { clienteService } from "../service/cliente-service.js"
(async () => {
    

    const pegaURL = new URL(window.location)

    const id = pegaURL.searchParams.get('id')

    const campoNome = document.querySelector('[data-nome]')
    const campoEmail = document.querySelector('[data-email]')

    try{
        const dados = await clienteService.detalhaCliente(id)
        campoNome.value = dados.nome
        campoEmail.value = dados.email
    }catch(erro){
        console.log(erro)
        window.location.href = '../../telas/erro.html'
        
    }
    
        
    const formulario = document.querySelector('[data-form]')
    
        formulario.addEventListener('submit', async (evento) => {
            evento.preventDefault()
    
            try{
                await clienteService.atualizaCliente(id, campoNome.value, campoEmail.value)
                
                window.location.href = '../../telas/edicao_concluida.html'
            }catch(erro){
                console.log(erro)
                window.location.href = '../../telas/erro.html'
            }
        

})
})()



