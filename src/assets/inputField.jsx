import React, {useState} from 'react'
import toastr from 'toastr'


function inputField(props) {
  const [inputText, setInputText] = useState(() => '') // first is the state second parameter is a function that changes the state

  const todoExecute = () => {
    if(inputText.trim() == ""){
      toastr["warning"]("Please Enter a Todo")
      return
    }
    props.addListProps(inputText)
    toastr["success"]("To-Do Added Successfully")
    setInputText("")
  }

  return (
    <div className='inputContainer'>
      <div id='input'>
        <input 
        autoFocus
        type="text" 
        placeholder='Enter a ToDo'
        value={inputText}
        onChange={e => {
          console.log(e);
          setInputText(e.target.value) //Stores in input text
        }}
        onKeyUp={(e) => {
          if(e.key == "Enter"){
            todoExecute()
          }
        }}></input>
        <button className='addBtn' onClick={() => {
          todoExecute()
        }}>Add ToDo</button>
      </div>
      <button className='clearBtn' onClick={() => {
        localStorage.clear();
        toastr["info"]("To-Do Cleared Successfully")
        setTimeout(() => window.location.reload(), 1000);
      }}>Clear all</button>
    </div>
  )
}

export default inputField