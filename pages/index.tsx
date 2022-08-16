import { Deta } from 'deta'

import Container from 'components/Container'
import TaskView from 'components/TaskView'
const deta = Deta(process.env.NEXT_PUBLIC_DETA_PROJECT_KEY)
const db = deta.Base('tasks')
export type DetaBase = typeof db

export default function Home() {
  // console.log(deta)

  return (
    <Container>
      <div className='inset-0 flex flex-col items-center justify-center'>
        <TaskView db={db} />
      </div>
    </Container>
  )
}
