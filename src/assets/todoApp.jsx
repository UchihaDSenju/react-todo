import React, { useState } from 'react'
import Input from './inputField'
import List from './listItem'

function todoList() {

    const [todoList, setTodoList] = useState(() => {
      if(localStorage.getItem('todo')){
        return localStorage.getItem('todo').split(',');
      }
      return [];
    });

    const addList = (inputValue) => {
        setTodoList([...todoList, inputValue]);
        console.log(todoList, inputValue);
        localStorage.setItem('todo', [...todoList, inputValue])
    }

    const deleteListItem = (index) => {
      let newList = [...todoList];
      newList.splice(index, 1);
      setTodoList([...newList]);
      localStorage.setItem('todo', newList);
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