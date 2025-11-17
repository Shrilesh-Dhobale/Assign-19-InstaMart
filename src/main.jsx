
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Navbar from './Navbar.jsx'
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </BrowserRouter>
    )
