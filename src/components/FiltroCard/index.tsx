import * as S from './styles'

export type Props = {
  ativo?: boolean
  counter: number
  label: string
}

const FiltroCard = ({ ativo, counter, label }: Props) => (
  <S.Card ativo={ativo}>
    <S.CounterStyle>{counter}</S.CounterStyle>
    <S.LabelStyle>{label}</S.LabelStyle>
  </S.Card>
)

export default FiltroCard
