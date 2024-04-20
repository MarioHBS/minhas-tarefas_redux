import { useState } from 'react'
import * as S from './styles'

export type TaskType = {
  title: string
  description: string
  priority: string
  status: string
}

const TaskComponent = ({ description, priority, status, title }: TaskType) => {
  const [isEditing, setEdit] = useState(false)

  return (
    <S.CardTask>
      <S.TitleTask>{title}</S.TitleTask>
      <S.TagTask>{status}</S.TagTask>
      <S.TagTask>{priority}</S.TagTask>
      <S.DescriptionTask value={description} />
      <S.ActionBarTask>
        {isEditing ? (
          <>
            <S.ButtonTask onClick={() => setEdit(false)}>Salvar</S.ButtonTask>
            <S.ButtonTask>Cancelar</S.ButtonTask>
          </>
        ) : (
          <>
            <S.ButtonTask onClick={() => setEdit(true)}>Editar</S.ButtonTask>
            <S.ButtonTask>Remover</S.ButtonTask>
          </>
        )}
      </S.ActionBarTask>
    </S.CardTask>
  )
}

export default TaskComponent
