import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const FiltroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.CounterStyle>3</S.CounterStyle>
    <S.LabelStyle>pendentes</S.LabelStyle>
  </S.Card>
)

export default FiltroCard
