import { ReactNode } from 'react'
import styles from './SectionContainer.module.css'

interface TodoProviderProps {
  children: ReactNode
}

export default function SectionContainer(props: TodoProviderProps) {
  return (
    <>
      <section className={styles.sectionContainer}>{props.children}</section>
    </>
  )
}
