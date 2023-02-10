import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageNotFound } from './PageNotFound'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/chat' element={<h1>chat</h1>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}
