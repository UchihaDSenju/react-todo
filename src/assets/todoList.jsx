import React, { useState } from 'react'
import Input from './inputField'

function todoList() {

    const [todoList, setTodoList] = useState([]);

    const addList = (inputValue) => {
        setTodoList([...todoList, inputValue]);
    }

  return (
    <>
        <Input addListProps = {addList} />
    </>
  )
}

export default todoList