import React, {useState} from 'react'

function inputField(props) {
  const [inputText, setInputText] = useState(() => '') // first is the state second parameter is a function that changes the state

  const todoExecute = () => {
    if(inputText.trim() == ""){
      alert("Enter a Todo")
      return
    }
    props.addListProps(inputText)
    setInputText("")
  }

  return (
    <div className='inputContainer'>
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
      <button onClick={() => {
        todoExecute()
      }}>Add ToDo</button>
    </div>
  )
}

export default inputField