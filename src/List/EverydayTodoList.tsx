import EverydayTodoItem from '../ListItem/EverydayTodoItem'
import { useEverydayState } from '../Hooks/TodoProvider'
import styles from './TodoList.module.css'

const EverydayTodoList = () => {
  const everydayTodoState = useEverydayState()

  return (
    <section>
      <ol className={styles.todoListContainer}>
        {everydayTodoState.everydaytodos.map((everydaytodo) => {
          return (
            <EverydayTodoItem
              reset={everydaytodo.reset}
              id={everydaytodo.id}
              key={everydaytodo.id}
              text={everydaytodo.text}
              isChecked={everydaytodo.isChecked}
            />
          )
        })}
      </ol>
    </section>
  )
}

export default EverydayTodoList
