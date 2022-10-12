import logo from './logo.svg';
import './App.css';
import Func_compoenet from './components/Func_compoenet';
import Hooks4 from './components/Hooks4';
import Hook5_useState_with_array from './components/Hook5_useState_with_array';
import UseEffect from './components/UseEffect';
import UseEffectClean2 from './components/UseEffectClean2';
import UseEffect3_problem from './components/UseEffect3_problem';

function App() {
  return (
    <div className="App">
      {/* <Func_compoenet/> 
      <Hook5_useState_with_array/>
      <Hooks4/>
       <UseEffectClean2/>
      */}
      <UseEffect3_problem/>
     
      
    </div>
  );
}

export default App;
