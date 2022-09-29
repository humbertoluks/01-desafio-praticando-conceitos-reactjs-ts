import { useState } from "react";
import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import { Tasks } from "./components/Tasks"

export interface ITask {
  id: string;
  title: string;
  isDone: boolean
}

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([
    {
      id: crypto.randomUUID(),
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper.Duis vel sed fames integer.',
      isDone: true
    },
    {
      id: crypto.randomUUID(),
      title: 'Test task two.',
      isDone: false
    }
  ])

  function AddTask(taskTitle: string) {
    setTaskList([
      ...taskList, {
        id: crypto.randomUUID(),
        title: taskTitle,
        isDone: false
      }
    ])
  }

  return (
    <>
      <Header />
      <NewTask onAddTask={AddTask} />
      <Tasks taskList={taskList} />
    </>
  )
}

export default App
