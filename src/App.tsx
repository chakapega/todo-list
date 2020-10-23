import React from 'react';

import AddNewTask from './components/AddNewTaskForm';

const App = (): JSX.Element => {
  return (
    <div className="app-container">
      <AddNewTask />
    </div>
  );
};

export default App;
