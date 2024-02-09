import { useState } from 'react'
import EstiloGlobal, { Container } from './styles'
import ListaContatos from './components/ListaContatos'

function App() {
  const [contato, setContato] = useState({ nome: '', telefone: '', email: '' })
  const [listaDeContatos, setListaDeContatos] = useState<
    { nome: string; telefone: string; email: string }[]
  >([])

  function definirNome(evento: React.ChangeEvent<HTMLInputElement>) {
    setContato({ ...contato, nome: evento.target.value })
  }

  function definirTelefone(evento: React.ChangeEvent<HTMLInputElement>) {
    setContato({ ...contato, telefone: evento.target.value })
  }

  function definirEmail(evento: React.ChangeEvent<HTMLInputElement>) {
    setContato({ ...contato, email: evento.target.value })
  }
  function adicionarContato() {
    setListaDeContatos([...listaDeContatos, contato])
  }

  return (
    <Container>
      <EstiloGlobal />
      <div className="App">
        <div>
          <div>
            <label>Nome:</label>
            <br />
            <input type="text" onChange={definirNome} value={contato.nome} />
          </div>
          <div>
            <label>Telefone:</label>
            <br />
            <input
              type="number"
              onChange={definirTelefone}
              value={contato.telefone}
            />
          </div>
          <div>
            <label>Email:</label>
            <br />
            <input type="text" onChange={definirEmail} value={contato.email} />
          </div>
          <button onClick={adicionarContato}>Adicionar Contato</button>
        </div>
        <ListaContatos listaDeContatos={listaDeContatos} />
        {contato.nome}
        {contato.telefone}
        {contato.email}
      </div>
    </Container>
  )
}

export default App
