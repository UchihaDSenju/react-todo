import React from 'react'


function listItem(props) {
  return (
    <div className='todoListContainer'>
        <li className='todoItem'>
            <span>{props.listItemProp}</span>
            <i 
            className='fa-solid fa-trash-can'
            onClick={() => {
                props.deleteTodo(props.index)
            }}></i>
        </li>
    </div>
  )
}

export default listItem