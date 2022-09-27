import style from './task.module.css'
import { PlusCircle } from 'phosphor-react'

export function Task() {
  return (
    <form action="#" className={style.newFormTask}>
      <input type="text" name="task" id="task" placeholder='Adicione uma nova tarefa' />
      <button>Criar<PlusCircle size={20} weight="bold" /></button>
    </form>
  )
}
