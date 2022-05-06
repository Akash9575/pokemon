import React from 'react'
import "./Form.css"

const Edit = (props) => {



  return (

    <form onSubmit={props.HandleEditSubmit} className="form">
        <h1 className='todo'>Edit</h1>

        <div className='formItem'>
        <label>Title</label>
        <input name="title" value={props.current.title} onChange={props.handleEditChnage}/>
        </div>
        
        <div className='formItem'>
        <label>Task</label>
        <input name='des' value={props.current.des} onChange={props.handleEditChnage}/>
        </div>

        <div>
        <button  className='submit' type='submit'>Update</button>
        <button  className='cancle' type='submit' onClick={props.cancleEdit}>cancle</button>
        </div>
    </form>
  )
}

export default Edit