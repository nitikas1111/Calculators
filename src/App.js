import './App.css';
import Button from './Component/Button';
import Display from './Component/Display';
import { useState } from 'react';

function App() {
  const [calValue, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      try {
        // Safe evaluation of the expression
        const result = new Function('return ' + calValue)();
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      const newDsply = calValue + buttonText;
      setCalVal(newDsply);
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <Display displayValue={calValue} />
        <Button onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
