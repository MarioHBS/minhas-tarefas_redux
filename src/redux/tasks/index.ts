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
    },
    register: (state, action: PayloadAction<Omit<TaskModel, 'id'>>) => {
      const tarefaExists = state.items.find(
        (item) =>
          item.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (tarefaExists) {
        alert('Tarefa já existe')
      } else {
        const lastItem = state.items[state.items.length - 1]
        const newTask = {
          ...action.payload,
          id: lastItem ? lastItem.id + 1 : 1
        }
        state.items = [...state.items, newTask]
      }
    },
    setChecked: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      )

      if (index > -1) {
        state.items[index].status = action.payload.finished
          ? enums.StatusType.CONCLUDED
          : enums.StatusType.PENDING
      }
    }
  }
})

export const { edit, register, remove, setChecked } = taskSlice.actions
export default taskSlice.reducer
