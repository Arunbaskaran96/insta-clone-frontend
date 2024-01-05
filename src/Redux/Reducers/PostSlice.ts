import { createSlice } from "@reduxjs/toolkit";

interface postSliceProps {
    post:any
}

const initialState:postSliceProps= {
    post:{}
}

const Post = createSlice({
    name:"post",
    initialState,
    reducers:{
        addPost:(state,action)=>{
            state.post=action.payload
        },
        addComment:(state,action)=>{
            state.post.comments=[...state.post.comments,action.payload]
        }
    }
})

export const {addComment,addPost} = Post.actions
export default Post.reducer