import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Reducers/UserSlice";
import PostSlice from "./Reducers/PostSlice";
import MessageSlice from "./Reducers/MessageSlice";


export default configureStore({
    reducer:{
        User:UserSlice,
        Post:PostSlice,
        Message:MessageSlice
    }
})