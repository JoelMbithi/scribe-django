import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoForm from './components/TodoForm'
import Table from './components/Table'

const App = () => {

  const [todos,setTodos] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8002/api/todo/')
      setTodos(res.data)
      console.log(res.data  )
      setIsLoading(false)
      
      
    } catch (error) {
      console.log("Error fetching data:", error)
    }
  }


  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className='bg-indigo-100 min-h-screen px-8 '>
     <nav className='pt-8'>
      <h1 className='text-5xl text-center font-bold'> Todo List</h1>
     </nav>
     <TodoForm/>
     <Table 
     todos = {todos}
     setTodos = {setTodos}
     isLoading = {isLoading}
     />
    </div>
  )
}

export default App
