
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import React from 'react'
import {BrowserRouter,Routes} from 'react-router'

createRoot(document.getElementById('root'));

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>
    )
