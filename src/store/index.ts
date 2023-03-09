import { configureStore } from '@reduxjs/toolkit'
import { invoicesApi } from './invoices/invoices.api'

export const store = configureStore({
  reducer: {
    [invoicesApi.reducerPath]: invoicesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(invoicesApi.middleware),
})
