import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <link rel="stylesheet" href="https://use.typekit.net/jwq6foo.css"/>
        <App/>
    </StrictMode>,
)
