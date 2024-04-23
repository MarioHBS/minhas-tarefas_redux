import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import TaskModel from '../../models/Task'
import { edit, remove, setChecked } from '../../redux/tasks'
import { ButtonSaveTask, ButtonTask } from '../../styles/global_style'
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

  function changeState(evt: ChangeEvent<HTMLInputElement>) {
    dsp(
      setChecked({
        id,
        finished: evt.target.checked
      })
    )
  }

  return (
    <S.CardTask>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === StatusType.CONCLUDED}
          onChange={changeState}
        />
        <S.TitleTask>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.TitleTask>
      </label>
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
            <ButtonSaveTask onClick={editElm}>Salvar</ButtonSaveTask>
            <S.ButtonCancelTask onClick={cancel_remove}>
              Cancelar
            </S.ButtonCancelTask>
          </>
        ) : (
          <>
            <ButtonTask onClick={() => setEdit(true)}>Editar</ButtonTask>
            <S.ButtonCancelTask onClick={removeElm}>Remover</S.ButtonCancelTask>
          </>
        )}
      </S.ActionBarTask>
    </S.CardTask>
  )
}

export default TaskComponent
