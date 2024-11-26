import { configureStore } from "@reduxjs/toolkit"
import counterSlice from './counterSlice'


const counterStore=configureStore({
    reducer:{
        //key we can provide our own name 
        counterReducer:counterSlice
        

    }
})

export default counterStore