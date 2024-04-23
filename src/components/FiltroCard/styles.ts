import styled from 'styled-components'
import variables from '../../styles/variables'

// type PropsToCard = Omit<FilterProps, 'criterion' | 'counter' | 'label'>
type PropsToCard = {
  active: boolean
}

export const Card = styled.div<PropsToCard>`
  padding: 8px;
  border: 1px solid
    ${({ active: ativo }) => (ativo ? variables.blueEmphasis : '#a1a1a1')};
  background-color: ${({ active: ativo }) => (ativo ? '#fff' : '#fcfcfc')};
  color: ${({ active: ativo }) => (ativo ? variables.blueEmphasis : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`
export const CounterStyle = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const LabelStyle = styled.span`
  font-size: 14px;
`
