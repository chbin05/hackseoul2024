import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { COMPLETE, EDIT, HOME, COLLECT } from './routePath'

import HomePage from '../views/components/pages/Home'
import CollectPage from '../views/components/pages/TrashCollect'
import CompletePage from '../views/components/pages/Complete'
import EditPage from '../views/components/pages/TrashEdit'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={COLLECT} element={<CollectPage />} />
      <Route path={COMPLETE} element={<CompletePage />} />
      <Route path={EDIT} element={<EditPage />} />
    </Routes>
  )
}

export default Router