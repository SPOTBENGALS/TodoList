import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { FaPenSquare } from 'react-icons/fa'
import {
  useEverydayChangeInputDispatch,
  useEverydayChangeInputState,
  useEverydayDispatch
} from '../Hooks/TodoProvider'
import styles from './TodoItem.module.css'

interface TodoItemProps {
  reset: number
  id: number
  text: string
  isChecked: boolean
}

const EverydayTodoItem = (props: TodoItemProps) => {
  const everydayTodoDispatch = useEverydayDispatch()
  const everydayChangeInputState = useEverydayChangeInputState()
  const everydayChangeInputDispatch = useEverydayChangeInputDispatch()
  const [showInput, setShowInput] = useState(false)
  const onInputContainer = showInput ? styles.onInputContainer : ''

  const handleToggleCheck = () => {
    everydayTodoDispatch({
      type: 'check',
      payload: { id: props.id }
    })
  }

  const handleDeleteClick = () => {
    everydayTodoDispatch({
      type: 'delete',
      payload: { id: props.id }
    })
  }

  const showChangeInput = () => {
    setShowInput(!showInput)
  }

  const handleChangeInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    everydayChangeInputDispatch({
      type: 'change',
      payload: event.target.value
    })
  }

  const handleChangeSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!everydayChangeInputState.text) {
      return
    }

    everydayTodoDispatch({
      type: 'delete',
      payload: { id: props.id }
    })
    everydayTodoDispatch({
      type: 'create',
      payload: { text: everydayChangeInputState.text }
    })

    console.log(
      `Everyday's Task is changed - ${
        everydayChangeInputState.text
      } [${Date.now()}]`
    )

    setShowInput(false)
  }

  useEffect(() => {
    everydayTodoDispatch({
      type: 'reset',
      payload: { reset: props.reset }
    })
  }, [])

  return (
    <li className={styles.todoItemContainer}>
      <BsCheckCircle
        className={props.isChecked ? styles.checkedIcon : styles.unCheckedIcon}
        onClick={handleToggleCheck}
      />

      <form
        onSubmit={handleChangeSubmit}
        className={`${styles.inputContainer} ${onInputContainer}`}
      >
        <input
          key={props.id}
          placeholder={props.text}
          value={everydayChangeInputState.text}
          onChange={handleChangeInputChange}
        />
        <button type="submit">OK</button>
      </form>

      <span className={props.isChecked ? styles.throughline : ''}>
        {props.text}
      </span>
      <FaPenSquare className={styles.changeIcon} onClick={showChangeInput} />
      <IoIosRemoveCircleOutline
        className={styles.deleteIcon}
        onClick={handleDeleteClick}
      />
    </li>
  )
}

export default EverydayTodoItem
