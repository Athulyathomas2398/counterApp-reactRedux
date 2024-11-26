import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    //createSlice( )returns actions and reducer fn actions are incremnt dcrmnt reset
    name:'counter',
    initialState:{
        count:0,
        //data:"" we can create another state like this(count state) or we can create another createSlice too

    },
    reducers:{
        //actions defined here
        //name,initialState and reducers(object) are predefined we cant change
        //increment is an action we can provide our own name
        //we can access initialState using state
        increment:(state)=>{
            state.count++
            //incerement count

        },
        decrement:(state)=>{
            state.count--
            //decrement count
        },
        reset:(state)=>{
            return{...state,count:0}
        },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload
        }
    }
})
export const {increment,decrement,reset,incrementByAmount}=counterSlice.actions
export default counterSlice.reducer