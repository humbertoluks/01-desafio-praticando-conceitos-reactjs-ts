import style from './newTask.module.css'
import { PlusCircle } from 'phosphor-react'

export function NewTask() {
  return (
    <div className={style.newTask}>
      <form action="#" className={style.newTaskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="button">Criar<PlusCircle size={20} weight="bold" /></button>
      </form>
    </div>
  )
}
