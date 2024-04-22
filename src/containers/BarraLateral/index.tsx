import FiltroCard from '../../components/FiltroCard'

import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../../redux/filters'
import { RootReducer } from '../../redux/store'
import { Campo } from '../../styles/global_style'
import { PriorityType, StatusType } from '../../utils/enums/tasks_enum'
import * as S from './styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { query } = useSelector((root: RootReducer) => root.filters)

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={query}
          onChange={(evt) => dispatch(setQuery(evt.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            criterion="status"
            label="pendentes"
            value={StatusType.PENDING}
          />
          <FiltroCard
            criterion="status"
            label="concluídas"
            value={StatusType.CONCLUDED}
          />
          <FiltroCard
            criterion="prioridade"
            label="urgentes"
            value={PriorityType.URGENT}
          />
          <FiltroCard
            criterion="prioridade"
            label="importantes"
            value={PriorityType.IMPORTANT}
          />
          <FiltroCard
            criterion="prioridade"
            label="normal"
            value={PriorityType.NORMAL}
          />
          <FiltroCard criterion="todas" label="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
