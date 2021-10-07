import React from 'react';
import DocRoute from './routes/DocRoute';
import FrontendRoute from './routes/FrontendRoute';
import BackendRoute from './routes/BackendRoute';
// import './App.css';

function App() {
  return (
    <div className="App">
      <DocRoute />
      <FrontendRoute />
      <BackendRoute />
    </div>
  );
}

export default App;
