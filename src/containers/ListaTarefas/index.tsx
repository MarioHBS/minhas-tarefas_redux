import { useSelector } from 'react-redux'

import TaskComponent from '../../components/Tarefa'
import { RootReducer } from '../../redux/store'
import { Container } from './styles'

const ListaDeTarefas = () => {
  const { items: tasks } = useSelector((state: RootReducer) => state.tasks)
  const { query, criteria, value } = useSelector(
    (state: RootReducer) => state.filters
  )

  const filtering = () => {
    let filteredTasks = tasks
    if (query != undefined) {
      filteredTasks = filteredTasks.filter(
        (item) =>
          item.title.toLowerCase().search(query.toLocaleLowerCase()) >= 0
      )

      if (criteria === 'prioridade') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (criteria === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }

      return filteredTasks
    }

    return tasks
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{query}&ldquo;
      </p>
      <ul>
        <li>{query}</li>
        <li>{criteria}</li>
        <li>{value}</li>
      </ul>
      <ul>
        {filtering().map((task) => (
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
