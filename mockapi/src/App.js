import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Webhit from './components/Webhit';

function App() {
  const [first, setfirst] = useState(0);
  let handleClick=()=>{
    
  };
  return (
    <div className="App">

    <Webhit/>
    </div>
  );
}

export default App;
