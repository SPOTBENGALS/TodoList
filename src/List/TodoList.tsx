import TodoItem from '../ListItem/TodoItem'
import { useTodoState } from '../Hooks/TodoProvider'
import styles from './TodoList.module.css'

const TodoList = () => {
  const todoState = useTodoState()

  return (
    <section>
      <ol className={styles.todoListContainer}>
        {todoState.todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              key={todo.id}
              text={todo.text}
              isChecked={todo.isChecked}
            />
          )
        })}
      </ol>
    </section>
  )
}

export default TodoList
