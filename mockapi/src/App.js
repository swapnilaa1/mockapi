import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [first, setfirst] = useState(0);
  let handleClick=()=>{
    
  };
  return (
    <div className="App">
    {first}
    <button onClick={()=>handleClick()}>click</button>
    </div>
  );
}

export default App;
