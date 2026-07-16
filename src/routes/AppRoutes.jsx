import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Matricula from '../pages/Matricula/Matricula.jsx'
import Sucesso from '../pages/Sucesso/Sucesso.jsx'
import Login from '../pages/Login/Login.jsx'
import Cadastro from '../pages/Cadastro/Cadastro.jsx'
import AreaAluno from '../pages/AreaAluno/AreaAluno.jsx'
import ProtectedRoute from '../components/ProtectedRoute.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matricula" element={<Matricula />} />
      <Route path="/sucesso" element={<Sucesso />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route
        path="/area-do-aluno"
        element={
          <ProtectedRoute>
            <AreaAluno />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
