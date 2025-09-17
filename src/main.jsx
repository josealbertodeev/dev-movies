import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rota from './routes/routes.jsx'
import { GlobalStyle } from './styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Rota />
    </BrowserRouter>
    <GlobalStyle />
  </StrictMode>
)
