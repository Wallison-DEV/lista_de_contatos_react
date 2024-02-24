/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Contato {
  nome: string
  telefone: string
  email: string
}

const initialState: Contato[] = JSON.parse(
  localStorage.getItem('contatos') || '[]'
)

const criarCttSlice = createSlice({
  name: 'CriarCtt',
  initialState,
  reducers: {
    criarCtt: (state, action: PayloadAction<Contato>) => {
      const novoContato = action.payload

      if (
        !novoContato ||
        novoContato.nome === '' ||
        novoContato.telefone === '' ||
        novoContato.email === ''
      ) {
        alert('Preencha todos os campos do contato!')
        return
      }

      const duplicado = state.find(
        (ct) =>
          ct.nome.trim().toLowerCase() ===
          novoContato.nome.trim().toLowerCase() &&
          ct.telefone.trim() === novoContato.telefone.trim() &&
          ct.email.trim().toLowerCase() ===
          novoContato.email.trim().toLowerCase()
      )

      if (duplicado) {
        alert('Contato já existe!')
        return
      }

      state.push(novoContato)
      localStorage.setItem('contatos', JSON.stringify(state))
    }
  }
})

export const { criarCtt } = criarCttSlice.actions
export default criarCttSlice.reducer
