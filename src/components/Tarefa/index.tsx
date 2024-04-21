import { useState } from 'react'

import { PriorityType, StatusType } from '../../utils/enums/tasks_enum'
import * as S from './styles'

export type TaskProps = {
  title: string
  description: string
  priority: PriorityType
  status: StatusType
}

export type TagProps = {
  priority?: PriorityType
  status?: StatusType
  params: 'status' | 'priority'
}

const TaskComponent = ({ description, priority, status, title }: TaskProps) => {
  const [isEditing, setEdit] = useState(false)

  return (
    <S.CardTask>
      <S.TitleTask>{title}</S.TitleTask>
      <S.TagTask params="priority" priority={priority}>
        {priority}
      </S.TagTask>
      <S.TagTask params="status" status={status}>
        {status}
      </S.TagTask>
      <S.DescriptionTask value={description} />
      <S.ActionBarTask>
        {isEditing ? (
          <>
            <S.ButtonSaveTask>Salvar</S.ButtonSaveTask>
            <S.ButtonCancelTask onClick={() => setEdit(false)}>
              Cancelar
            </S.ButtonCancelTask>
          </>
        ) : (
          <>
            <S.ButtonTask onClick={() => setEdit(true)}>Editar</S.ButtonTask>
            <S.ButtonCancelTask>Remover</S.ButtonCancelTask>
          </>
        )}
      </S.ActionBarTask>
    </S.CardTask>
  )
}

export default TaskComponent
