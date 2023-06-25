import React from 'react'
import SectionContainer from './Container/SectionContainer'
import TodoHeader from './Header/TodoHeader'
import TodoInput from './Input/Todoinput'
import TodoListArea from './List/TodoListArea'
import TodoListTools from './Tools/TodoListTools'
import TodoList from './List/TodoList'
import TodoProvider from './Hooks/TodoProvider'

import EverydayTodoHeader from './Header/EverydayTodoHeader'
import EverydayTodoInput from './Input/EverydayTodoInput'
import EverydayTodoListArea from './List/EverydayTodoListArea'
import EverydayTodoListTools from './Tools/EverydayTodoListTools'
import EverydayTodoList from './List/EverydayTodoList'

import './App.css'

const App = () => {
  return (
    <main className="App">
      <TodoProvider>
        <SectionContainer>
          <EverydayTodoHeader />
          <EverydayTodoInput />
          <EverydayTodoListArea>
            <EverydayTodoListTools />
            <hr className="dividerContainer" />
            <EverydayTodoList />
          </EverydayTodoListArea>
        </SectionContainer>

        <SectionContainer>
          <TodoHeader />
          <TodoInput />
          <TodoListArea>
            <TodoListTools />
            <hr className="dividerContainer" />
            <TodoList />
          </TodoListArea>
        </SectionContainer>
      </TodoProvider>
    </main>
  )
}

export default App
