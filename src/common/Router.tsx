import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { COMPLETION, DISCOVERY, HOME, PLOGGING } from './routePath'

import HomePage from '../views/components/pages/Home'
import PloggingPage from '../views/components/pages/Plogging'
import CompletionPage from '../views/components/pages/Completion'
import DiscoveryPage from '../views/components/pages/Discovery'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={PLOGGING} element={<PloggingPage />} />
      <Route path={COMPLETION} element={<CompletionPage />} />
      <Route path={DISCOVERY} element={<DiscoveryPage />} />
    </Routes>
  )
}

export default Router