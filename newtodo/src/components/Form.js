import React, { useState } from 'react'
import "./Form.css"


const Form = (props) => {

    const  [newItem,setNewItem] = useState({
        title:"",
        des:""
    })


    const handleChnage = (e) => {

        setNewItem((oldItem) => {
            return {...oldItem,[e.target.name]:e.target.value}
        })

    }
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        if(newItem.title === "" || newItem.des === ""){
            alert("Title and Task can not be empty")
            return;
        }
        props.newItem(newItem)
   }

  return (
    <>

    <form onSubmit={HandleSubmit} className="form">
    <h1 className='todo'>To Do</h1>

        <div className='formItem'>
        <label>Title</label>
        <input name="title" onChange={handleChnage}/>
        </div>

        <div className='formItem'>
        <label>Task</label>
        <input name='des' onChange={handleChnage}/>
        </div>

        <button className='submit' type='submit'>submit</button>
    </form>
    </>
  )
}

export default Form