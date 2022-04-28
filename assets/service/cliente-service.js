const listaClientes = () => { // função literal, com arrow function
    return fetch('http://localhost:3000/profile')
        .then( resposta => {
            return resposta.json()
    })    
};

const criaCliente = (nome, email) => {

    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            nome: nome,
            email: email
        })

        
        
    }).then(res => {return res.body})
};

const deleteCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
        })
    }

export const clienteService = {
    listaClientes,
    criaCliente,
    deleteCliente
}