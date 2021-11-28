import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "60fd62c7e2msh4218ab51f24427ap1a2e28jsn8c4d08dea35c",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`/coins`),
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
    getCoin: builder.query({
      query: () => createRequest(`/crypto/:coinId`),
    }),
    getMarkets: builder.query({
      query: () => createRequest(`/markets`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
