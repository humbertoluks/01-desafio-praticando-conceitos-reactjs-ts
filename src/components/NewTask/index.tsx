import style from './newTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function NewTask({ onAddTask }: Props) {

  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <div className={style.newTask}>
      <form action="#" className={style.newTaskForm} onSubmit={handleSubmit}>
        <input type="text" placeholder="Adicione uma nova tarefa" onChange={onChangeTitle} value={title} />
        <button>Criar<PlusCircle size={20} weight="bold" /></button>
      </form>
    </div>
  )
}
