import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@blueprintui/components/include/button.js'
import '@blueprintui/components/include/card.js'
import '@blueprintui/components/include/tag.js'
import '@blueprintui/components/include/badge.js'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
