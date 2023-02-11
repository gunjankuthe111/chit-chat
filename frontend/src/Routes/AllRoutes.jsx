import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Chat } from './Chat'
import { Home } from './Home'
import { PageNotFound } from './PageNotFound'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}
