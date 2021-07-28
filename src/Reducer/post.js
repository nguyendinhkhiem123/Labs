import { createSlice } from "@reduxjs/toolkit";


const Post =  createSlice({
    name : 'post',
    initialState: {},
    reducers:{
        allPost : ( state , action )=>{
           
            return action.payload
        },
      
    }
})

const { actions  , reducer } = Post;

export const { allPost } = actions;

export default reducer;