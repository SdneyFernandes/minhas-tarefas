import { configureStore } from '@reduxjs/toolkit'

import tarefaReducer from './reducers/tarefa'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefa: tarefaReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
