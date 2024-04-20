import * as S from './styles'

const TaskComponent = () => (
  <S.CardTask>
    <S.TitleTask>Nome da Terefa</S.TitleTask>
    <S.TagTask>importante</S.TagTask>
    <S.TagTask>pendente</S.TagTask>
    <S.DescriptionTask />
    <S.ActionBarTask>
      <S.ButtonTask>Editar</S.ButtonTask>
      <S.ButtonTask>Remover</S.ButtonTask>
    </S.ActionBarTask>
  </S.CardTask>
)

export default TaskComponent
