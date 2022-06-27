import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Consulta from './pages/consultar/consultar.js'
import Cadastrar from './pages/cadastrar/cadastrar.js'


export default function Raiz() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Consulta/>}></Route>
            <Route exact path='/cadastrar' element={<Cadastrar/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}