import React from 'react';

import AddTodoForm from 'SOURCE/containers/AddTodoForm';
import TodoListSection from './TodoListSection';

function Main() {
  return (
    <main className="main-container">
      <AddTodoForm />
      <TodoListSection />
    </main>
  );
}

export default Main;
