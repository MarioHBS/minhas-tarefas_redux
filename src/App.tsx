import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaTarefas'
import GlobalStyle, { Container } from './styles/global_style'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
