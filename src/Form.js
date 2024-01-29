import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Deposit} from './action'

function Form() {
    let[id,setid] = useState(1)
    let dispatch =  useDispatch();
    let [amount, setAmounnt] = useState("")
    let [names , setName] = useState("")
  return (
    <div className='container' >
        <h2>Form</h2>
        <div className='row'>
            <div className='col-4 rows'>
                <input className='form-control' type='number' value={amount} placeholder='Enter Amount'onChange={(e)=>{
                     let val  = e.target.value
                     setAmounnt(val)
                }}/>
                <button className='btn btn-danger m-1' onClick={()=>{
                    setid(id+1)
                    dispatch({type:"withdraw" , payload:amount})
                    dispatch({type:"MINUS" , payload:{id: id ,colors:false ,amount:amount , type:"debit",date: new Date()}})
                    setAmounnt("")
                }}>withdraw</button>
                <button className='btn btn-primary m-1' onClick={()=>{
                    setid(id+1)
                    dispatch(Deposit(amount))
                    dispatch({type:"ADD" , payload:{id: id ,colors:true ,amount:amount , type:"credit",date: new Date()}})
                    setAmounnt("")
                }}>Deposit</button>
            </div>
            <div className='col-4 rows'>
                <input className='form-control m-3' type='text' value={names}placeholder='enter the name' onChange={(ei)=>{
                    let nam = ei.target.value
                    setName(nam)
                }}></input>
                <button className='btn btn-primary m-1' onClick={()=>{
                    dispatch({type:"nameUpdate" , payload:names})
                    setName("")
                }}>Update Name</button>

            </div>
            <div>
                <button className='btn btn-primary' onClick={()=>{
                    dispatch({type:"reset"})
                }}> Reset</button>
            </div>

        </div>

    </div>
  )
}

export default Form