import { ChangeEvent, FormEvent, useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { FaPenSquare } from 'react-icons/fa'
import {
  useTodoChangeInputDispatch,
  useTodoChangeInputState,
  useTodoDispatch
} from '../Hooks/TodoProvider'
import styles from './TodoItem.module.css'

interface TodoItemProps {
  id: number
  text: string
  isChecked: boolean
}

const TodoItem = (props: TodoItemProps) => {
  const todoDispatch = useTodoDispatch()
  const changeInputDispatch = useTodoChangeInputDispatch()
  const changeInputState = useTodoChangeInputState()
  const [showInput, setShowInput] = useState(false)
  const onInputContainer = showInput ? styles.onInputContainer : ''

  const handleToggleCheck = () => {
    todoDispatch({
      type: 'check',
      payload: { id: props.id }
    })
  }

  const handleDeleteClick = () => {
    todoDispatch({
      type: 'delete',
      payload: { id: props.id }
    })
  }

  const showChangeInput = () => {
    setShowInput(!showInput)
  }

  const handleChangeInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeInputDispatch({
      type: 'change',
      payload: event.target.value
    })
  }

  const handleChangeSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!changeInputState.text) {
      return
    }

    todoDispatch({
      type: 'delete',
      payload: { id: props.id }
    })
    todoDispatch({
      type: 'create',
      payload: { text: changeInputState.text }
    })

    console.log(`Task is changed - ${changeInputState.text} [${Date.now()}]`)

    setShowInput(false)
  }

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
          placeholder={props.text}
          value={changeInputState.text}
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

export default TodoItem
