import React from 'react';

import ProjectHeader from './components/ProjectHeader/ProjectHeader';
import MainContent from './components/MainContent/MainContent';
import ProjectFooter from './components/ProjectFooter/ProjectFooter';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProjectHeader />
      <MainContent />
      <ProjectFooter />
    </div>
  );
}

export default App;
