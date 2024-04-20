import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard counter={1} label="pendentes" />
        <FiltroCard counter={1} label="concluídas" />
        <FiltroCard counter={1} label="urgentes" />
        <FiltroCard counter={5} label="importantes" />
        <FiltroCard ativo counter={1} label="normal" />
        <FiltroCard counter={10} label="todas" />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
