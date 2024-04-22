import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import GlobalStyle, { Container } from './styles/global_style'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <h1>Nova Tarefa</h1>
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </>
  )
}

export default App
