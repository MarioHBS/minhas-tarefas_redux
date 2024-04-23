import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variables from '../../styles/variables'

export const FAB = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  color: #fff;
  background-color: ${variables.greenOk};
  font-size: 40px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`
