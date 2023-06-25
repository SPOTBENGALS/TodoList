import { saveTodos } from './todoStorage'

export type TodoType = {
  id: number
  text: string
  isChecked: boolean
}

export type TodoStateType = {
  todos: TodoType[]
}

export type TodoActionType =
  | {
      type: 'create'
      payload: {
        text: string
      }
    }
  | {
      type: 'delete'
      payload: {
        id: number
      }
    }
  | {
      type: 'check'
      payload: {
        id: number
      }
    }
  | {
      type: 'allCheck'
      payload: {
        isCheckedAll: boolean
      }
    }
  | {
      type: 'allDelete'
    }

export function todoReducer(state: TodoStateType, action: TodoActionType) {
  switch (action.type) {
    case 'create': {
      const newTodos = state.todos.concat({
        id: Date.now(),
        text: action.payload.text,
        isChecked: false
      })
      saveTodos(newTodos)
      return {
        todos: newTodos
      }
    }
    case 'delete': {
      const newTodos = state.todos.filter((todo) => {
        return todo.id !== action.payload.id
      })
      saveTodos(newTodos)
      return {
        todos: newTodos
      }
    }
    case 'check': {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isChecked: !todo.isChecked
          }
        }
        return todo
      })
      saveTodos(newTodos)
      return {
        todos: newTodos
      }
    }

    case 'allCheck': {
      const newTodos = state.todos.map((todo) => {
        return {
          ...todo,
          isChecked: !action.payload.isCheckedAll
        }
      })
      saveTodos(newTodos)
      return {
        todos: newTodos
      }
    }

    case 'allDelete': {
      saveTodos([])
      return {
        todos: []
      }
    }
  }
}
