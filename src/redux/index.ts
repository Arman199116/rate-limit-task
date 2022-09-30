import { configureStore } from "@reduxjs/toolkit";

import { rateLimitApi } from "./rate-limit-api";
import { rateLimitReducer } from "./rate-limit-slice";


export const store = configureStore({

    reducer : {
        [rateLimitApi.reducerPath] : rateLimitApi.reducer,
        auth : rateLimitReducer,
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(rateLimitApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;