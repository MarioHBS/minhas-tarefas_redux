import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tasks_enum'

type FilterState = {
  query: string
  critery: 'prioridade' | 'status' | 'todas'
  valor?: enums.PriorityType | enums.StatusType
}

const initialState: FilterState = {
  query: '',
  critery: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    }
  }
})

export const { setQuery } = filterSlice.actions
export default filterSlice.reducer
