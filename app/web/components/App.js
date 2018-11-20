import React from 'react';

import Sidebar from 'EXTENSION/components/Sidebar';
import Main from 'EXTENSION/components/Main';

function App() {
  return (
    <div className="platform-web">
      <div className="app-container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
