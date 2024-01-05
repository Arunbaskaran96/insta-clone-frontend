import { createSlice } from "@reduxjs/toolkit";

interface initialProps {
    data:any
}

const initialState:initialProps={
    data:[]
}

const Message=createSlice({
    name:"message",
    initialState,
    reducers:{
        addMsg:(state,action)=>{
            state.data=action.payload
        },
        addNewMsg:(state,action)=>{
            state.data=[...state.data,action.payload]
        }
    }
})

export const {addMsg,addNewMsg} = Message.actions
export default  Message.reducer