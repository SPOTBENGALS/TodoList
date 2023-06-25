import { saveEverydayTodos } from './todoStorage'

export type EverydayTodoType = {
  reset: number
  id: number
  text: string
  isChecked: boolean
}

export type EverydayStateType = {
  everydaytodos: EverydayTodoType[]
}

export type EverydayActionType =
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
      type: 'reset'
      payload: {
        reset: number
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

export function everydayReducer(
  state: EverydayStateType,
  action: EverydayActionType
) {
  let date = new Date()
  let utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000
  let KRdate = new Date(utc + 32400 * 1000)

  switch (action.type) {
    case 'create': {
      const newTodos = state.everydaytodos.concat({
        reset: KRdate.getDate(),
        id: Date.now(),
        text: action.payload.text,
        isChecked: false
      })
      saveEverydayTodos(newTodos)
      return {
        everydaytodos: newTodos
      }
    }
    case 'delete': {
      const newTodos = state.everydaytodos.filter((everydaytodo) => {
        return everydaytodo.id !== action.payload.id
      })
      saveEverydayTodos(newTodos)
      return {
        everydaytodos: newTodos
      }
    }
    case 'check': {
      const newTodos = state.everydaytodos.map((everydaytodo) => {
        if (everydaytodo.id === action.payload.id) {
          return {
            ...everydaytodo,
            isChecked: !everydaytodo.isChecked
          }
        }
        return everydaytodo
      })
      saveEverydayTodos(newTodos)
      return {
        everydaytodos: newTodos
      }
    }

    case 'reset': {
      const newTodos = state.everydaytodos.map((everydaytodo) => {
        if (KRdate.getDate() !== action.payload.reset) {
          return {
            ...everydaytodo,
            reset: KRdate.getDate(),
            isChecked: false
          }
        }
        return everydaytodo
      })
      saveEverydayTodos(newTodos)
      return {
        everydaytodos: newTodos
      }
    }

    case 'allCheck': {
      const newTodos = state.everydaytodos.map((everydaytodo) => {
        return {
          ...everydaytodo,
          isChecked: !action.payload.isCheckedAll
        }
      })
      saveEverydayTodos(newTodos)
      return {
        everydaytodos: newTodos
      }
    }

    case 'allDelete': {
      saveEverydayTodos([])
      return {
        everydaytodos: []
      }
    }
  }
}
