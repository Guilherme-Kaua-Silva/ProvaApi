import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Consulta from './pages/cadastrar'
import Inserir from './pages/consultar'


export default function Routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Consulta/>}></Route>
            <Route exact path='/inserir' element={<Inserir/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}