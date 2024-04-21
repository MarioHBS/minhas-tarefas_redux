import styled from 'styled-components'

import { FilterProps } from '.'

type PropsToCard = Omit<FilterProps, 'counter' | 'label'>

export const Card = styled.div<PropsToCard>`
  padding: 8px;
  border: 1px solid ${({ ativo }) => (ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${({ ativo }) => (ativo ? '#fff' : '#fcfcfc')};
  color: ${({ ativo }) => (ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`
export const CounterStyle = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const LabelStyle = styled.span`
  font-size: 14px;
`
