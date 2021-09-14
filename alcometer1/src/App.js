import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let alcohollevel = 0;
    let litrat = bottles * 0.33;
    let grammat = litrat * 8 * 4.5;
    let burning = weight / 10;
    let gramasleft = grammat - (burning * time);

    if (gender === 'male') {
      alcohollevel = gramasleft / (weight * 0.7);
    }
    else {
      alcohollevel = gramasleft / (weight * 0.6);
    }
    setResult(alcohollevel);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Calculating alcohol blood level</h3>

      <div>
        <label>Weight</label>
        <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>

      <div>
        <label>bottles</label>
        <input name="bottles" type="number" value={bottles} onChange={e => setBottles(e.target.value)}></input>
      </div>

      <div>
        <label>Time</label>
        <input name="time" type="number" value={time} onChange={e => setTime(e.target.value)}></input>
      </div>

      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>

        <output>{result.toFixed(1)}</output>
      </div>

      <button>Calculate</button>
    </form>

  );
}
export default App;