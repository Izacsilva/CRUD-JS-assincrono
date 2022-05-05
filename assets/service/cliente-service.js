const listaClientes = () => { // função literal, com arrow function
    return fetch('http://localhost:3000/profile')
        .then( resposta => {
            if(resposta.ok) {
            return resposta.json()
        } else {
            throw new Error('Não foi possível listar os clientes')
        }
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

        
        
    }).then(res => {if (res.ok){
        return res.body
    }else {
        throw new Error('Não foi possível criar um novo cliente')
    }})
};

const deleteCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
        }).then(resposta => {
            if(!resposta.ok){
                throw new Error('Não foi possível Excluir o cliente.')
            }
        })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(response => {
            if(response.ok) {
                return response.json()
            }else {
                throw new Error('Não foi possível exibir o cliente.')
            }
        })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profle/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
            nome: nome,
            email: email
        })
        
    })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.json()
        }else{
            throw new Error('Não foi possível atualizar o cliente.')
        }
    })
        
        
}

export const clienteService = {
    listaClientes,
    criaCliente,
    deleteCliente,
    detalhaCliente,
    atualizaCliente
}