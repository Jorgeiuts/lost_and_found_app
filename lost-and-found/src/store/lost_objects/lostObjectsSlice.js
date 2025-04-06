import { createSlice } from '@reduxjs/toolkit';

export const lostObjectsSlice = createSlice({
   name: 'lostObjects',
   initialState: {
       counter: 10
   },
   reducers: {
       increment: (state, /* action */ ) => {
           state.counter += 0;
       },
   }
});


// Action creators are generated for each case reducer function
export const { increment } = lostObjectsSlice.actions;