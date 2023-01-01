



import React, { useState } from 'react';
import './App.css';
import Posts from './Posts';
import Users from './Users';
import Comments from './Comments';






function App() {
  return (
    <div className="App">

      <Users />
      <Posts />
      <Comments />
      
    </div>
  );
}

export default App;

