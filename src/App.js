import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Keypad from './components/Keypad';

function App() {
  return (
    <div className="app">
      <div className="calc-wrapper">
      <Input />
      <Keypad />
    </div>
    </div>
  );
}

export default App;
