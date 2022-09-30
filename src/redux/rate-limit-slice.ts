import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LimitState {
    token : string;
    limit : any;
}


const initialState : LimitState = {
    token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjoxLCJmaXJzdE5hbWUiOiJKb2huI',
    limit : {"/users (GET)":"56 per minute","/users/:id (GET)":"35 per minute","/users (POST)":"23 per minute","/users/:id (PUT)":"11 per minute","/users/:id (DELETE)":"12 per minute"},
}


export const rateLimitSlice = createSlice({
    name : 'LimitState',

    initialState,

    reducers : {
        addLimitRate(state, action : PayloadAction<any>) {
            state.limit = action.payload;
            localStorage.setItem('limit', JSON.stringify(state.limit));

        }
    }
})

export const rateLimitActions = rateLimitSlice.actions;
export const rateLimitReducer = rateLimitSlice.reducer;