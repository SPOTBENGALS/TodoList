import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { CgRadioCheck } from 'react-icons/cg'
import { useEverydayDispatch, useEverydayState } from '../Hooks/TodoProvider'
import styles from './TodoListTools.module.css'

const EverydayTodoListTools = () => {
  const everydayTodoState = useEverydayState()
  const everydayTodoDispatch = useEverydayDispatch()

  function isTodoAllChecked() {
    return everydayTodoState.everydaytodos.every(
      (everydaytodo) => everydaytodo.isChecked
    )
  }

  function handleCheckAllList() {
    everydayTodoDispatch({
      type: 'allCheck',
      payload: { isCheckedAll: isTodoAllChecked() }
    })
  }

  function handleDeleteAllList() {
    if (confirm('오늘의 할일 목록을 모두 삭제하시겠습니까?') === true) {
      everydayTodoDispatch({
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

export default EverydayTodoListTools
