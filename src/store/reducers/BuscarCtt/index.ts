import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BuscaState = {
  termo: string
}

const initialState: BuscaState = {
  termo: ''
}
const BuscaSlice = createSlice({
  name: 'busca',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = BuscaSlice.actions
export default BuscaSlice.reducer
