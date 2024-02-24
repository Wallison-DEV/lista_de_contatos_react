import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Formulario from '../../components/Formulario'
import BarraDePesquisa from '../../components/BarraDePesquisa'
import {
  BotaoHome,
  BotoesMais,
  ContatoDiv,
  BotoesContato,
  TresPontosButton,
  BotoesDiv,
  PlusIcon,
  MaisDiv,
  BotaoSalvar,
  BotaoCancelar,
  EditandoCttDiv
} from './styles'
import { ListaEstilo } from '../../styles'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'

interface Contato {
  nome: string
  telefone: string
  email: string
}

function Home() {
  const navigate = useNavigate()
  const [exibicaoMais, setExibicaoMais] = useState(false)
  const [estaEditandoCtt, setEstaEditandoCtt] = useState(false)
  const [contatoEditandoIndex, setContatoEditandoIndex] = useState<
    number | null
  >(null)
  const listaDeContatos: Contato[] = useSelector(
    (state: RootReducer) => state.carregar
  )
  const { termo } = useSelector((state: RootReducer) => state.buscar)
  const [exibicaoEdit, setExibicaoEdit] = useState<boolean[]>(
    Array.from({ length: listaDeContatos.length }, () => false)
  )

  const [nomeEdit, setNomeEdit] = useState('')
  const [telefoneEdit, setTelefoneEdit] = useState('')
  const [emailEdit, setEmailEdit] = useState('')

  useEffect(() => {
    if (estaEditandoCtt && contatoEditandoIndex !== null) {
      const contato = listaDeContatos[contatoEditandoIndex]
      setNomeEdit(contato.nome)
      setTelefoneEdit(contato.telefone)
      setEmailEdit(contato.email)
    }
  }, [contatoEditandoIndex, estaEditandoCtt, listaDeContatos])

  function limparContatos() {
    localStorage.clear()
    window.location.reload()
  }

  function removerContato(indexRemove: number) {
    const contatosLocalStorage = JSON.parse(
      localStorage.getItem('contatos') || '[]'
    )

    const novaLista = [
      ...contatosLocalStorage.slice(0, indexRemove),
      ...contatosLocalStorage.slice(indexRemove + 1)
    ]
    localStorage.setItem('contatos', JSON.stringify(novaLista))
    window.location.reload()
  }

  function exibirBotoesEdicao(index: number) {
    const newExibicaoEdit = [...exibicaoEdit]
    newExibicaoEdit[index] = !newExibicaoEdit[index]
    setExibicaoEdit(newExibicaoEdit)
  }

  function exibirBotoesMais() {
    setExibicaoMais(!exibicaoMais)
  }

  const filtrarTarefas = () => {
    return listaDeContatos.filter(
      (item) =>
        item.nome.includes(termo) ||
        item.telefone.includes(termo) ||
        item.email.includes(termo)
    )
  }
  const editarContato = (index: number) => {
    setEstaEditandoCtt(true)
    setContatoEditandoIndex(index)
  }
  const salvarEdicao = () => {
    if (contatoEditandoIndex !== null) {
      const novoContato = {
        nome: nomeEdit,
        telefone: telefoneEdit,
        email: emailEdit
      }
      const novaLista = [...listaDeContatos]
      novaLista[contatoEditandoIndex] = novoContato
      localStorage.setItem('contatos', JSON.stringify(novaLista))
      setEstaEditandoCtt(false)
      window.location.reload()
    }
  }
  const cancelarEdicao = () => {
    setEstaEditandoCtt(false)
    setNomeEdit('')
    setTelefoneEdit('')
    setEmailEdit('')
  }

  return (
    <ListaEstilo>
      <div className="App">
        <BarraDePesquisa />
        {window.location.pathname === '/formulario' && <Formulario />}
        <br />
        {filtrarTarefas().map((contato, index) => (
          <ContatoDiv key={index}>
            {estaEditandoCtt && contatoEditandoIndex === index ? (
              <>
                <EditandoCttDiv>
                  <div className="dadosContato">
                    <input
                      onChange={(evento) => setNomeEdit(evento.target.value)}
                      type="text"
                      defaultValue={nomeEdit}
                    />
                    <input
                      onChange={(evento) =>
                        setTelefoneEdit(evento.target.value)
                      }
                      type="text"
                      defaultValue={telefoneEdit}
                    />
                    <input
                      onChange={(evento) => setEmailEdit(evento.target.value)}
                      type="text"
                      defaultValue={emailEdit}
                    />
                    <br />
                  </div>
                  <div>
                    <BotaoSalvar onClick={() => salvarEdicao()}>
                      Salvar
                    </BotaoSalvar>
                    <BotaoCancelar onClick={() => cancelarEdicao()}>
                      Cancelar
                    </BotaoCancelar>
                  </div>
                </EditandoCttDiv>
              </>
            ) : (
              <>
                <div className="dadosContato">
                  <h3>{contato.nome}</h3>
                  <label>Telefone </label>
                  {contato.telefone} <br />
                  <label>Email: </label>
                  {contato.email} <br />
                </div>
                <BotoesDiv>
                  <TresPontosButton onClick={() => exibirBotoesEdicao(index)}>
                    ...
                  </TresPontosButton>
                  <BotoesContato show={exibicaoEdit[index]}>
                    <BotaoHome onClick={() => removerContato(index)}>
                      Remover
                    </BotaoHome>
                    <BotaoHome onClick={() => editarContato(index)}>
                      Editar
                    </BotaoHome>
                  </BotoesContato>
                </BotoesDiv>
              </>
            )}
          </ContatoDiv>
        ))}

        <MaisDiv>
          <BotoesMais show={exibicaoMais}>
            <BotaoHome onClick={() => navigate('/formulario')}>
              Adicionar contato
            </BotaoHome>
            <BotaoHome onClick={limparContatos}>
              Limpar lista de contatos
            </BotaoHome>
          </BotoesMais>
          <PlusIcon onClick={() => exibirBotoesMais()}>+</PlusIcon>
        </MaisDiv>
      </div>
    </ListaEstilo>
  )
}
export default Home
