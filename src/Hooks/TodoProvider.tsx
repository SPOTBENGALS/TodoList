import {
  ReactNode,
  createContext,
  useReducer,
  Dispatch,
  useContext
} from 'react'
import { TodoStateType, TodoActionType, todoReducer } from './todoReducer'
import {
  TodoInputActionType,
  todoInputReducer,
  TodoInputStateType
} from './todoInputReducer'
import {
  TodoChangeInputStateType,
  TodoChangeInputActionType,
  todoChangeInputReducer
} from './todoChangeInputReducer'
import {
  EverydayStateType,
  EverydayActionType,
  everydayReducer
} from './everydayReducer'
import {
  EverydayInputActionType,
  everydayInputReducer,
  EverydayInputStateType
} from './everydayInputReducer'
import {
  EverydayChangeInputStateType,
  EverydayChangeInputActionType,
  everydayChangeInputReducer
} from './everydayChangeInputReducer'
import { loadTodos, loadEverydayTodos } from './todoStorage'

interface TodoProviderProps {
  children: ReactNode
}

/* Todo */
const TodoStateContext = createContext<TodoStateType | null>(null)
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(null)
const TodoInputContext = createContext<TodoInputStateType | null>(null)
const TodoInputDispatchContext =
  createContext<Dispatch<TodoInputActionType> | null>(null)
const TodoChangeInputContext = createContext<TodoChangeInputStateType | null>(
  null
)
const TodoChangeInputDispatchContext =
  createContext<Dispatch<TodoChangeInputActionType> | null>(null)

/* Everyday's Todo */
const EverydayStateContext = createContext<EverydayStateType | null>(null)
const EverydayDispatchContext =
  createContext<Dispatch<EverydayActionType> | null>(null)
const EverydayInputContext = createContext<EverydayInputStateType | null>(null)
const EverydayInputDispatchContext =
  createContext<Dispatch<EverydayInputActionType> | null>(null)
const EverydayChangeInputContext =
  createContext<EverydayChangeInputStateType | null>(null)
const EverydayChangeInputDispatchContext =
  createContext<Dispatch<EverydayChangeInputActionType> | null>(null)

export default function TodoProvider(props: TodoProviderProps) {
  /* Todo */
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: loadTodos()
  })
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    text: ''
  })
  const [changeInputState, changeInputDispatch] = useReducer(
    todoChangeInputReducer,
    {
      text: ''
    }
  )

  /* Everyday's Todo */
  const [everydayState, everydayDispatch] = useReducer(everydayReducer, {
    everydaytodos: loadEverydayTodos()
  })
  const [everydayInputState, everydayInputDispatch] = useReducer(
    everydayInputReducer,
    {
      text: ''
    }
  )
  const [everydayChangeInputState, everydayChangeInputDispatch] = useReducer(
    everydayChangeInputReducer,
    {
      text: ''
    }
  )

  return (
    <>
      <TodoStateContext.Provider value={todoState}>
        <TodoDispatchContext.Provider value={todoDispatch}>
          <TodoInputContext.Provider value={inputState}>
            <TodoInputDispatchContext.Provider value={inputDispatch}>
              <TodoChangeInputContext.Provider value={changeInputState}>
                <TodoChangeInputDispatchContext.Provider
                  value={changeInputDispatch}
                >
                  <EverydayStateContext.Provider value={everydayState}>
                    <EverydayDispatchContext.Provider value={everydayDispatch}>
                      <EverydayInputContext.Provider value={everydayInputState}>
                        <EverydayInputDispatchContext.Provider
                          value={everydayInputDispatch}
                        >
                          <EverydayChangeInputContext.Provider
                            value={everydayChangeInputState}
                          >
                            <EverydayChangeInputDispatchContext.Provider
                              value={everydayChangeInputDispatch}
                            >
                              {props.children}
                            </EverydayChangeInputDispatchContext.Provider>
                          </EverydayChangeInputContext.Provider>
                        </EverydayInputDispatchContext.Provider>
                      </EverydayInputContext.Provider>
                    </EverydayDispatchContext.Provider>
                  </EverydayStateContext.Provider>
                </TodoChangeInputDispatchContext.Provider>
              </TodoChangeInputContext.Provider>
            </TodoInputDispatchContext.Provider>
          </TodoInputContext.Provider>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </>
  )
}

/* Todo */
export function useTodoState() {
  const value = useContext(TodoStateContext)

  if (!value) {
    throw new Error('Cannot find useTodoStae.')
  }

  return value
}

export function useTodoDispatch() {
  const value = useContext(TodoDispatchContext)

  if (!value) {
    throw new Error('Cannot find useTodoDispatch.')
  }

  return value
}

export function useTodoInputState() {
  const value = useContext(TodoInputContext)

  if (!value) {
    throw new Error('Cannot find useTodoInputState.')
  }

  return value
}

export function useTodoInputDispatch() {
  const value = useContext(TodoInputDispatchContext)

  if (!value) {
    throw new Error('Cannot find useTodoInputDispatch.')
  }

  return value
}

export function useTodoChangeInputState() {
  const value = useContext(TodoChangeInputContext)

  if (!value) {
    throw new Error('Cannot find useTodoChangeInputState.')
  }

  return value
}

export function useTodoChangeInputDispatch() {
  const value = useContext(TodoChangeInputDispatchContext)

  if (!value) {
    throw new Error('Cannot find useTodoChangeInputDispatch.')
  }

  return value
}

/* Everyday's Todo */

export function useEverydayState() {
  const value = useContext(EverydayStateContext)

  if (!value) {
    throw new Error('Cannot find useEverydayStae.')
  }

  return value
}

export function useEverydayDispatch() {
  const value = useContext(EverydayDispatchContext)

  if (!value) {
    throw new Error('Cannot find useEverydayDispatch.')
  }

  return value
}

export function useEverydayInputState() {
  const value = useContext(EverydayInputContext)

  if (!value) {
    throw new Error('Cannot find useEverydayInputState.')
  }

  return value
}

export function useEverydayInputDispatch() {
  const value = useContext(EverydayInputDispatchContext)

  if (!value) {
    throw new Error('Cannot find useEverydayInputDispatch.')
  }

  return value
}

export function useEverydayChangeInputState() {
  const value = useContext(EverydayChangeInputContext)

  if (!value) {
    throw new Error('Cannot find useEverydayChangeInputState.')
  }

  return value
}

export function useEverydayChangeInputDispatch() {
  const value = useContext(EverydayChangeInputDispatchContext)

  if (!value) {
    throw new Error('Cannot find useEverydayChangeInputDispatch.')
  }

  return value
}
