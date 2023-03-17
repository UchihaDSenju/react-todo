import React, { useState } from 'react'
import Input from './inputField'
import List from './listItem'

function todoList() {

    const [todoList, setTodoList] = useState([]);

    const addList = (inputValue) => {
        setTodoList([...todoList, inputValue]);
        
    }

    const deleteListItem = (index) => {
      let newList = [...todoList];
      newList.splice(index, 1);
      setTodoList([...newList]);
    }
  return (
    <>
        <div className='container'>
          <Input addListProps = {addList} />
          {todoList.map((listItem, index) => { // map syntax = arr.map(function(current, index, toCopyarr))
            return(
              <List listItemProp = {listItem} index={index} key = {index} deleteTodo = {deleteListItem}/>
            )
          })}
        </div>
    </>
  )
}

export default todoList