import { configureStore } from '@reduxjs/toolkit'

import taskReducer from './tasks'

const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
