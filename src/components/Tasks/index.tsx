import { Task } from '../Task'
import style from './tasks.module.css'

export function Tasks() {
  return (
    <section className={style.tasks}>
      <header className={style.info}>
        <div>
          <p className={style.created}>Tarefas criadas</p>
          <span className={style.counter}>0</span>
        </div>

        <div>
          <p className={style.done}>Tarefas criadas</p>
          <span className={style.counter}>0 de 5</span>
        </div>
      </header>
      <div className={style.list}>
        <Task></Task>
        <Task></Task>
      </div>
    </section>
  )
}
