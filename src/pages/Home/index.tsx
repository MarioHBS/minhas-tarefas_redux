import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaTarefas'

const HomePage = () => (
  <>
    <BarraLateral showFilters />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default HomePage
