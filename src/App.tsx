import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Router from './common/Router'

import './scss/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
