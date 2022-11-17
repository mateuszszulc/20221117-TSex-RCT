import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const auctionsApi = createApi({
	reducerPath: 'auctionsApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_API }),
	endpoints: (builder) => ({
		getAllAuctions: builder.query({
			query: () => `/auctions`,
		}),
	}),
})

export const { useGetAllAuctionsQuery } = auctionsApi
