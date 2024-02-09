import React from 'react'

function ListaContatos({ listaDeContatos }) {
  return (
    <>
      <ul>
        {listaDeContatos.map((contato, index) => {
          return (
            <li key={index}>
              {contato.nome + ' ' + contato.telefone + ' ' + contato.email}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ListaContatos
