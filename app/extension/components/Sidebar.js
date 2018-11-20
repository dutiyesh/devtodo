import React from 'react';

import VisibilityFilters from 'SOURCE/components/VisibilityFilters';

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <h1 className="sidebar-heading">DevTodo</h1>
      <div className="sidebar-body">
        <VisibilityFilters />
      </div>
      <div className="sidebar-footer">
        <a
          href="https://github.com/dutiyesh/devtodo"
          target="_blank"
          title="GitHub"
          className="sidebar-footer-link"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
