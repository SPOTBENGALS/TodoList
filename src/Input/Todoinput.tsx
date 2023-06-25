import { ChangeEvent, FormEvent } from 'react'
import { RiChatNewLine } from 'react-icons/ri'
import {
  useTodoDispatch,
  useTodoInputDispatch,
  useTodoInputState
} from '../Hooks/TodoProvider'
import styles from './Todoinput.module.css'

const TodoInput = () => {
  const inputDispatch = useTodoInputDispatch()
  const inputState = useTodoInputState()
  const todoDispatch = useTodoDispatch()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: 'change',
      payload: event.target.value
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault() //엔터 시 새로고침 방지
    if (!inputState.text) {
      return
    }

    todoDispatch({
      type: 'create',
      payload: { text: inputState.text }
    })

    console.log(`New task is created - ${inputState.text} [${Date.now()}]`)

    inputDispatch({
      type: 'clear'
    })
  }

  return (
    <section className={styles.inputContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          placeholder={'TODOLIST'}
          value={inputState.text}
          onChange={handleInputChange}
        />
        <button type="submit" className={styles.createButton}>
          <RiChatNewLine />
        </button>
      </form>
    </section>
  )
}

export default TodoInput
