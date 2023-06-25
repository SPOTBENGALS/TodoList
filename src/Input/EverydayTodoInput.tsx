import { ChangeEvent, FormEvent } from 'react'
import { RiChatNewLine } from 'react-icons/ri'
import {
  useEverydayDispatch,
  useEverydayInputDispatch,
  useEverydayInputState
} from '../Hooks/TodoProvider'
import styles from './Todoinput.module.css'

const EverydayTodoInput = () => {
  const everydayInputDispatch = useEverydayInputDispatch()
  const everydayInputState = useEverydayInputState()
  const everydayTodoDispatch = useEverydayDispatch()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    everydayInputDispatch({
      type: 'change',
      payload: event.target.value
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault() //엔터 시 새로고침 방지
    if (!everydayInputState.text) {
      return
    }

    everydayTodoDispatch({
      type: 'create',
      payload: { text: everydayInputState.text }
    })

    console.log(
      `Everyday's new task is created - ${
        everydayInputState.text
      } [${Date.now()}]`
    )

    everydayInputDispatch({
      type: 'clear'
    })
  }

  return (
    <section className={styles.inputContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          placeholder={'EVERYDAYs TODOLIST'}
          value={everydayInputState.text}
          onChange={handleInputChange}
        />
        <button type="submit" className={styles.createButton}>
          <RiChatNewLine />
        </button>
      </form>
    </section>
  )
}

export default EverydayTodoInput
