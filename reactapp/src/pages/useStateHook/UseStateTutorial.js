import {useState} from 'react';
import "./useStateTutorial.css";

const UseStateTutorial=()=> {

  const [counter,setCounter]=useState(0);
  const [inputValue,setInputValue]=useState("Type something to change the above text!");

  const increment=()=>{
    setCounter(counter+1);
  };

  const decrement=()=>{
    setCounter(counter-1);
  };

  let changeText=(event)=>{
    
    const newValue = event.target.value;
    setInputValue(newValue);

  };

  return (
    <div className="useStateTutorial">

      <h1>useState Hook</h1>
      <div>Count : {counter}</div>
          <div className="buttons">
            <button onClick={increment}
              style={{height: '30px', width : '100px'}}>Increment</button>
            <button onClick={decrement}
              style={{height: '30px', width : '100px'}}>Decrement</button>
          </div>
      <input className = "input-field" placeholder="Enter text here" onChange={changeText}/>{inputValue}
    
    </div>
  )
}

export default UseStateTutorial