import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tasks_enum'

type FilterState = {
  query?: string
  criteria: 'prioridade' | 'status' | 'todas'
  value?: enums.PriorityType | enums.StatusType
}

const initialState: FilterState = {
  query: '',
  criteria: 'todas'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setCriterion: (state, action: PayloadAction<FilterState>) => {
      state.criteria = action.payload.criteria
      state.value = action.payload.value
    }
  }
})

export const { setCriterion, setQuery } = filterSlice.actions
export default filterSlice.reducer
