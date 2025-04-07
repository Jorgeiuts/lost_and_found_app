import { createSlice } from '@reduxjs/toolkit';

export const lostObjectsSlice = createSlice({
   name: 'lostObjects',
   initialState: {
       qrs: []
   },
   reducers: {
       onGenerateQrs: ( state, {payload} ) => {
            state.qrs.push( payload )
       }
   }
});


// Action creators are generated for each case reducer function
export const { 
    onGenerateQrs
 } = lostObjectsSlice.actions;