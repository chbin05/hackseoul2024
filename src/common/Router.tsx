import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HOME } from './routePath'

import HomePage from '../views/components/pages/Home'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
    </Routes>
  )
}

export default Router