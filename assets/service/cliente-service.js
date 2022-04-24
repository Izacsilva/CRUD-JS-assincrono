const listaClientes = () => { // função literal, com arrow function
    return fetch('http://localhost:3000/profile')
        .then( resposta => {
            return resposta.json()
    })    
}

export const clienteService = {
    listaClientes
}