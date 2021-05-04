import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () =>{
const [text,setText] = useState('');
const [amount,setAmount]= useState();

const {addTransaction} = useContext(GlobalContext);

const onSubmit=(e)=>{
e.preventDefault();

const newTransaction={
id:Math.floor(Math.random()*10000000),
text,
amount:+amount
}
addTransaction(newTransaction)
}

    return(
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor='text'>Text</label> <br/>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text ...' required/>    
            </div>    
            <div className='form-control'>
                <label htmlFor='amount'>Amount <br/>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount ...' required/>
                </label>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>  
        </>
    )
}
