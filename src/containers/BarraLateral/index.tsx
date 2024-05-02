import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { setQuery } from '../../redux/filters'
import { RootReducer } from '../../redux/store'
import { PriorityType, StatusType } from '../../utils/enums/tasks_enum'

import { ButtonTask, Campo } from '../../styles/global_style'
import * as S from './styles'

type Props = {
  showFilters: boolean
}

const BarraLateral = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { query } = useSelector((root: RootReducer) => root.filters)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
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
          </>
        ) : (
          <ButtonTask type="button" onClick={() => navigate('/')}>
            Voltar à lista de Tarefas
          </ButtonTask>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
