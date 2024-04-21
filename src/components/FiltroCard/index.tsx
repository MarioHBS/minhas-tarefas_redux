import * as S from './styles'

export type FilterProps = {
  ativo?: boolean
  counter: number
  label: string
}

const FiltroCard = ({ ativo, counter, label }: FilterProps) => (
  <S.Card ativo={ativo}>
    <S.CounterStyle>{counter}</S.CounterStyle>
    <S.LabelStyle>{label}</S.LabelStyle>
  </S.Card>
)

export default FiltroCard
