import { configureStore } from '@reduxjs/toolkit'
import criarCttReducer from './reducers/CriarCtt'
import carregarCttReducer from './reducers/CarregarCtt'
import buscarCttReducer from './reducers/BuscarCtt'

export const store = configureStore({
  reducer: {
    criar: criarCttReducer,
    carregar: carregarCttReducer,
    buscar: buscarCttReducer
  }
})
export type RootReducer = ReturnType<typeof store.getState>
