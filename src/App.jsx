import React from 'react';

import { Normalize } from 'styled-normalize';

import { AppRoutes } from './routes';

import Theme from './styles/Theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Theme>
      <AppRoutes />
      <GlobalStyle />
      <Normalize />
    </Theme>
  );
}

export default App;
