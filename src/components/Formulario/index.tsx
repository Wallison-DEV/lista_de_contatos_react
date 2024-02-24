import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

import { criarCtt } from '../../store/reducers/CriarCtt'

import { InputDiv, BotaoForm, Form, FormInput } from './styles'
import { ListaEstilo, Titulo } from '../../styles'

function Formulario() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const inputNome = useRef<HTMLInputElement>(null)
  const inputTelefone = useRef<HTMLInputElement>(null)
  const inputEmail = useRef<HTMLInputElement>(null)

  const handleAdicionarContato = () => {
    const nome = inputNome.current?.value || ''
    const telefone = inputTelefone.current?.value || ''
    const email = inputEmail.current?.value || ''

    if (!nome || !telefone || !email) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    dispatch(criarCtt({ nome, telefone, email }))
    if (inputNome.current) inputNome.current.value = ''
    if (inputTelefone.current) inputTelefone.current.value = ''
    if (inputEmail.current) inputEmail.current.value = ''
  }
  function irParaContatos() {
    navigate('../')
    window.location.reload()
  }

  return (
    <ListaEstilo>
      <Titulo>Contatos</Titulo>
      <Form>
        <InputDiv>
          <label onClick={() => inputNome.current?.focus()}>
            <img src="./person.png" alt="" />
          </label>
          <FormInput ref={inputNome} placeholder="Nome" type="text" />
        </InputDiv>
        <InputDiv>
          <label onClick={() => inputTelefone.current?.focus()}>
            <img src="./phone.png" alt="" />
          </label>
          <FormInput ref={inputTelefone} placeholder="Telefone" type="text" />
        </InputDiv>
        <InputDiv>
          <label onClick={() => inputEmail.current?.focus()}>
            <img src="./email.png" alt="" />
          </label>
          <FormInput ref={inputEmail} placeholder="E-mail" type="text" />
        </InputDiv>
        <BotaoForm onClick={handleAdicionarContato}>
          Adicionar contato
        </BotaoForm>
        <BotaoForm onClick={() => irParaContatos()}>
          Ir para a lista de contatos
        </BotaoForm>
      </Form>
    </ListaEstilo>
  )
}

export default Formulario
