import { createSlice } from "@reduxjs/toolkit";


const User =  createSlice({
    name : 'user',
    initialState: {},
    reducers:{
        allUser : ( state , action )=>{
            console.log(action.payload);
            return  action.payload
        },
      
    }
})

const { actions  , reducer } = User;

export const { allUser } = actions;

export default reducer;