import { useState } from 'react'
import { useDispatch } from 'react-redux'

import TaskModel from '../../models/Task'
import { edit, remove } from '../../redux/tasks'
import { PriorityType, StatusType } from '../../utils/enums/tasks_enum'
import { objectify } from '../../utils/tools'
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

const TaskComponent = ({
  id,
  description,
  priority,
  status,
  title
}: TaskModel) => {
  const dsp = useDispatch()
  const [isEditing, setEdit] = useState(false)
  const [descriptionValue, setDescription] = useState(description)

  const removeElm = () => dsp(remove(id))
  const editElm = () => {
    dsp(
      edit(
        objectify(new TaskModel(id, title, descriptionValue, priority, status))
      )
    )
    setEdit(false)
  }

  function cancel_remove() {
    setEdit(false)
    setDescription(description)
  }

  return (
    <S.CardTask>
      <S.TitleTask>{title}</S.TitleTask>
      <S.TagTask params="priority" priority={priority}>
        {priority}
      </S.TagTask>
      <S.TagTask params="status" status={status}>
        {status}
      </S.TagTask>
      <S.DescriptionTask
        disabled={!isEditing}
        value={descriptionValue}
        onChange={(evt) => setDescription(evt.target.value)}
      />
      <S.ActionBarTask>
        {isEditing ? (
          <>
            <S.ButtonSaveTask onClick={editElm}>Salvar</S.ButtonSaveTask>
            <S.ButtonCancelTask onClick={cancel_remove}>
              Cancelar
            </S.ButtonCancelTask>
          </>
        ) : (
          <>
            <S.ButtonTask onClick={() => setEdit(true)}>Editar</S.ButtonTask>
            <S.ButtonCancelTask onClick={removeElm}>Remover</S.ButtonCancelTask>
          </>
        )}
      </S.ActionBarTask>
    </S.CardTask>
  )
}

export default TaskComponent
