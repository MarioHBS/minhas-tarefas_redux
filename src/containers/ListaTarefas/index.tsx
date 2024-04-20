import TaskComponent from '../../components/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      <li>
        <TaskComponent />
      </li>
      <li>
        <TaskComponent />
      </li>
      <li>
        <TaskComponent />
      </li>
      <li>
        <TaskComponent />
      </li>
      <li>
        <TaskComponent />
      </li>
      <li>
        <TaskComponent />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
