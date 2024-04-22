import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../redux/store'
import { setQuery } from '../../redux/filters'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { query } = useSelector((root: RootReducer) => root.filters)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={query}
          onChange={(evt) => dispatch(setQuery(evt.target.value))}
        />
        <S.Filtros>
          <FiltroCard counter={1} label="pendentes" />
          <FiltroCard counter={1} label="concluídas" />
          <FiltroCard counter={1} label="urgentes" />
          <FiltroCard counter={5} label="importantes" />
          <FiltroCard counter={1} label="normal" ativo />
          <FiltroCard counter={10} label="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
