import { createSlice } from '@reduxjs/toolkit'
import { socialAction } from './socialAuthAction';

const initialState = {
    loading:  false,
    error: false,
    success: false,
    message: "",
    token: ""
};


export const socialAuthSlice = createSlice({
    name: 'social',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(socialAction.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(socialAction.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload.status == false) {
                state.success = false;
                state.error = true;
                state.message = action.payload.message
            }
            else {
                state.success = true
                state.token = action.payload.authorisation.token
            }

        })
        builder.addCase(socialAction.rejected, (state, action) => {
            state.loading = false
            state.error = true;
            state.success = false
            state.message = action.payload;
        })
    },
})


export default socialAuthSlice.reducer;