import { FormEvent, useState } from 'react'
import {
  ButtonSaveTask,
  Campo,
  MainContainer,
  TitleResult
} from '../../styles/global_style'
import { Form, Option, Options } from './styles'
import { useDispatch } from 'react-redux'
import { PriorityType, StatusType } from '../../utils/enums/tasks_enum'
import TaskModel from '../../models/Task'
import { register } from '../../redux/tasks'
import { useNavigate } from 'react-router-dom'

const FormComponent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(PriorityType.NORMAL)

  const registerTask = (evt: FormEvent) => {
    evt.preventDefault()

    const newTask = new TaskModel(
      45,
      title,
      description,
      priority,
      StatusType.PENDING
    )

    dispatch(register(newTask))
    navigate('/') // assim que cadastrar voltar para tela inicial
  }

  return (
    <MainContainer>
      <TitleResult>Nova Tarefa</TitleResult>

      <Form onSubmit={registerTask}>
        <Campo
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as={'textArea'}
          placeholder="Descrição da tarefa"
        />
        {}
        <Options>
          <p>Prioridade</p>
          {Object.values(PriorityType).map((p) => (
            <Option key={p}>
              <input
                value={p}
                onChange={({ target }) =>
                  setPriority(target.value as PriorityType)
                }
                name="prioridade" // chave do 'radio group'
                type="radio"
                id={p}
                defaultChecked={priority === PriorityType.NORMAL}
              />{' '}
              <label htmlFor={p}>{p}</label>
            </Option>
          ))}
        </Options>
        {}
        <ButtonSaveTask type="submit">Cadastrar</ButtonSaveTask>
      </Form>
    </MainContainer>
  )
}

export default FormComponent
