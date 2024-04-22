import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './filters'
import taskReducer from './tasks'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filterReducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
