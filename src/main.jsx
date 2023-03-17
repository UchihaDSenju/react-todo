import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Input from './assets/inputField'
import ToDo from './assets/todoList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      <ToDo />
    </div>
  </React.StrictMode>
)
