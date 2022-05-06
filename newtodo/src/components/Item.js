import React from 'react'
import "./Item.css"

const Item = (props) => {
  return (
    <div className='item'>

        {/* <div className='element'> */}
        <span className='title'>Title:  {props.title}</span>
        {/* </div> */}

        <span className='task'>Task:  {props.des}</span>
        
        <div>
        <button className='delete' onClick={() => props.delete(props.id)}>Delete</button>
        <button className='edit' onClick={() => props.edit(props)}>Edit</button>
        </div>
    </div>
  )
}

export default Item