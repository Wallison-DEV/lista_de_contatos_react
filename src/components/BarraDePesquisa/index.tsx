import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { PesquisaInput } from './styles'
import { alterarTermo } from '../../store/reducers/BuscarCtt'

function BarraDePesquisa() {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.buscar)
  return (
    <PesquisaInput
      type="text"
      value={termo}
      onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
    />
  )
}

export default BarraDePesquisa
