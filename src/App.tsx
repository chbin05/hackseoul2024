import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './common/Router';

import './scss/global.scss';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
