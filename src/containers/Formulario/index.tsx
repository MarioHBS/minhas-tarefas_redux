import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { register } from '../../redux/tasks'
import { PriorityType, StatusType } from '../../utils/enums/tasks_enum'
// styles
import {
  ButtonSaveTask,
  Campo,
  MainContainer,
  TitleResult
} from '../../styles/global_style'
import { Form, Option, Options } from './styles'

const FormComponent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(PriorityType.NORMAL)

  const registerTask = (evt: FormEvent) => {
    evt.preventDefault()

    dispatch(
      register({
        title,
        description,
        priority,
        status: StatusType.PENDING
      })
    )
    navigate('/') // assim que cadastrar voltar para tela inicial
  }

  function change(evt: ChangeEvent<HTMLInputElement>) {
    console.log(evt.target.value)
    setTitle(evt.target.value)
  }

  return (
    <MainContainer>
      <TitleResult>Nova Tarefa</TitleResult>

      <Form onSubmit={registerTask}>
        <Campo
          type="text"
          value={title}
          onChange={change}
          placeholder="Título"
        />
        <Campo
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as={'textarea'}
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
