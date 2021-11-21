import React, { useState } from 'react';
// and link bootstrap.css from CDN in html
import './App.css';


function App() {
  return (
    <Home />
  )
}

function Home() {
  return (
    <div className="content">
      <div className="intro">
        <h1>React Snippets</h1>
        <p>Try to make some example/reuseable snippets.</p>
      </div>
    </div>
  )
}



export default App;