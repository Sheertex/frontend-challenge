import React from 'react';
import sizeGuide from './size-guide.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={sizeGuide} className="size-guide" alt="size-guide" />
    </div>
  );
}

export default App;
