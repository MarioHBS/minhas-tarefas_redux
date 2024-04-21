import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import TaskModel from '../../models/Task'
import * as enums from '../../utils/enums/tasks_enum'

const initialState: TaskModel[] = [
  new TaskModel(
    0,
    'Estudar TypesScript',
    'Ver a aula 3 da EBAC',
    enums.PriorityType.IMPORTANT,
    enums.StatusType.PENDING
  ),
  new TaskModel(
    1,
    'Pagar conta de Internet',
    'Baixar fatura no Email',
    enums.PriorityType.URGENT,
    enums.StatusType.CONCLUDED
  ),
  new TaskModel(
    2,
    'Ir para a academia',
    'Fazer treino B',
    enums.PriorityType.IMPORTANT,
    enums.StatusType.PENDING
  ),
  new TaskModel(
    3,
    'Estudar Redux',
    'Ver a aula 5 da EBAC',
    enums.PriorityType.IMPORTANT,
    enums.StatusType.CONCLUDED
  ),
  new TaskModel(
    4,
    'Ir para a academia',
    'Fazer treino A',
    enums.PriorityType.NORMAL,
    enums.StatusType.PENDING
  )
]

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id != action.payload)
    }
  }
})

export const { remove } = taskSlice.actions
export default taskSlice.reducer
