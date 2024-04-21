import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import TaskModel from '../../models/Task'
import * as enums from '../../utils/enums/tasks_enum'

type TaskState = {
  items: TaskModel[]
}

const initialState: TaskState = {
  items: [
    {
      id: 0,
      title: 'Estudar TypesScript',
      description: 'Ver a aula 3 da EBAC',
      priority: enums.PriorityType.IMPORTANT,
      status: enums.StatusType.PENDING
    },
    {
      id: 1,
      title: 'Pagar conta de Internet',
      description: 'Baixar fatura no Email',
      priority: enums.PriorityType.URGENT,
      status: enums.StatusType.CONCLUDED
    },
    {
      id: 2,
      title: 'Ir para a academia',
      description: 'Fazer treino B',
      priority: enums.PriorityType.IMPORTANT,
      status: enums.StatusType.PENDING
    },
    {
      id: 3,
      title: 'Estudar Redux',
      description: 'Ver a aula 5 da EBAC',
      priority: enums.PriorityType.IMPORTANT,
      status: enums.StatusType.CONCLUDED
    },
    {
      id: 4,
      title: 'Ir para a academia',
      description: 'Fazer treino A',
      priority: enums.PriorityType.NORMAL,
      status: enums.StatusType.PENDING
    }
  ]
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id != action.payload)
    },
    edit: (state, action: PayloadAction<TaskModel>) => {
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      )

      if (index > -1) {
        state.items[index] = action.payload
      }
    }
  }
})

export const { edit, remove } = taskSlice.actions
export default taskSlice.reducer
