import { createSlice } from '@reduxjs/toolkit';

export const lostObjectsSlice = createSlice({
   name: 'lostObjects',
   initialState: {
       lostObjects: {},
       isObjectLost: 'checking',
       error: undefined,
   },
   reducers: {
        onScaanLostQr: (state, {payload}) => {
              state.isObjectLost = 'lost';
              state.lostObjects = payload;
              state.error = undefined;
         },
        onScaanRetrieveQr: (state, {payload}) => {
              state.isObjectLost = 'recollection';
              state.lostObjects = payload;
              state.error = undefined;
         },
         onCancelScaan: (state) => {
              state.isObjectLost = 'checking';
              state.lostObjects = {};
              state.error = undefined;
         }
   }
});


// Action creators are generated for each case reducer function
export const { 
    onScaanLostQr, 
    onScaanRetrieveQr,
    onCancelScaan
 } = lostObjectsSlice.actions;