import { useTodoState } from '../Hooks/TodoProvider'
import styles from './TodoHeader.module.css'

const TodoHeader = () => {
  const todoState = useTodoState()
  const count = todoState.todos.filter((todo) => !todo.isChecked).length
  return (
    <header>
      <h4>
        <mark className={styles.todoCount}>{count}</mark>개의 할 일이 남았어요!
      </h4>
    </header>
  )
}

export default TodoHeader
