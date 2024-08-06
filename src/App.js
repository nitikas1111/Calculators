import './App.css';
import Button from './Component/Button';
import Display from './Component/Display';
import { useState } from 'react';

function App() {
  const[calValue, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal("")
    }else if (buttonText === '='){
      const result = eval(calValue);
      setCalVal(result);
    }else {
      const newDsply = calValue + buttonText;
      setCalVal(newDsply);
    }
  };
  
  return (
    <div className="App">
      <div class="calculator">
        <Display displayValue ={calValue}/>
    <Button onButtonClick ={onButtonClick}/>
</div>
    </div>
  );
}

export default App;
