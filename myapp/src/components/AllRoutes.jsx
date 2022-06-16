import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cricket } from '../pages/Cricket'
import { Entertainment } from '../pages/Entertainment'
import { FrontPage } from '../pages/frontPage/FrontPage'
import { Health } from '../pages/Health'
import { India } from '../pages/India'
import { NewsDesp } from '../pages/NewsDesp'
import { Politics } from '../pages/Politics'
import { Sports } from '../pages/Sports'
import { Tech } from '../pages/Tech'
import { World } from '../pages/World'
 

export const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<FrontPage/>}/>
      <Route path="/Entertainment" element={<Entertainment/>}/>
      <Route path="/Health" element={<Health/>}/>
      <Route path="/Sports" element={<Sports/>}/>
      <Route path="/India" element={<India/>}/>
      <Route path="/Tech" element={<Tech/>}/>
      <Route path="/Cricket" element={<Cricket/>}/>
      <Route path="/Politics" element={<Politics/>}/>
      <Route path="/World" element={<World/>}/>
      <Route path="/NewsDesp" element={<NewsDesp/>}/>
    </Routes>
    </>
  )
}
