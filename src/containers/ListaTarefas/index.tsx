import { useSelector } from 'react-redux'

import TaskComponent from '../../components/Tarefa'
import { RootReducer } from '../../redux/store'
import { Container } from './styles'

const ListaDeTarefas = () => {
  const { items: tasks } = useSelector((state: RootReducer) => state.tasks)

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskComponent
              id={task.id}
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
