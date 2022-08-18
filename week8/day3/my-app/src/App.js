import { useState } from 'react'
import TodosPage from "./components/TodosPage"

function App(){
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all")
  const [globalID, setGlobalID] = useState(3000)
  
  const toggleTodo = (id)=>{
    setTodos(todos=>
      todos.map(todo=>
        todo.id===id ? {...todo, completed: !todo.completed} : todo
      )
    )
  }

  const deleteTodo = (id)=>{
    setTodos(todos=>todos.filter(todo=>todo.id!==id))
  }

  const addTodo = (title)=>{
    setTodos(todos=>[{title,id:globalID},...todos])
    setGlobalID(globalID+1)
  }
  return (
    <div>
      <TodosPage props={}/>
    </div>
  )
}

export default App
