import { useSelector } from 'react-redux'

import TaskComponent from '../../components/Tarefa'
import { RootReducer } from '../../redux/store'
import { MainContainer, TitleResult } from '../../styles/global_style'

const ListaDeTarefas = () => {
  const { items: tasks } = useSelector((state: RootReducer) => state.tasks)
  const { query, criteria, value } = useSelector(
    (state: RootReducer) => state.filters
  )

  const displayResultText = (quantity: number) => {
    let message = ''
    const tail = query != undefined && query?.length > 0 ? ` e "${query}"` : ''

    if (criteria === 'todas') {
      message = `${quantity} tarefa(s) encontrada(s) como: todas ${tail}`
    } else {
      message = `${quantity} tarefa(s) encontrada(s) como: "${`${criteria} = ${value}`}"${tail}`
    }

    return message
  }

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
  const filterValue = filtering()
  const displayValue = displayResultText(filterValue.length)

  return (
    <MainContainer>
      <TitleResult as="p">{displayValue}</TitleResult>
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
    </MainContainer>
  )
}

export default ListaDeTarefas
