
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { theme } from './theme'
import './App.css'
import Home from './pages/home'

const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
          <Home />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
