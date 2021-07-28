import { createSlice } from "@reduxjs/toolkit";


const Comment =  createSlice({
    name : 'user',
    initialState: {},
    reducers:{
        allComment : ( state , action )=>{
         
            return action.payload
        },
      
    }
})

const { actions  , reducer } = Comment;

export const { allComment } = actions;

export default reducer;