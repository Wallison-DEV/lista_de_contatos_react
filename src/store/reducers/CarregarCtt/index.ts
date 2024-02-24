import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const contatosLocalStorage = localStorage.getItem('contatos')
let initialState = []

if (contatosLocalStorage) {
  initialState = JSON.parse(contatosLocalStorage)
}

const CarregarCttSlice = createSlice({
  name: 'carregaCtt',
  initialState,
  reducers: {
    carregador: (state, action: PayloadAction<unknown[]>) => {
      state.push(...action.payload)
    }
  }
})

export const { carregador } = CarregarCttSlice.actions
export default CarregarCttSlice.reducer
