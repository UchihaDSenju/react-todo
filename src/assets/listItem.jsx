import React from 'react'


function listItem(props) {

  const strike = (e) => {
    console.log(e);
    e.target.classList.toggle("done");
  }
  return (
    <div className='todoListContainer'>
        <li className='todoItem'>
            <span onClick={strike}>{props.listItemProp}</span>
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