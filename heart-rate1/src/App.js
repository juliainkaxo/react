import './App.css';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

function App() {
  const [age, setAge] = useState(0);
  const [upper, setUpper] = useState(0);
  const [lower, setLower] = useState(0);

  function calculate1(e) {
    e.preventDefault()
    setUpper((200 - age) * 0.85);
    setLower((200 - age) * 0.65);

  }
  return (
    <form onSubmit={calculate1}>

      <h3>Heart rate limits calculator</h3>
    <div>
          <FormGroup className="mb-3">
            <FormLabel>age</FormLabel>
            <FormControl type="number" value={age} onChange={e => setAge(e.target.value)} />
          </FormGroup>
    </div>
      <div>
        <FormGroup className="mb-3">
          <FormLabel>Heart rate limits</FormLabel>
          <output>{lower.toFixed(0)} - {upper.toFixed(0)}</output>
        </FormGroup>

      </div>

      <div>
        <Button variant="contained" color="primary" type="submit">
          Calculate
        </Button>
      </div>

    </form>
  );
}

export default App;