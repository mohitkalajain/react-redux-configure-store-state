import { configureStore } from "@reduxjs/toolkit";
const initialState={
    name:"Mohit Kala",
    designation:"Software Developer",
    country:"India",
    bio:"Having 4+ years of experience in Software industry"
}

export const store=configureStore({
    reducer:(state)=>{
        return state
    },
    preloadedState:initialState
})
