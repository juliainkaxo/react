import './App.css';
import { useState } from 'react';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  function calculate(e) {
    e.preventDefault();
    setBmi(weight / Math.pow(height, 2));
  }

  return (
    <form onSubmit={calculate}>

      <h3>BMI Calculator</h3>

      <div>
        <label>Height</label>
        <input type="number" step="0.01" value={height} onChange={e => setHeight(e.target.value)}/>
      </div>

      <div>
        <label>Weight</label>
        <input type="number" step="1"value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>

      <div>
        <label>Bmi</label>
        <output>{bmi.toFixed(1)}</output>
      </div>

      <div>
        <button>Calculate</button>
      </div>

    </form>

  );
}

export default App;