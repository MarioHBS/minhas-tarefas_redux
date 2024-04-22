import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home'
import GlobalStyle, { Container } from './styles/global_style'
import NewTaskPage from './pages/NewTask'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/novo',
    element: <NewTaskPage />
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
