import TaskComponent, { TaskType } from '../../components/Tarefa'
import { Container } from './styles'

const tasks: TaskType[] = [
  {
    title: 'Estudar TypesScript',
    description: 'Ver a aula 3 da EBAC',
    priority: 'importante',
    status: 'pendente'
  },
  {
    title: 'Pagar conta de Internet',
    description: 'Baixar fatura no Email',
    priority: 'urgente',
    status: 'concluída'
  },
  {
    title: 'Ir para a academia',
    description: 'Fazer treino B',
    priority: 'importante',
    status: 'pendente'
  },
  {
    title: 'Estudar Redux',
    description: 'Ver a aula 5 da EBAC',
    priority: 'importante',
    status: 'editando'
  },
  {
    title: 'Ir para a academia',
    description: 'Fazer treino A',
    priority: 'normal',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
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

export default ListaDeTarefas
