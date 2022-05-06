import React from 'react'
import Item from './Item'


const List = (props) => {
  return (
    <>
    
     {props.data.map((e) => 

        <Item 
        key={e.id}
        id={e.id}
        title={e.title}
        des={e.des}
        delete={props.delete}
        edit={props.edit}
        />
       
     )}

    </>
  )
}

export default List