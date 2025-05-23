import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './Routes/Home.tsx'
import TwelveDot from "./Routes/12Dot.tsx";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <link rel="stylesheet" href="https://use.typekit.net/jwq6foo.css"/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/12Dot" element={<TwelveDot />} />
            </Routes>
        </StrictMode>
    </BrowserRouter>
)
