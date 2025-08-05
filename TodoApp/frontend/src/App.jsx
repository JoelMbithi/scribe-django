import React from 'react'
import TodoForm from './components/TodoForm'
import Table from './components/Table'

const App = () => {
  return (
    <div className='bg-indigo-100 min-h-screen px-8 '>
     <nav className='pt-8'>
      <h1 className='text-5xl text-center font-bold'> Todo List</h1>
     </nav>
     <TodoForm/>
     <Table/>
    </div>
  )
}

export default App
