import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Stats from "./pages/Stats"
import InsertDna from "./pages/InsertDna"
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="stats" element={<Stats />} />
            <Route path="insert-dna" element={<InsertDna />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
