import { DetaBase } from 'pages'
import React, { useEffect, useState } from 'react'

interface TaskViewProps {
  db: DetaBase
}

interface Task {
  key: string
  task: string
  completed: boolean
  dueDate: string
}

const TaskView: React.FC<TaskViewProps> = ({ db }) => {
  const [tasks, setTasks] = useState<Array<Task>>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    const fetchTasks = async () => {
      try {
        const res = await db.fetch()
        setTasks(res.items)
      } catch (error) {
        setError(error as string)
      }
    }

    if (isMounted) {
      fetchTasks()
    }
    return () => {
      isMounted = false
    }
  }, [db])

  console.log(tasks)
  return (
    <div>
      <div className='p-8 bg-gray-50 dark:bg-gray-900'>
        <h1 className='text-4xl font-bold'>Tasks</h1>
        {tasks?.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <span className='text-white'>{task.task}</span>
              </li>
            ))}
          </ul>
        ) : tasks ? (
          <span>all done</span>
        ) : !error ? (
          'loading...'
        ) : (
          error
        )}
      </div>
    </div>
  )
}

export default TaskView
