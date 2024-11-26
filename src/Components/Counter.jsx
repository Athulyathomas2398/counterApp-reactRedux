import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {increment,decrement,reset,incrementByAmount} from '../Redux/counterSlice'
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';


function Counter() {
  const [amount,setAmount]=useState(0)
  const dispatch=useDispatch()
  const {count}= useSelector((state)=>state.counterReducer)


  const handleIncrementByAmount=()=>{
    if(amount){
      dispatch(incrementByAmount(parseInt(amount)))
      //also we can use Number(amount)
      

    }
    else{
      alert("Please enter the amount")
    }
  }
  return (
    <div className='container border border-2 border-light text-center mt-5' style={{width:"600px",height:"300px"}}>
        <h1 className='text-light' >{count}</h1>
        <div className='button d-flex align-items-center justify-content-around mt-5'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-info'>INCREMENT</button>
        </div>
        <div className='text-light mt-5 d-flex justify-content-between' >
            <input onChange={(e)=>setAmount(e.target.value)} style={{width:"70%",height:"50px"}} className='form-control' type="text" placeholder='Incremented counter amount'/>
        {/* <FloatingLabel controlId="input" label="">
        <Form.Control type="text" placeholder="text" />
      </FloatingLabel> */}
      <button onClick={handleIncrementByAmount} style={{height:"50px",fontSize:"15px"}} className='btn btn-primary '>Increment By Amount</button>
        </div>




    </div>
  )
}

export default Counter