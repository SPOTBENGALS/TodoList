import { ReactNode } from 'react'
import { useEverydayState } from '../Hooks/TodoProvider'

interface EverydayTodoListAreaProps {
  children: ReactNode
}

const EverydayTodoListArea = (props: EverydayTodoListAreaProps) => {
  const everydayTodoState = useEverydayState()
  if (everydayTodoState.everydaytodos.length < 1) {
    return null
  }
  return <>{props.children}</>
}

export default EverydayTodoListArea
