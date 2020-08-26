import React from 'react';

import ProjectHeader from './components/ProjectHeader/ProjectHeader';
import Grid from './components/Grid/Grid';
import ProjectFooter from './components/ProjectFooter/ProjectFooter';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProjectHeader />
      <Grid />
      <ProjectFooter />
    </div>
  );
}

export default App;
