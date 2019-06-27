import React from 'react';
import ParentComponent from './ParentComponent';
import './App.css';

/*
 * In this particular file, we don't do much other than add the
 * ParentComponent to the page. Most of the "meat" of this code lives
 * in the ParentComponent.
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;
