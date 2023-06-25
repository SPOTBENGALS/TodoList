import { useEverydayState } from '../Hooks/TodoProvider'
import styles from './TodoHeader.module.css'

const EverydayTodoHeader = () => {
  const everydayTodoState = useEverydayState()
  const count = everydayTodoState.everydaytodos.filter(
    (everydaytodo) => !everydaytodo.isChecked
  ).length
  return (
    <header>
      <h4>
        [ Everyday ] 오늘의 할 일이{' '}
        <mark className={styles.todoCount}>{count}</mark>개 남았어요!
      </h4>
    </header>
  )
}

export default EverydayTodoHeader
