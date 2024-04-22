import {
  ButtonSaveTask,
  Campo,
  MainContainer,
  TitleResult
} from '../../styles/global_style'
import { Form, Options } from './styles'

const FormComponent = () => (
  <MainContainer>
    <TitleResult>Nova Tarefa</TitleResult>

    <Form>
      <Campo type="text" placeholder="Título" />
      <Campo as={'textArea'} placeholder="Descrição da tarefa" />
      {}
      <Options>
        <p>Prioridade</p>
        <input name="prioridade" type="radio" id="urgente" />{' '}
        <label htmlFor="urgente">Urgente</label>
        <input name="prioridade" type="radio" id="importante" />{' '}
        <label htmlFor="importante">Importante</label>
        <input name="prioridade" type="radio" id="normal" />{' '}
        <label htmlFor="normal">Normal</label>
      </Options>
      {}
      <ButtonSaveTask type="submit">Cadastrar</ButtonSaveTask>
    </Form>
  </MainContainer>
)

export default FormComponent
