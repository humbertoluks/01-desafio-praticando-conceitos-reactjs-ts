import { ITask } from '../../App'
import { Task } from '../Task'
import style from './tasks.module.css'

interface Props {
  taskList: ITask[]
}

export function Tasks({ taskList }: Props) {
  const taskQuantity = taskList.length
  const taskCompleted = taskList.filter( task => task.isDone ).length

  return (
    <section className={style.tasks}>
      <header className={style.info}>
        <div>
          <p className={style.created}>Tarefas criadas</p>
          <span className={style.counter}>{taskQuantity}</span>
        </div>

        <div>
          <p className={style.done}>Tarefas criadas</p>
          <span className={style.counter}>{taskCompleted} de {taskQuantity}</span>
        </div>
      </header>
      <div className={style.list}>
        {
          taskList.map(task => (
            <Task key={task.id} task={task} />
          ))
        }
      </div>
    </section>
  )
}
