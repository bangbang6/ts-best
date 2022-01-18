import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import Todo from './Todo';

function App() {
  const handleSubmit = (value:string)=>{
    console.log('提交',value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Logo imgsrc={logo}></Logo>
        <Todo handleSubmit={handleSubmit}></Todo>
      </header>
    </div>
  );
}

export default App;
