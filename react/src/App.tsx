
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme'
import './App.css'
import Home from './pages/home'

function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
        <Home />
    </ThemeProvider>
  )
}

export default App
