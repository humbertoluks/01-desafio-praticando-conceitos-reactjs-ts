import { Trash } from 'phosphor-react'
import style from './task.module.css'

export function Task() {
  return (
    <div className={style.task}>
      <button className={style.checkContainer}>
        <div></div>
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>
      <button className={style.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}
