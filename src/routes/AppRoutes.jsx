import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Matricula from '../pages/Matricula/Matricula.jsx'
import Sucesso from '../pages/Sucesso/Sucesso.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matricula" element={<Matricula />} />
      <Route path="/sucesso" element={<Sucesso />} />
    </Routes>
  )
}
