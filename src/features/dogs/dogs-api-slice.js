

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const DOGS_API_KEY = 'live_60KXEPWM9FH1xxOZW9UcbweEd1z5G7KAz4wrGBU1Q3ou34dYNa15Omeh5eOBZO4L';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl:'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key',DOGS_API_KEY)

            return headers;
        },
    }),

    endpoints(builder) {
        return  {
        fetchBreeds:builder.query({
            query(limit = 10) {
                return `/breeds?limit=${limit}`;
            },
           }),
          };

    },


});


export const { useFetchBreedsQuery } = apiSlice;