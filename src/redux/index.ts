import { configureStore } from "@reduxjs/toolkit";

import { rateLimitApi } from "./rate-limit-api";


export const store = configureStore({

    reducer : {
        [rateLimitApi.reducerPath] : rateLimitApi.reducer,
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(rateLimitApi.middleware)
})