import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState("");
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const handleButton = (event) => {
    alert(userInput);
  };
  return (
    <div>
      <input type="text" name="user" placeholder="Please type some thing" onChange={handleInputChange} />
      <button onClick={handleButton}>Print</button>
    </div>
  );
}

export default App;
