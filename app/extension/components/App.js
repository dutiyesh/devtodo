import React from 'react';
import classnames from 'classnames';

import Sidebar from './Sidebar';
import Main from './Main';
import getThemeName from '../utils/Theme';

function App() {
  const themeName = getThemeName();
  const containerClassName = classnames('app-container', themeName);

  return (
    <div className={containerClassName}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
