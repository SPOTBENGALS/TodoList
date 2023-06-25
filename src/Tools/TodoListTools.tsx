import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { CgRadioCheck } from 'react-icons/cg'
import styles from './TodoListTools.module.css'
import { useTodoDispatch, useTodoState } from '../Hooks/TodoProvider'

const TodoListTools = () => {
  const todoState = useTodoState()
  const todoDispatch = useTodoDispatch()

  function isTodoAllChecked() {
    return todoState.todos.every((todo) => todo.isChecked)
  }

  function handleCheckAllList() {
    todoDispatch({
      type: 'allCheck',
      payload: { isCheckedAll: isTodoAllChecked() }
    })
  }

  function handleDeleteAllList() {
    if (confirm('할일 목록을 모두 삭제하시겠습니까?') === true) {
      todoDispatch({
        type: 'allDelete'
      })
    }
  }

  return (
    <section className={styles.toolsContainer}>
      <button className={styles.toolButton} onClick={handleCheckAllList}>
        {isTodoAllChecked() ? (
          <>
            <CgRadioCheck className={styles.checkAllIcon} />
            전체해제
          </>
        ) : (
          <>
            <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon} />
            전체완료
          </>
        )}
      </button>
      <button
        className={[styles.toolButton, styles.deleteAllButton].join(' ')}
        onClick={handleDeleteAllList}
      >
        <MdDelete className={styles.deleteAllIcon} />
        전체삭제
      </button>
    </section>
  )
}

export default TodoListTools
