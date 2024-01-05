
import { createSlice } from "@reduxjs/toolkit";
interface initialProps {
    user:Record<any,any>
}
const initialState:initialProps={
    user:{}
}
export const User=createSlice({
    name:"User",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload.others
        },
        follow:(state,action)=>{
            state.user.followings=[...state.user.followings,action.payload]
        },
        unfollow:(state,action)=>{
            state.user.followings=state.user.followings.filter((item:any)=>item!=action.payload)
        }

    }
})

export const {addUser,follow,unfollow} =User.actions

export default User.reducer