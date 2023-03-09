import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiUrl } from '../../config/config'
import { IInvoice } from '../../models/models'

export const invoicesApi = createApi({
  reducerPath: 'invoice/api',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  endpoints: build => ({
    readInvoices: build.query<IInvoice[], any>({
      query: () => ({
        url: `/get`,
      }),
    }),
  }),
})

export const { useReadInvoicesQuery } = invoicesApi
