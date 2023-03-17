import React, {useState} from 'react'

function inputField(props) {
  const [inputText, setInputText] = useState(() => '') // first is the state second parameter is a function that changes the state
  return (
    <div className='inputContainer'>
      <input 
      type="text" 
      placeholder='Enter a ToDo'
      value={inputText}
      onChange={e => {
        console.log(e);
        setInputText(e.target.value) //Stores in input text
      }}></input>
      <button onClick={() => {
        console.log(inputText);
        props.addListProps(inputText);
        setInputText("")
      }}>Add ToDo</button>
      <div>{inputText}</div>
    </div>
  )
}

export default inputField