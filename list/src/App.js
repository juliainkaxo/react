import './App.css';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const names = ['Jouni', 'Pekka', 'Ilkka'];
    setItems(names);
  }, [])

  return (
    <div style={{ margin: '30px' }}>
      <h3>Names</h3>
      <ul>
        {items.map(item => (
          <li key={uuid()}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
