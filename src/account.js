import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Account() {
    

    let data  = useSelector((state)=>{
        return state
    })

    console.log(data)
  return (
    <>
        <div className='container'>
        <h1 className='text-primary'>Account Information</h1>
        <table className='table table-bordered w-100'>
            <thead>
                <tr>
                    <th>Balance</th>
                    <th>User Name</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.account.balance}</td>
                    <td>{data.account.name}</td>
                    <td>{data.account.mobile}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className='container'>
        <h1 className='text-primary'>Account Transactions</h1>
        <table className='table table-bordered w-100'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Credit/Debit</th>
                </tr>
            </thead>
            <tbody>
                {
                
                data.tran.map((e , index)=>(
                    <tr key={e.id}>
                    <td >{e.id}</td>
                    <td>{e.date.toString()}</td>
                    <td className={ e.colors ? 'green' : 'red'}>{e.amount}</td>
                    <td>{e.type}</td>
                </tr>

                ))
                }
                
            </tbody>
        </table>
    </div>
    </>

  )
}

export default Account