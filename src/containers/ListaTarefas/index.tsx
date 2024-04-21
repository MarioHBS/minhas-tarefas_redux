import TaskComponent, { TaskProps as TaskType } from '../../components/Tarefa'
import * as enums from '../../utils/enums/tasks_enum'
import { Container } from './styles'

const tasks: TaskType[] = [
  {
    title: 'Estudar TypesScript',
    description: 'Ver a aula 3 da EBAC',
    priority: enums.PriorityType.IMPORTANT,
    status: enums.StatusType.PENDING
  },
  {
    title: 'Pagar conta de Internet',
    description: 'Baixar fatura no Email',
    priority: enums.PriorityType.URGENT,
    status: enums.StatusType.CONCLUDED
  },
  {
    title: 'Ir para a academia',
    description: 'Fazer treino B',
    priority: enums.PriorityType.IMPORTANT,
    status: enums.StatusType.PENDING
  },
  {
    title: 'Estudar Redux',
    description: 'Ver a aula 5 da EBAC',
    priority: enums.PriorityType.IMPORTANT,
    status: enums.StatusType.CONCLUDED
  },
  {
    title: 'Ir para a academia',
    description: 'Fazer treino A',
    priority: enums.PriorityType.NORMAL,
    status: enums.StatusType.PENDING
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
