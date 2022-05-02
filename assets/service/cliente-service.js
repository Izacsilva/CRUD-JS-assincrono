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

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(response => {
            return response.json()
        })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            nome: nome,
            email: email
        })

        
        
    }).then(res => {return res.body})
}

export const clienteService = {
    listaClientes,
    criaCliente,
    deleteCliente,
    detalhaCliente
}