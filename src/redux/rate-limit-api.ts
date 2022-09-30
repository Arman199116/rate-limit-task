import { RootState } from "./index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const rateLimitApi = createApi({
    reducerPath : 'rateLimit',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:5000/',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token; //(getState() as RootState).auth.token

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            headers.set('Access-Control-Allow-Origin', `*`);
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints : (build) => ({
        getPage : build.query<string, void>({
            query : () => {
                
                return ({
                    url : '/',
                    method: "GET",
                })

            },
        }),
        getUsers : build.query<string, void>({
            query : () => {
                
                    return {
                        url : '/users',
                        method: "GET",
                    }
                    
            },
        }),
        getUser : build.query<string, string>({
            query : (id : string) => ({
                url : `/users/:id=${id}`,
                method: "GET",
            }),
        }),
        createUser : build.mutation<string, void>({
            query : () => ({
                url : `/users`,
                method: "POST",
                body : ''
            }),
        }),
        updateUser : build.mutation<string, string>({
            query : (id : string) => ({
                url : `/users/:id=${id}`,
                method: "PUT",
                body : ''
            }),
        }),
        deleteUser : build.mutation<string, string>({
            query : (id : string) => ({
                url : `/users/:id=${id}`,
                method: "DELETE",
            }),
        }),
        rateLimit : build.query<string, void>({
            query : () => ({
                url : `/rate-limits`,
                method: "GET",
            }),
        }),
    })
});

export const {useRateLimitQuery, useGetUsersQuery, useGetPageQuery, useGetUserQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = rateLimitApi;