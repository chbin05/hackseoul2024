import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './common/Router';

import './scss/global.scss';
import { RecoilRoot } from 'recoil';
import ajaxModules from './modules/ajax';

function App() {
  useLayoutEffect(() => {
    ajaxModules.create({})
  }, [])

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
