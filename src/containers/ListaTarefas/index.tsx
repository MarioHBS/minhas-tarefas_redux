import { useSelector } from 'react-redux'

import TaskComponent, { TaskProps as TaskType } from '../../components/Tarefa'
import * as enums from '../../utils/enums/tasks_enum'
import { Container } from './styles'
import { RootReducer } from '../../redux/store'

const ListaDeTarefas = () => {
  const { tasks } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tasks.map((task) => (
          <li key={task.title}>
            <TaskComponent
              title={task.title}
              description={task.description}
              status={task.status}
              priority={task.priority}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
