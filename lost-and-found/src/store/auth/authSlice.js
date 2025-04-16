import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
        user: {},
        isAuthenticated: 'checking',
        error: undefined,
   },
   reducers: {
       onChecking: (state) => {
              state.isAuthenticated = 'checking';
              state.user = {};
              state.error = undefined;
         },
       onLogin: (state, {payload}) => {
              state.isAuthenticated = 'authenticated';
              state.user = payload;
              state.error = undefined;
         },
       onLogout: (state, {payload}) => {
              state.isAuthenticated = 'not-authenticated';
              state.user = {};
              state.error = payload;
         },
       onClearError: (state) => {
              state.error = undefined;
         },
   }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, onClearError } = authSlice.actions;