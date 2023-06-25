import { EverydayTodoType } from './EverydayReducer'
import { TodoType } from './todoReducer'

export function saveTodos(todos: TodoType[]) {
  localStorage.setItem('todos', JSON.stringify(todos))
  // 객체를 string으로 바꾸는 stringify
}

export function loadTodos() {
  const todoJson = localStorage.getItem('todos')

  if (!todoJson) {
    return []
  }
  try {
    return JSON.parse(todoJson)
  } catch (e) {
    console.error(e)
    return []
  }
  // string으로 바뀐 객체를 다시 객체로 바꿔주는 parse가 실패할 경우를 대비해 try로 감싼다.
}

export function saveEverydayTodos(everydaystodos: EverydayTodoType[]) {
  localStorage.setItem('everydaystodos', JSON.stringify(everydaystodos))
  // 객체를 string으로 바꾸는 stringify
}

export function loadEverydayTodos() {
  const everydayTodoJson = localStorage.getItem('everydaystodos')

  if (!everydayTodoJson) {
    return []
  }
  try {
    return JSON.parse(everydayTodoJson)
  } catch (e) {
    console.error(e)
    return []
  }
  // string으로 바뀐 객체를 다시 객체로 바꿔주는 parse가 실패할 경우를 대비해 try로 감싼다.
}
