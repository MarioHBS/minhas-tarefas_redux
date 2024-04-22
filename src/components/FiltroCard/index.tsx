import { useDispatch, useSelector } from 'react-redux'

import { setCriterion } from '../../redux/filters'
import * as enums from '../../utils/enums/tasks_enum'
import * as S from './styles'
import { RootReducer } from '../../redux/store'

export type FilterProps = {
  label: string
  criterion: 'prioridade' | 'status' | 'todas'
  value?: enums.PriorityType | enums.StatusType
}

const FiltroCard = ({ criterion: criteria, label, value }: FilterProps) => {
  const dispatch = useDispatch()
  const { filters, tasks } = useSelector((root: RootReducer) => root)

  const filter = () => dispatch(setCriterion({ criteria, value }))
  const countTasks = () => {
    if (criteria === 'todas') return tasks.items.length
    if (criteria === 'prioridade') {
      return tasks.items.filter((item) => item.priority === value).length
    }
    if (criteria === 'status') {
      return tasks.items.filter((item) => item.status === value).length
    }
  }
  const isActive = () =>
    filters.criteria === criteria && filters.value === value

  const counter = countTasks()

  return (
    <S.Card ativo={isActive()} onClick={filter}>
      <S.CounterStyle>{counter}</S.CounterStyle>
      <S.LabelStyle>{label}</S.LabelStyle>
    </S.Card>
  )
}

export default FiltroCard
