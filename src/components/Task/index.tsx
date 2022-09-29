import { Trash } from 'phosphor-react'
import { ITask } from '../../App'
import style from './task.module.css'

interface Props {
  task: ITask
}

export function Task({ task }: Props) {
  return (
    <div className={style.task}>
      <button className={style.checkContainer}>
        <div></div>
      </button>
      <p>
        {task.title}
      </p>
      <button className={style.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}
