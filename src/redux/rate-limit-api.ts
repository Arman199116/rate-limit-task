import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const rateLimitApi = createApi({
    reducerPath : 'rateLimit',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3000/',
        prepareHeaders: (headers, { getState }) => {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjoxLCJmaXJzdE5hbWUiOiJKb2huI'; //(getState() as RootState).auth.token
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            headers.set('Access-Control-Allow-Origin', `*`);
            headers.set('Content-Type', 'text/html');
            return headers;
        },
    }),
    endpoints : (build) => ({
        getUser : build.query<string, string>({
            query : (str : string) => ({
                url : '/users',
                method: "GET",
            }),
            extraOptions: { maxRetries: 100 },
        })
    })
});

export const { useGetUserQuery } = rateLimitApi;