import styled from 'styled-components'

import { TagProps } from '.'
import variables from '../../styles/variables'

import * as enums from '../../utils/enums/tasks_enum'
import { ButtonTask } from '../../styles/global_style'

function selectColor(props: TagProps): string {
  if (props.params === 'status') {
    if (props.status === enums.StatusType.PENDING) return variables.yellow
    if (props.status === enums.StatusType.CONCLUDED) return variables.greenOk
  } else {
    if (props.priority === enums.PriorityType.URGENT) return variables.redAlert
    if (props.priority === enums.PriorityType.IMPORTANT)
      return variables.yellowDark
  }
  return '#ccc'
}

export const CardTask = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const TitleTask = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const TagTask = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  color: #fff;
  background-color: ${(props) => selectColor(props)};
  font-size: 10px;
  font-weight: bold;
  border-radius: 8px;
  margin-right: 16px;
`

export const DescriptionTask = styled.textarea`
  display: block;
  width: 100%;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBarTask = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
`

export const ButtonCancelTask = styled(ButtonTask)`
  background-color: ${variables.redAlert};
`
