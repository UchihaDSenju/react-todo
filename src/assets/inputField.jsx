import React from 'react'

function inputField() {
  return (
    <div className='inputContainer'>
      <input type="text" placeholder='Enter a ToDo'></input>
      <button>Add ToDo</button>
    </div>
  )
}

export default inputField