import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeClient from "./pages/client/Home.jsx"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Leaderboard from './pages/client/Leaderboard.jsx'
import MyAch from './pages/client/MyAch.jsx'
import AddAch from './pages/client/AddAch.jsx'
import UhamkaAch from './pages/client/UhamkaAch.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home-client' element={<HomeClient />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/my-achievements' element={<MyAch />} />
        <Route path='/uhamka-ach' element={<UhamkaAch />} />
        <Route path='/add-ach' element={<AddAch />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
